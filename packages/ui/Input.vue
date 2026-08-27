<template>
  <div v-if="type === 'password'" :class="wrapperClass">
    <input
      v-bind="attrs"
      :type="effectiveType"
      :class="classNames"
      :style="appearance?.style?.input"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event?.target as HTMLInputElement).value)
      "
    />
    <button
      type="button"
      :class="toggleClass"
      :aria-label="showPassword ? hideLabel : showLabel"
      :aria-pressed="showPassword"
      @click.prevent="showPassword = !showPassword"
    >
      <!-- eye-off icon (password is visible -> click to hide) -->
      <svg
        v-if="showPassword"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path
          d="M9.88 9.88a3 3 0 0 0 4.24 4.24M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
        />
        <path
          d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
        />
        <line x1="2" y1="2" x2="22" y2="22" />
      </svg>
      <!-- eye icon (password is masked -> click to show) -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </button>
  </div>
  <input
    v-else
    v-bind="attrs"
    :type="type"
    :class="classNames"
    :style="appearance?.style?.input"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event?.target as HTMLInputElement).value)
    "
  />
</template>

<script lang="ts" setup>
import { computed, ref, useAttrs } from 'vue'
import { css } from '@stitches/core'
import { generateClassNames } from '@supabase/auth-ui-shared'

import { Appearance } from '../types'

defineOptions({ inheritAttrs: false })

const inputDefaultStyles = css({
  fontFamily: '$inputFontFamily',
  background: '$inputBackground',
  borderRadius: '$inputBorderRadius',
  padding: '$inputPadding',
  cursor: 'text',
  borderWidth: '$inputBorderWidth',
  borderColor: '$inputBorder',
  borderStyle: 'solid',
  fontSize: '$baseInputSize',
  width: '100%',
  color: '$inputText',
  boxSizing: 'border-box',
  '&:hover': {
    borderColor: '$inputBorderHover',
    outline: 'none'
  },
  '&:focus': {
    borderColor: '$inputBorderFocus',
    outline: 'none'
  },
  '&::placeholder': {
    color: '$inputPlaceholder',
    letterSpacing: 'initial'
  },
  transitionProperty: 'background-color, border',
  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  transitionDuration: '100ms',
  variants: {
    type: {
      default: {
        letterSpacing: '0px'
      },
      password: {
        letterSpacing: '6px'
      }
    }
  }
})

const passwordWrapperStyles = css({
  position: 'relative',
  width: '100%'
})

const passwordInputStyles = css({
  // leave room for the toggle button so text doesn't sit underneath it
  paddingInlineEnd: '40px'
})

const passwordToggleStyles = css({
  position: 'absolute',
  insetInlineEnd: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0',
  margin: '0',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  color: '$inputText',
  opacity: 0.7,
  '&:hover': {
    opacity: 1
  },
  '&:focus-visible': {
    outline: 'none',
    opacity: 1
  }
})

export interface InputProps {
  type: 'text' | 'password' | 'email'
  appearance?: Appearance
  modelValue: string
  showLabel?: string
  hideLabel?: string
}

const props = withDefaults(defineProps<InputProps>(), {
  showLabel: 'Show password',
  hideLabel: 'Hide password'
})
const attrs = useAttrs()
defineEmits(['update:modelValue'])

const showPassword = ref(false)

const effectiveType = computed(() =>
  props.type === 'password'
    ? showPassword.value
      ? 'text'
      : 'password'
    : props.type
)

const classNames = computed(() => {
  const names = generateClassNames(
    'input',
    inputDefaultStyles({
      // keep the wide masking spacing only while the value is masked
      type: effectiveType.value === 'password' ? 'password' : 'default'
    }),
    props.appearance
  )
  if (props.type === 'password') {
    names.push(passwordInputStyles().toString())
  }
  return names.join(' ')
})

// Stitches css() returns an object; stringify it so Vue's :class treats it as a
// class name rather than a { className: boolean } map.
const wrapperClass = computed(() => passwordWrapperStyles().toString())
const toggleClass = computed(() => passwordToggleStyles().toString())
</script>
