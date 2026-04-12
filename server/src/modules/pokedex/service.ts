import * as repository from './repository';

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