import { computed, ComputedRef } from 'vue'
import { en, I18nVariables } from '@supabase/auth-ui-shared'
import { useI18n } from 'vue-i18n'

const PREFIX = 'components.authentication'

export function useAuthDefaults(): ComputedRef<I18nVariables> {
  let t: ((key: string, args?: Record<string, unknown>) => string) | null = null
  try {
    const i18n = useI18n()
    t = (key, args) => i18n.t(key, args ?? {}) as string
  } catch {
    t = null
  }

  return computed<I18nVariables>(() => {
    if (!t) return en
    const tr = (key: string, args?: Record<string, unknown>) =>
      t!(`${PREFIX}.${key}`, args)
    // For social_provider_text we want vue-i18n to leave the {provider}
    // placeholder intact so the downstream Mustache helper (template()) can
    // substitute it at render time. Passing { provider: '{{provider}}' } makes
    // vue-i18n output the literal `{{provider}}` after interpolation.
    const mustacheProvider = { provider: '{{provider}}' }
    return {
      sign_up: {
        email_label: tr('sign_up.email_label'),
        password_label: tr('sign_up.password_label'),
        email_input_placeholder: tr('sign_up.email_input_placeholder'),
        password_input_placeholder: tr('sign_up.password_input_placeholder'),
        button_label: tr('sign_up.button_label'),
        loading_button_label: tr('sign_up.loading_button_label'),
        social_provider_text: tr('sign_up.social_provider_text', mustacheProvider),
        link_text: tr('sign_up.link_text'),
        confirmation_text: tr('sign_up.confirmation_text'),
      },
      sign_in: {
        email_label: tr('sign_in.email_label'),
        password_label: tr('sign_in.password_label'),
        email_input_placeholder: tr('sign_in.email_input_placeholder'),
        password_input_placeholder: tr('sign_in.password_input_placeholder'),
        button_label: tr('sign_in.button_label'),
        loading_button_label: tr('sign_in.loading_button_label'),
        social_provider_text: tr('sign_in.social_provider_text', mustacheProvider),
        link_text: tr('sign_in.link_text'),
      },
      magic_link: {
        email_input_label: tr('magic_link.email_input_label'),
        email_input_placeholder: tr('magic_link.email_input_placeholder'),
        button_label: tr('magic_link.button_label'),
        loading_button_label: tr('magic_link.loading_button_label'),
        link_text: tr('magic_link.link_text'),
        confirmation_text: tr('magic_link.confirmation_text'),
      },
      forgotten_password: {
        email_label: tr('forgotten_password.email_label'),
        password_label: tr('forgotten_password.password_label'),
        email_input_placeholder: tr('forgotten_password.email_input_placeholder'),
        button_label: tr('forgotten_password.button_label'),
        loading_button_label: tr('forgotten_password.loading_button_label'),
        link_text: tr('forgotten_password.link_text'),
        confirmation_text: tr('forgotten_password.confirmation_text'),
      },
      update_password: {
        password_label: tr('update_password.password_label'),
        password_input_placeholder: tr('update_password.password_input_placeholder'),
        button_label: tr('update_password.button_label'),
        loading_button_label: tr('update_password.loading_button_label'),
        confirmation_text: tr('update_password.confirmation_text'),
      },
      verify_otp: {
        email_input_label: tr('verify_otp.email_input_label'),
        email_input_placeholder: tr('verify_otp.email_input_placeholder'),
        phone_input_label: tr('verify_otp.phone_input_label'),
        phone_input_placeholder: tr('verify_otp.phone_input_placeholder'),
        token_input_label: tr('verify_otp.token_input_label'),
        token_input_placeholder: tr('verify_otp.token_input_placeholder'),
        button_label: tr('verify_otp.button_label'),
        loading_button_label: tr('verify_otp.loading_button_label'),
      },
    } as I18nVariables
  })
}
