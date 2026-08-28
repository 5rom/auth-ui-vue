/**
 * Translate a Supabase auth error into the active locale.
 *
 * Supabase's `AuthError` carries a stable `code` (e.g. `invalid_credentials`).
 * We look that code up in the locale-resolved `errors` map (see
 * `useAuthErrorDefaults` / Auth's merged i18n). When the code is missing —
 * as can happen with older gotrue responses — we fall back to matching a few
 * well-known English messages. Anything unrecognised keeps the raw backend
 * message, preserving the previous behaviour.
 */
type AuthErrorLike = {
    message?: string;
    code?: string | undefined;
} | null | undefined;
export declare function localizeAuthError(error: AuthErrorLike, errors?: Record<string, string>): string;
export default localizeAuthError;
