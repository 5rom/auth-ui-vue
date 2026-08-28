import { ComputedRef } from 'vue';
import { I18nVariables } from '@supabase/auth-ui-shared';
import { AuthErrorMessages } from './locales/errors';

/**
 * Resolve auth-ui-vue default labels from this package's own bundled
 * translations. The current locale is read from the host app's vue-i18n
 * instance (or @nuxtjs/i18n). When no locale match is found, falls back
 * to `en`. Callers can still override individual fields via Auth's
 * `localization.variables` prop.
 */
export declare function useAuthDefaults(): ComputedRef<I18nVariables>;
/**
 * Resolve auth error messages for the host app's current locale from this
 * package's bundled `authErrorMessages`, keyed by Supabase's `AuthError.code`.
 * Falls back to `en` when the locale is not bundled. Merged into Auth's i18n
 * `errors` field, so callers can still override individual codes via the
 * `localization.variables.errors` prop.
 */
export declare function useAuthErrorDefaults(): ComputedRef<AuthErrorMessages>;
