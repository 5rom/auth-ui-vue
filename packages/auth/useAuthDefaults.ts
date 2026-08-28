import { computed, ComputedRef } from 'vue'
import { I18nVariables } from '@supabase/auth-ui-shared'
import { useI18n } from 'vue-i18n'
import { authMessages } from './locales'
import { authErrorMessages, type AuthErrorMessages } from './locales/errors'

/**
 * Read the current locale from the host app's vue-i18n instance (composition
 * mode). Falls back to `null` when vue-i18n is not available.
 */
function useHostLocale(): { value: string } | null {
  try {
    const i18n = useI18n()
    // i18n.locale is a Ref<string> (composition mode)
    return i18n.locale as unknown as { value: string }
  } catch {
    return null
  }
}

/**
 * Resolve auth-ui-vue default labels from this package's own bundled
 * translations. The current locale is read from the host app's vue-i18n
 * instance (or @nuxtjs/i18n). When no locale match is found, falls back
 * to `en`. Callers can still override individual fields via Auth's
 * `localization.variables` prop.
 */
export function useAuthDefaults(): ComputedRef<I18nVariables> {
  const localeRef = useHostLocale()

  return computed<I18nVariables>(() => {
    const code = (localeRef?.value ?? 'en').toLowerCase()
    return authMessages[code] ?? authMessages.en
  })
}

/**
 * Resolve auth error messages for the host app's current locale from this
 * package's bundled `authErrorMessages`, keyed by Supabase's `AuthError.code`.
 * Falls back to `en` when the locale is not bundled. Merged into Auth's i18n
 * `errors` field, so callers can still override individual codes via the
 * `localization.variables.errors` prop.
 */
export function useAuthErrorDefaults(): ComputedRef<AuthErrorMessages> {
  const localeRef = useHostLocale()

  return computed<AuthErrorMessages>(() => {
    const code = (localeRef?.value ?? 'en').toLowerCase()
    return authErrorMessages[code] ?? authErrorMessages.en
  })
}
