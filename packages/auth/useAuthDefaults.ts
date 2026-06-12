import { computed, ComputedRef } from 'vue'
import { I18nVariables } from '@supabase/auth-ui-shared'
import { useI18n } from 'vue-i18n'
import { authMessages } from './locales'

/**
 * Resolve auth-ui-vue default labels from this package's own bundled
 * translations. The current locale is read from the host app's vue-i18n
 * instance (or @nuxtjs/i18n). When no locale match is found, falls back
 * to `en`. Callers can still override individual fields via Auth's
 * `localization.variables` prop.
 */
export function useAuthDefaults(): ComputedRef<I18nVariables> {
  let localeRef: { value: string } | null = null
  try {
    const i18n = useI18n()
    // i18n.locale is a Ref<string> (composition mode)
    localeRef = i18n.locale as unknown as { value: string }
  } catch {
    localeRef = null
  }

  return computed<I18nVariables>(() => {
    const code = (localeRef?.value ?? 'en').toLowerCase()
    return authMessages[code] ?? authMessages.en
  })
}
