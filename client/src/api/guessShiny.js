import { api } from './client.js';

function parseStartPayload(data) {
  const payload = data?.data;

  if (!payload) {
    throw new Error(data?.message ?? 'Failed to start game');
  }

  if (payload.message && !payload.gameId) {
    throw new Error(payload.message);
  }

  if (!payload.gameId || !payload.imageUrl || payload.correctPosition == null) {
    throw new Error(payload.message ?? 'Failed to start game');
  }

  return {
    gameId: payload.gameId,
    imageUrl: payload.imageUrl,
    correctPosition: payload.correctPosition,
  };
}

function parseAnswerPayload(data) {
  if (data.message && !data.status) {
    throw new Error(data.message);
  }

  return {
    message: data.message,
    status: data.status,
    xpEarned: data.xpEarned ?? 0,
  };
}

export async function startGame(token) {
  const data = await api('/guess-shiny/start', {
    method: 'POST',
    body: {},
    token,
  });

  return parseStartPayload(data);
}

export async function submitAnswer(token, selectedPosition) {
  const data = await api('/guess-shiny/answer', {
    method: 'POST',
    body: { selectedPosition },
    token,
  });

  return parseAnswerPayload(data);
}
