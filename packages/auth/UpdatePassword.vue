<template>
  <form
    :id="`auth-${authView}`"
    @submit.prevent="handleSubmit"
    autoComplete="on"
    :style="{
      width: '100%'
    }"
  >
    <Container direction="vertical" gap="large" :appearance="appearance">
      <div v-if="needsCurrentPassword">
        <Label htmlFor="current_password" :appearance="appearance">
          {{ labels?.current_password_label }}
        </Label>
        <Input
          id="current_password"
          type="password"
          name="current_password"
          autocomplete="current-password"
          autofocus
          :placeholder="labels?.current_password_input_placeholder"
          :appearance="appearance"
          v-model="currentPassword"
          :showLabel="i18n?.password_show"
          :hideLabel="i18n?.password_hide"
        />
      </div>

      <div>
        <Label htmlFor="password" :appearance="appearance">
          {{ labels?.password_label }}
        </Label>
        <Input
          id="password"
          type="password"
          name="password"
          autocomplete="new-password"
          :autofocus="!needsCurrentPassword"
          :placeholder="labels?.password_input_placeholder"
          :appearance="appearance"
          v-model="password"
          :showLabel="i18n?.password_show"
          :hideLabel="i18n?.password_hide"
        />
      </div>

      <div>
        <Label htmlFor="confirm_password" :appearance="appearance">
          {{ labels?.confirm_password_label }}
        </Label>
        <Input
          id="confirm_password"
          type="password"
          name="confirm_password"
          autocomplete="new-password"
          :placeholder="labels?.confirm_password_input_placeholder"
          :appearance="appearance"
          v-model="confirmPassword"
          :showLabel="i18n?.password_show"
          :hideLabel="i18n?.password_hide"
        />
      </div>

      <Button
        type="submit"
        color="primary"
        :loading="isLoading"
        :appearance="appearance"
      >
        {{ isLoading ? labels?.loading_button_label : labels?.button_label }}
      </Button>
    </Container>

    <Message v-if="message" :appearance="appearance">{{ message }}</Message>

    <Message v-if="error" color="danger" :appearance="appearance">
      {{ error }}
    </Message>
  </form>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { SupabaseClient } from '@supabase/supabase-js'

import {
  AuthViewKey,
  type Appearance,
  type AuthViewInjection,
  type AuthI18nVariables
} from '../types'
import { Button, Container, Input, Label, Message } from '../ui/index'
import { injectStrict } from '../utils'
import { localizeAuthError } from './localizeError'

export interface UpdatePasswordProps {
  appearance?: Appearance
  supabaseClient: SupabaseClient
  i18n?: AuthI18nVariables
}

const props = withDefaults(defineProps<UpdatePasswordProps>(), {})

const currentPassword = ref('')
const password = ref('')
const confirmPassword = ref('')
const needsCurrentPassword = ref(false)
const error = ref('')
const message = ref('')
const isLoading = ref(false)

const { authView } = injectStrict<AuthViewInjection>(AuthViewKey)

const labels = computed(
  () =>
    props.i18n?.[authView.value as 'update_password'] as AuthI18nVariables['update_password']
)

const CURRENT_PASSWORD_REQUIRED = 'current_password_required'

/**
 * Mirror GoTrue's rule (UpdatePasswordRequireCurrentPassword): the current
 * password is only checked when the user already has one and the session is
 * not a password-recovery session. OAuth-only users and the "forgot password"
 * flow therefore never see the field.
 */
const detectCurrentPasswordRequirement = async () => {
  const [{ data: userData }, { data: aalData }] = await Promise.all([
    props.supabaseClient.auth.getUser(),
    props.supabaseClient.auth.mfa.getAuthenticatorAssuranceLevel()
  ])
  const hasPassword =
    userData?.user?.identities?.some((i) => i.provider === 'email') ?? false
  const isRecovery =
    aalData?.currentAuthenticationMethods?.some(
      (m) => (m.method as string) === 'recovery'
    ) ?? false
  needsCurrentPassword.value = hasPassword && !isRecovery
}

onMounted(() => {
  detectCurrentPasswordRequirement().catch(() => {
    // Leave the field hidden; the server error below reveals it if needed
  })
})

const handleSubmit = async () => {
  error.value = ''
  message.value = ''

  if (password.value !== confirmPassword.value) {
    error.value = labels.value?.password_mismatch ?? 'Passwords do not match'
    return
  }
  if (needsCurrentPassword.value && !currentPassword.value) {
    error.value = localizeAuthError(
      { code: CURRENT_PASSWORD_REQUIRED, message: 'Current password required' },
      props.i18n?.errors
    )
    return
  }

  isLoading.value = true
  const { error: updateError } = await props.supabaseClient.auth.updateUser({
    password: password.value,
    ...(needsCurrentPassword.value && {
      current_password: currentPassword.value
    })
  })
  if (updateError) {
    // Accounts that have a password but no email identity slip past the
    // detection above; reveal the field once the server asks for it.
    if (updateError.code === CURRENT_PASSWORD_REQUIRED) {
      needsCurrentPassword.value = true
    }
    error.value = localizeAuthError(updateError, props.i18n?.errors)
  } else {
    currentPassword.value = ''
    password.value = ''
    confirmPassword.value = ''
    message.value = labels.value?.confirmation_text as string
  }
  isLoading.value = false
}
</script>
