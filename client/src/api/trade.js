import { api, ApiError } from './client.js';

function parseUserPokemonsPayload(pokemons) {
  if (pokemons?.message) {
    throw new Error(pokemons.message);
  }

  if (!Array.isArray(pokemons)) {
    throw new Error('Failed to load Pokémon inventory');
  }

  return pokemons;
}

export async function fetchMyTrades(token) {
  const data = await api('/trade/my-trades', {
    method: 'GET',
    token,
  });

  return Array.isArray(data.trades) ? data.trades : [];
}

export async function fetchUserPokemons(username) {
  const data = await api('/trade/user-pokemons', {
    method: 'POST',
    body: { user: username },
  });

  return parseUserPokemonsPayload(data.pokemons);
}

export async function createTrade(token, { toUserName, offeredPokemons, requestedPokemons }) {
  const data = await api('/trade/request', {
    method: 'POST',
    body: { toUserName, offeredPokemons, requestedPokemons },
    token,
  });

  if (!data.trade) {
    throw new Error('Failed to create trade');
  }

  return data.trade;
}

export async function acceptTrade(token, tradeId) {
  const data = await api(`/trade/${tradeId}/accept`, {
    method: 'POST',
    body: {},
    token,
  });

  return data.trade;
}

export async function rejectTrade(token, tradeId) {
  const data = await api(`/trade/${tradeId}/reject`, {
    method: 'POST',
    body: {},
    token,
  });

  return data.trade;
}

export { ApiError };
