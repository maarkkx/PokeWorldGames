export function isGooglePopupCancelled(error) {
  const code = error?.code ?? '';
  return code === 'auth/popup-closed-by-user' || code === 'auth/cancelled-popup-request';
}

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

  return message;
}
