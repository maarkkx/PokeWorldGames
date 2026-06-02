import { api } from './client.js';
import { mapPokedexPokemon } from '../utils/pokedexMerge.js';

function parseCatalogPayload(catalog) {
  if (catalog?.message) {
    throw new Error(catalog.message);
  }

  if (!Array.isArray(catalog)) {
    throw new Error('Failed to load Pokédex catalog');
  }

  return catalog.map(mapPokedexPokemon);
}

function parseOwnedPayload(pokemons) {
  if (pokemons?.message) {
    return [];
  }

  if (!Array.isArray(pokemons)) {
    throw new Error('Failed to load caught Pokémon');
  }

  return pokemons.map(mapPokedexPokemon);
}

export async function fetchPokedexCatalog(token) {
  const data = await api('/pokedex/catalog', {
    method: 'POST',
    body: {},
    token,
  });

  return parseCatalogPayload(data.catalog);
}

export async function fetchOwnedPokedex(token) {
  const data = await api('/pokedex/', {
    method: 'POST',
    body: {},
    token,
  });

  return parseOwnedPayload(data.pokemons);
}

export async function fetchPokedexData(token) {
  const [catalog, owned] = await Promise.all([
    fetchPokedexCatalog(token),
    fetchOwnedPokedex(token),
  ]);

  return { catalog, owned };
}
