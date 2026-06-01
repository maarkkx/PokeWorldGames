import { formatTypeDisplayName } from './pokemon.js';

export const MAX_EXACT_TYPE_COUNT = 2;

/** All standard Pokémon types (API names, lowercase). */
export const POKEMON_TYPES = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
];

export function normalizeTypeName(typeName) {
  return typeName?.trim().toLowerCase() ?? '';
}

export function typeMatchesQuery(typeName, query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return true;

  const slug = normalizeTypeName(typeName);
  const display = formatTypeDisplayName(slug).toLowerCase();

  return slug.includes(normalizedQuery) || display.includes(normalizedQuery);
}

export function filterTypeList(types, query) {
  return types.filter((typeName) => typeMatchesQuery(typeName, query));
}
