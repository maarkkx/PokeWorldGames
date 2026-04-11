import * as repository from './repository';

async function openLootbox(userId: number, lootboxes: number) {
  try {
    if (lootboxes === 0) {
      throw new Error('This user does not have any lootboxes')
    }

    const pokemons = await repository.getRandomPokemons()

    if (!pokemons || pokemons.length === 0) {
      throw new Error('Error getting pokemons')
    }

    for (let x = 0; x < pokemons.length; x++) {
      await repository.savePokemonToUser(userId, pokemons[x].id)
    }

    const updated = await repository.removeOneLootbox(userId)

    if (updated.count === 0) {
      throw new Error('Could not remove lootbox')
    }

    return {
      message: 'Lootbox opened successfully',
      pokemons: pokemons.map((pokemon) => ({
        id: pokemon.id,
        url_image: pokemon.url_image
      }))
    }
  } catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : error
    }
    console.log(error)
    return errorMessage
  }
}

export async function lootboxesHasUser (userId: number) {
  try {
    //comprobaciones
    if (!userId) {
      throw new Error('The user ID is required')
    }

    let lootboxes = await repository.userLootboxes(userId)

    if (!lootboxes) {
      throw new Error('Error getting lootboxes for this user')
    }

    return await openLootbox(userId, lootboxes.lootboxes)

  } catch (error) {
    let errorMessage = {
      message: error instanceof Error ? error.message : error
    };
    console.log(error);
    return errorMessage;
  }

}