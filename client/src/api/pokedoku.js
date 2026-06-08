import { api } from './client.js';

function parseGamePayload(data) {
  const payload = data?.data;

  if (!payload) {
    throw new Error(data?.message ?? 'Failed to load Pokedoku game');
  }

  if (payload.message && !payload.gameId) {
    throw new Error(payload.message);
  }

  if (!payload.gameId || !Array.isArray(payload.cells)) {
    throw new Error(payload.message ?? 'Failed to load Pokedoku game');
  }

  return {
    gameId: payload.gameId,
    status: payload.status ?? 'ACTIVE',
    rows: payload.rows ?? [],
    columns: payload.columns ?? [],
    cells: payload.cells ?? [],
    usedPokemonIds: payload.usedPokemonIds ?? [],
  };
}

function parseAnswerPayload(data) {
  const response = data?.response;

  if (!response) {
    throw new Error(data?.message ?? 'Failed to submit answer');
  }

  if (response.message && !response.status && response.position == null) {
    throw new Error(response.message);
  }

  return {
    message: response.message,
    position: response.position,
    status: response.status,
    xpEarned: response.xpEarned ?? 0,
    correct: response.correct ?? false,
    pokemon: response.pokemon ?? null,
  };
}

function parseSearchPayload(data) {
  const payload = data?.data;

  if (!payload) {
    throw new Error(data?.message ?? 'Failed to search Pokémon');
  }

  if (payload.message && !Array.isArray(payload.pokemons) && !Array.isArray(payload.names)) {
    throw new Error(payload.message);
  }

  return {
    names: payload.names ?? [],
    pokemons: payload.pokemons ?? [],
  };
}

export async function startGame(token) {
  const data = await api('/pokedoku/start', {
    method: 'POST',
    body: {},
    token,
  });

  return parseGamePayload(data);
}

export async function resumeGame(token) {
  const data = await api('/pokedoku/resume', {
    method: 'POST',
    body: {},
    token,
  });

  return parseGamePayload(data);
}

export async function submitAnswer(token, { gameId, position, pokemonId }) {
  const data = await api('/pokedoku/answer', {
    method: 'POST',
    body: { gameId, position, pokemonId },
    token,
  });

  return parseAnswerPayload(data);
}

export async function searchPokemonForCell(token, { gameId, position, query }) {
  const data = await api('/pokedoku/search', {
    method: 'POST',
    body: { gameId, position, query },
    token,
  });

  return parseSearchPayload(data);
}
