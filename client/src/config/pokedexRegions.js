/** National dex ID ranges (inclusive) per region. */
export const POKEDEX_REGIONS = [
  { id: 'kanto', minId: 1, maxId: 151 },
  { id: 'johto', minId: 152, maxId: 251 },
  { id: 'hoenn', minId: 252, maxId: 386 },
  { id: 'sinnoh', minId: 387, maxId: 493 },
  { id: 'teselia', minId: 494, maxId: 649 },
  { id: 'kalos', minId: 650, maxId: 721 },
  { id: 'alola', minId: 722, maxId: 809 },
  { id: 'galar', minId: 810, maxId: 898 },
  { id: 'hisui', minId: 899, maxId: 905 },
  { id: 'paldea', minId: 906, maxId: 1025 },
];

export const DEFAULT_POKEDEX_REGION_ID = POKEDEX_REGIONS[0].id;

export function getPokedexRegion(regionId) {
  return POKEDEX_REGIONS.find((region) => region.id === regionId) ?? POKEDEX_REGIONS[0];
}

export function isPokemonInRegion(pokemonId, region) {
  return pokemonId >= region.minId && pokemonId <= region.maxId;
}

export function countSpeciesInRange(minId, maxId) {
  return maxId - minId + 1;
}
