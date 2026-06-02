import { isPokemonInRegion } from '../config/pokedexRegions.js';

export function mapPokedexPokemon(entry) {
  return {
    id: entry.id,
    name: entry.name,
    urlImage: entry.urlImage ?? null,
    types: Array.isArray(entry.types) ? entry.types : [],
  };
}

export function mergePokedexEntries(catalog, ownedIds) {
  return catalog.map((pokemon) => ({
    pokemon,
    caught: ownedIds.has(pokemon.id),
  }));
}

export function filterEntriesByRegion(entries, region) {
  return entries.filter((entry) => isPokemonInRegion(entry.pokemon.id, region));
}

export function countCaughtInEntries(entries) {
  return entries.reduce((total, entry) => (entry.caught ? total + 1 : total), 0);
}
