import { api } from './client.js';

function parseMessagePayload(data, key) {
  if (data?.message) {
    throw new Error(data.message);
  }

  const value = data?.[key];
  if (value?.message) {
    throw new Error(value.message);
  }

  return value;
}

export async function sendFriendRequest(token, toUserName) {
  const data = await api('/friends/send_request', {
    method: 'POST',
    body: { toUserName },
    token,
  });

  return data;
}

export async function acceptFriendRequest(token, payload) {
  const data = await api('/friends/accept_request', {
    method: 'POST',
    body: payload,
    token,
  });

  return data;
}

export async function rejectFriendRequest(token, requestId) {
  const data = await api('/friends/reject_request', {
    method: 'POST',
    body: { requestId },
    token,
  });

  return data;
}

export async function removeFriend(token, payload) {
  const data = await api('/friends/remove_friend', {
    method: 'POST',
    body: payload,
    token,
  });

  return data;
}

export async function fetchFriends(token) {
  const data = await api('/friends/list', {
    method: 'GET',
    token,
  });

  return Array.isArray(data.friends) ? data.friends : [];
}

export async function fetchFriendRequests(token) {
  const data = await api('/friends/requests', {
    method: 'GET',
    token,
  });

  return {
    received: Array.isArray(data.received) ? data.received : [],
    sent: Array.isArray(data.sent) ? data.sent : [],
  };
}
