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
  message?: string
  code?: string | undefined
} | null | undefined

/**
 * Fallback map for responses that don't include a `code`. Keys are the raw
 * English messages (lowercased/trimmed) that Supabase returns for these cases.
 */
const MESSAGE_TO_CODE: Record<string, string> = {
  'invalid login credentials': 'invalid_credentials',
  'email not confirmed': 'email_not_confirmed',
  'user already registered': 'user_already_exists',
  'password is too weak': 'weak_password',
  'email rate limit exceeded': 'over_email_send_rate_limit',
  'signups not allowed for this instance': 'signup_disabled',
  'user not found': 'user_not_found',
}

export function localizeAuthError(
  error: AuthErrorLike,
  errors?: Record<string, string>
): string {
  if (!error) return ''

  const message = error.message ?? ''

  if (errors) {
    const code =
      error.code || MESSAGE_TO_CODE[message.toLowerCase().trim()]
    if (code && errors[code]) return errors[code]
  }

  return message
}

export default localizeAuthError
