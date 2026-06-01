import { api } from './client.js';

const RANKING_KEYS = ['level', 'numberPokemons', 'uniquePokemons'];

function parseRankingsPayload(rankings) {
  if (!rankings || typeof rankings !== 'object') {
    throw new Error('Failed to load rankings');
  }

  if (rankings.message) {
    throw new Error(rankings.message);
  }

  const parsed = {};

  for (const key of RANKING_KEYS) {
    parsed[key] = Array.isArray(rankings[key]) ? rankings[key] : [];
  }

  return parsed;
}

export async function fetchRankings(token) {
  const data = await api('/ranking/', {
    method: 'POST',
    body: {},
    token,
  });

  return parseRankingsPayload(data.rankings);
}
