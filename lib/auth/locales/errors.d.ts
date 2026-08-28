/**
 * Localized messages for common Supabase auth error codes.
 *
 * Keyed by locale code (lowercase) then by the Supabase `AuthError.code`
 * (see `@supabase/auth-js` error-codes). Resolved against the host app's
 * vue-i18n locale by `useAuthErrorDefaults` and merged into the `errors`
 * field of Auth's i18n object, so hosts can override any string via the
 * `localization.variables.errors` prop.
 *
 * Only the most commonly surfaced codes are translated. Unknown codes fall
 * back to the raw message returned by the backend (see `localizeAuthError`).
 */
export type AuthErrorMessages = Record<string, string>;
export declare const authErrorMessages: Record<string, AuthErrorMessages>;
export default authErrorMessages;
