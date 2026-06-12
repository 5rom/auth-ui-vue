import { ComputedRef } from 'vue';
import { I18nVariables } from '@supabase/auth-ui-shared';

/**
 * Resolve auth-ui-vue default labels from this package's own bundled
 * translations. The current locale is read from the host app's vue-i18n
 * instance (or @nuxtjs/i18n). When no locale match is found, falls back
 * to `en`. Callers can still override individual fields via Auth's
 * `localization.variables` prop.
 */
export declare function useAuthDefaults(): ComputedRef<I18nVariables>;
