import * as repository from './repository';

function mapPokemonTypes(
  types: { type: { name: string } }[] | undefined,
): { name: string }[] {
  if (!types?.length) {
    return [];
  }

  return types.map(({ type }) => ({ name: type.name }));
}

function mapUserPokemonInventory(
  rows: Awaited<ReturnType<typeof repository.getUserPokemons>>,
) {
  return rows.map((row) => ({
    quantity: row.quantity,
    pokemon: {
      id: row.pokemon.id,
      name: row.pokemon.name,
      urlImage: row.pokemon.urlImage,
      types: mapPokemonTypes(row.pokemon.types),
    },
  }));
}

export async function getPokemonsFromUser(user : string) {
  try {
    if (!user) {
      throw new Error('The user is required');
    }

    const rows = await repository.getUserPokemons(user);

    if (!rows) {
      throw new Error('This user does not have any Pokemon')
    }

    const pokemons = mapUserPokemonInventory(rows);

    return pokemons;
  } catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : error
    }
    console.log(error)
    return errorMessage
  }
}