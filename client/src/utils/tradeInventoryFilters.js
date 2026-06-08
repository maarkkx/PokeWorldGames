export const SORT_BY = {
  POKEDEX: 'pokedex',
  NAME: 'name',
  QUANTITY: 'quantity',
};

export const SORT_DIR = {
  ASC: 'asc',
  DESC: 'desc',
};

export const OWNERSHIP_FILTER = {
  ALL: 'all',
  MISSING_FROM_ME: 'missingFromMe',
  ALSO_OWN: 'alsoOwn',
  MISSING_FROM_THEM: 'missingFromThem',
  ALSO_IN_THEIR: 'alsoInTheir',
};

export const PERSPECTIVE = {
  TARGET: 'target',
  OWN: 'own',
};

export const DEFAULT_INVENTORY_FILTERS = {
  nameQuery: '',
  types: [],
  exactTypes: false,
  sortBy: SORT_BY.POKEDEX,
  sortDir: SORT_DIR.ASC,
  ownership: OWNERSHIP_FILTER.ALL,
};

/** Pokédex inventory view — same filters as trade without ownership comparison. */
export const POKEDEX_INVENTORY_DEFAULT_FILTERS = {
  nameQuery: '',
  types: [],
  exactTypes: false,
  sortBy: SORT_BY.POKEDEX,
  sortDir: SORT_DIR.ASC,
};

function getPokemonTypeNames(entry) {
  return (entry.pokemon?.types ?? [])
    .map((typeEntry) => typeEntry?.name?.toLowerCase())
    .filter(Boolean)
    .sort();
}

function pokemonMatchesTypesAny(pokemonTypeNames, selectedTypes) {
  return selectedTypes.some((typeName) => pokemonTypeNames.includes(typeName));
}

function pokemonMatchesTypesExact(pokemonTypeNames, selectedTypes) {
  const expected = [...selectedTypes].sort();

  if (pokemonTypeNames.length !== expected.length) {
    return false;
  }

  return pokemonTypeNames.every((typeName, index) => typeName === expected[index]);
}

export function buildPokemonIdSet(inventory) {
  return new Set((inventory ?? []).map((entry) => entry.pokemon.id));
}

export function collectTypeOptions(inventory) {
  const types = new Set();

  for (const entry of inventory ?? []) {
    for (const typeEntry of entry.pokemon?.types ?? []) {
      if (typeEntry?.name) {
        types.add(typeEntry.name);
      }
    }
  }

  return Array.from(types).sort((a, b) => a.localeCompare(b));
}

export function applyInventoryFilters(
  inventory,
  {
    nameQuery = '',
    types = [],
    exactTypes = false,
    sortBy = SORT_BY.POKEDEX,
    sortDir = SORT_DIR.ASC,
    ownership = OWNERSHIP_FILTER.ALL,
    perspective = PERSPECTIVE.TARGET,
    myPokemonIds = null,
    theirPokemonIds = null,
  },
) {
  let result = [...(inventory ?? [])];

  const normalizedName = nameQuery.trim().toLowerCase();
  if (normalizedName) {
    result = result.filter((entry) =>
      entry.pokemon?.name?.toLowerCase().includes(normalizedName),
    );
  }

  const selectedTypes = (Array.isArray(types) ? types : [])
    .map((typeName) => typeName?.toLowerCase())
    .filter(Boolean);

  if (selectedTypes.length > 0) {
    result = result.filter((entry) => {
      const pokemonTypeNames = getPokemonTypeNames(entry);

      if (exactTypes) {
        return pokemonMatchesTypesExact(pokemonTypeNames, selectedTypes);
      }

      return pokemonMatchesTypesAny(pokemonTypeNames, selectedTypes);
    });
  }

  if (perspective === PERSPECTIVE.TARGET && myPokemonIds) {
    if (ownership === OWNERSHIP_FILTER.MISSING_FROM_ME) {
      result = result.filter((entry) => !myPokemonIds.has(entry.pokemon.id));
    } else if (ownership === OWNERSHIP_FILTER.ALSO_OWN) {
      result = result.filter((entry) => myPokemonIds.has(entry.pokemon.id));
    }
  }

  if (perspective === PERSPECTIVE.OWN && theirPokemonIds) {
    if (ownership === OWNERSHIP_FILTER.MISSING_FROM_THEM) {
      result = result.filter((entry) => !theirPokemonIds.has(entry.pokemon.id));
    } else if (ownership === OWNERSHIP_FILTER.ALSO_IN_THEIR) {
      result = result.filter((entry) => theirPokemonIds.has(entry.pokemon.id));
    }
  }

  const direction = sortDir === SORT_DIR.DESC ? -1 : 1;

  result.sort((a, b) => {
    if (sortBy === SORT_BY.QUANTITY) {
      return (a.quantity - b.quantity) * direction;
    }

    if (sortBy === SORT_BY.NAME) {
      return a.pokemon.name.localeCompare(b.pokemon.name) * direction;
    }

    return (a.pokemon.id - b.pokemon.id) * direction;
  });

  return result;
}
