import { api } from './client.js';

function mapPokemon(entry) {
  return {
    id: entry.id,
    name: entry.name,
    urlImage: entry.url_image ?? entry.urlImage ?? null,
  };
}

export async function openLootbox(token) {
  const data = await api('/lootbox/', {
    method: 'POST',
    body: {},
    token,
  });

  const lootbox = data.lootbox;
  const pokemons = lootbox?.pokemons;

  if (!Array.isArray(pokemons) || pokemons.length === 0) {
    throw new Error(lootbox?.message ?? 'Failed to open lootbox');
  }

  return {
    message: lootbox.message,
    roll: lootbox.roll,
    pokemonCount: lootbox.pokemon_count,
    pokemons: pokemons.map(mapPokemon),
  };
}
