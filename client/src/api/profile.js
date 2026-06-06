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

export async function updateAppearance(token, { pokemonId, bgColor }) {
  const data = await api('/profile/update-appearance', {
    method: 'POST',
    body: { pokemonId, bgColor },
    token,
  });

  return parseProfileResult(data.result, 'Failed to update appearance');
}

export async function updatePinnedPokemons(token, pokemonIds) {
  const data = await api('/profile/update-pinned', {
    method: 'POST',
    body: { pokemonIds },
    token,
  });

  return parseProfileResult(data.result, 'Failed to update pinned Pokémon');
}

function parseUsersPayload(users) {
  if (users?.message) {
    throw new Error(users.message);
  }

  if (!Array.isArray(users)) {
    return [];
  }

  return users.filter((entry) => entry?.name);
}

export async function searchUsers(token, query) {
  const data = await api('/profile/search_users', {
    method: 'POST',
    body: { query },
    token,
  });

  return parseUsersPayload(data.users);
}

export async function fetchPublicProfile(token, username) {
  const data = await api('/profile/show_public', {
    method: 'POST',
    body: { user: username },
    token,
  });

  return parseProfileResult(data.result, 'Failed to load trainer profile');
}

export async function fetchAvatarOptions() {
  const data = await api('/profile/avatar-options', {
    method: 'GET',
  });

  if (data.result?.message) {
    throw new Error(data.result.message);
  }

  if (!Array.isArray(data.result?.options)) {
    throw new Error('Failed to load avatar options');
  }

  return data.result.options;
}
