import { api } from './client.js';

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
