import { api } from './client.js';

function parseProfileResult(result, fallbackMessage) {
  if (result?.message) {
    throw new Error(result.message);
  }

  return result;
}

export async function fetchProfile(token) {
  const data = await api('/profile/show', {
    method: 'POST',
    body: {},
    token,
  });

  return parseProfileResult(data.result, 'Failed to load profile');
}

export async function updateUsername(token, username) {
  const data = await api('/profile/update-user', {
    method: 'POST',
    body: { username },
    token,
  });

  const result = parseProfileResult(data.result, 'Failed to update username');

  if (!result?.name) {
    throw new Error('Failed to update username');
  }

  return result;
}

export async function updatePassword(token, { password, newPwd, newPwdConf }) {
  const data = await api('/profile/update-pwd', {
    method: 'POST',
    body: { password, newPwd, newPwdConf },
    token,
  });

  const result = parseProfileResult(data.result, 'Failed to update password');

  if (!result?.updated) {
    throw new Error('Failed to update password');
  }

  return result;
}
