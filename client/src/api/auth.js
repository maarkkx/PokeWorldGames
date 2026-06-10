import { api, ApiError } from './client.js';

//request para hacer login
export async function login(email, password) {
  const data = await api('/auth/login', {
    method: 'POST',
    body: { email, password },
  });

  if (!data.success || !data.token) {
    throw new Error(data.message ?? 'Login failed');
  }

  return data.token;
}

export async function loginWithGoogleIdToken(idToken) {
  try {
    const data = await api('/auth/google_login', {
      method: 'POST',
      body: { idToken },
    });

    if (!data.success || !data.token) {
      throw new Error(data.message ?? 'Google sign-in failed');
    }

    return data.token;
  } catch (error) {
    if (error instanceof ApiError) {
      throw new Error(error.message || 'Google sign-in failed');
    }

    throw error;
  }
}

//request para hacer register
export async function register({ name, email, password, confirmPassword }) {
  const data = await api('/auth/register', {
    method: 'POST',
    body: { name, email, password, confirmPassword },
  });

  const result = data.user;

  if (!result?.created) {
    throw new Error(result?.message ?? 'Registration failed');
  }

  return result.user;
}

function isForgetPasswordTimeout(error) {
  return (
    (error instanceof ApiError && error.message === 'REQUEST_TIMEOUT') ||
    (error instanceof Error && error.message === 'signal timed out')
  );
}

export async function forgetPassword(email) {
  try {
    const data = await api('/auth/forget_password', {
      method: 'POST',
      body: { email },
    });

    if (data.message !== 'Email send') {
      throw new Error(data.message ?? 'Unexpected error');
    }

    return data;
  } catch (error) {
    // SMTP can outlive the client timeout; the server may still send the email.
    if (isForgetPasswordTimeout(error)) {
      return { message: 'Email send' };
    }

    if (error instanceof ApiError) {
      throw new Error(error.message || 'Unexpected error');
    }

    throw error;
  }
}

export async function resetPasswordWithToken(token, newPassword) {
  try {
    const data = await api('/auth/reset_password', {
      method: 'POST',
      body: { token, newPassword },
    });

    if (!data.success) {
      throw new Error(data.message ?? 'Unexpected error');
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw new Error(error.message || 'Unexpected error');
    }

    throw error;
  }
}
