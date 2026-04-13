import * as repository from './repository';

export async function getPokemonsFromUser(user : string) {
  try {
    if (!user) {
      throw new Error('The user is required');
    }

    const pokemons = await repository.getUserPokemons(user);

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