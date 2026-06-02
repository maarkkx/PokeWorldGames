import * as repository from './repository';

function mapPokemonTypes(
  types: { type: { name: string } }[] | undefined,
): { name: string }[] {
  if (!types?.length) {
    return [];
  }

  return types.map(({ type }) => ({ name: type.name }));
}

function mapCatalogPokemon(
  rows: Awaited<ReturnType<typeof repository.getCatalog>>,
) {
  return rows.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name,
    urlImage: pokemon.urlImage,
    types: mapPokemonTypes(pokemon.types),
  }));
}

export async function getCatalog() {
  try {
    const rows = await repository.getCatalog();

    if (!rows) {
      throw new Error('Error loading Pokémon catalog');
    }

    return mapCatalogPokemon(rows);
  } catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : error,
    };
    console.log(error);
    return errorMessage;
  }
}

export async function getPokedex(userId : number) {
  try {
    if (!userId) {
      throw new Error('The user ID is required');
    }

    const pokemons = await repository.getUserPokemons(userId);

    if (!pokemons) {
      throw new Error('This user does not have any Pokemon')
    }

    return pokemons;
  } catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : error
    }
    console.log(error)
    return errorMessage
  }
}