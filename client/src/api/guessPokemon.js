import { api } from './client.js';

function parseStartPayload(data) {
  const payload = data?.data;

  if (!payload) {
    throw new Error(data?.message ?? 'Failed to start game');
  }

  if (payload.message && !payload.gameId) {
    throw new Error(payload.message);
  }

  if (!payload.gameId || payload.image == null) {
    throw new Error(payload.message ?? 'Failed to start game');
  }

  return {
    gameId: payload.gameId,
    image: payload.image,
    lives: payload.lives,
    maxAttempts: payload.maxAttempts ?? payload.lives,
    mode: payload.mode ?? 'classic',
    streak: payload.streak ?? 0,
    pendingXp: payload.pendingXp ?? 0,
    multiplier: payload.multiplier ?? 1,
  };
}

function parseCashOutPayload(data) {
  const response = data?.response;

  if (!response) {
    throw new Error(data?.message ?? 'Failed to cash out');
  }

  if (response.message && !response.status) {
    throw new Error(response.message);
  }

  return {
    message: response.message,
    status: response.status,
    xpEarned: response.xpEarned ?? 0,
    streak: response.streak ?? 0,
    mode: response.mode ?? 'infinite',
  };
}

function parseAnswerPayload(data) {
  const response = data?.response;

  if (!response) {
    throw new Error(data?.message ?? 'Failed to submit answer');
  }

  return {
    message: response.message,
    remainingAttempts: response.remainingAttempts,
    status: response.status,
    xpEarned: response.xpEarned ?? 0,
    pokemonName: response.pokemonName ?? null,
    mode: response.mode ?? 'classic',
    image: response.image ?? null,
    streak: response.streak ?? 0,
    pendingXp: response.pendingXp ?? 0,
    multiplier: response.multiplier ?? 1,
    roundXp: response.roundXp ?? 0,
    pendingXpLost: response.pendingXpLost ?? 0,
  };
}

function parseSearchPayload(data) {
  const payload = data?.data;

  if (!payload) {
    throw new Error(data?.message ?? 'Failed to search Pokémon');
  }

  if (payload.message && !Array.isArray(payload.names)) {
    throw new Error(payload.message);
  }

  return payload.names ?? [];
}

export async function startGame(token, difficult) {
  const data = await api('/guess-pokemon/start', {
    method: 'POST',
    body: { difficult },
    token,
  });

  return parseStartPayload(data);
}

export async function resumeGame(token) {
  const data = await api('/guess-pokemon/resume', {
    method: 'POST',
    body: {},
    token,
  });

  return parseStartPayload(data);
}

export async function submitAnswer(token, answer) {
  const data = await api('/guess-pokemon/answer', {
    method: 'POST',
    body: { answer },
    token,
  });

  return parseAnswerPayload(data);
}

export async function cashOutInfinite(token) {
  const data = await api('/guess-pokemon/cash-out', {
    method: 'POST',
    body: {},
    token,
  });

  return parseCashOutPayload(data);
}

export async function searchPokemonNames(token, query) {
  const data = await api('/guess-pokemon/search', {
    method: 'POST',
    body: { query },
    token,
  });

  return parseSearchPayload(data);
}
