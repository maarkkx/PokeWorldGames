export function isGoogleSignInCancelled(error) {
  const code = error?.code ?? '';
  return (
    code === 'auth/popup-closed-by-user' ||
    code === 'auth/cancelled-popup-request' ||
    code === 'auth/user-cancelled'
  );
}

/** @deprecated Use isGoogleSignInCancelled */
export const isGooglePopupCancelled = isGoogleSignInCancelled;

export function mapAuthErrorMessage(error, t, KEYS) {
  const code = typeof error === 'string' ? '' : error?.code ?? '';
  const message = typeof error === 'string' ? error : error?.message ?? '';

  if (code === 'auth/configuration-not-found') {
    return t(KEYS.auth.firebaseAuthNotEnabled);
  }

  if (message === 'Firebase service account file not found') {
    return t(KEYS.auth.firebaseServiceAccountMissing);
  }

  if (message === 'Firebase Admin SDK is not configured') {
    return t(KEYS.auth.firebaseAdminNotConfigured);
  }

  if (message === 'Could not create or link Google user') {
    return t(KEYS.auth.googleUserPersistFailed);
  }

  if (message === 'Firebase is not configured') {
    return t(KEYS.auth.firebaseNotConfigured);
  }

  if (message === 'Use Google sign-in') {
    return t(KEYS.auth.useGoogleSignIn);
  }

  if (message === 'Invalid Firebase token') {
    return t(KEYS.auth.googleSignInFailed);
  }

  if (message === 'This account is linked to a different Google account') {
    return t(KEYS.auth.googleAccountLinkedElsewhere);
  }

  if (message === 'Invalid or expired token') {
    return t(KEYS.auth.resetTokenInvalid);
  }

  if (message === 'Token is required') {
    return t(KEYS.auth.resetTokenInvalid);
  }

  if (message === 'Email is required') {
    return t(KEYS.validation.emailInvalid);
  }

  if (message === 'Password is required') {
    return t(KEYS.validation.passwordRequired);
  }

  if (
    message ===
    'The password must be at least 8 characters long, contain 1 uppercase letter, 1 number and 1 symbol'
  ) {
    return t(KEYS.validation.passwordInvalid);
  }

  if (message === 'Unexpected error' || message === 'Internal server error') {
    return null;
  }

  if (message === 'REQUEST_TIMEOUT' || message === 'signal timed out') {
    return t(KEYS.auth.requestTimeout);
  }

  return message;
}
