import * as repository from './repository';

// 0,5% por apertura: un hueco aleatorio es legendario/mítico.
const LOOTBOX_LEGENDARY_BONUS_CHANCE = 0.005;
const LEGENDARY_MYTHIC_PER_SLOT_CHANCE = 0.00005;

type LootboxPokemon = {
  id: number;
  name: string;
  url_image: string | null;
};

//cantidad de pokemons que salen en la lootbox
function rollLootboxDice(): { roll: number; pokemonCount: number } {
  const roll = Math.floor(Math.random() * 10) + 1;

  if (roll >= 10) {
    return { roll, pokemonCount: 5 };
  }

  if (roll >= 7) {
    return { roll, pokemonCount: 4 };
  }

  return { roll, pokemonCount: 3 };
}


async function pickLootboxPokemon(
  excludeIds: number[],
  requireLegendaryOrMythic: boolean,
): Promise<LootboxPokemon | null> {
  const pokemon = requireLegendaryOrMythic
    ? await repository.getRandomLegendaryOrMythicExcluding(excludeIds)
    : await repository.getRandomPokemonExcluding(excludeIds);

  if (!pokemon) {
    return null;
  }

  return {
    id: pokemon.id,
    name: pokemon.name,
    url_image: pokemon.urlImage,
  };
}

async function generateLootboxPokemons(count: number) {
  //si sale mas bajo toca legendario
  const hasLegendaryBonus = Math.random() < LOOTBOX_LEGENDARY_BONUS_CHANCE;
  const legendaryBonusIndex = hasLegendaryBonus
    ? Math.floor(Math.random() * count)
    : -1;

  const excludeIds: number[] = [];
  const pokemons: LootboxPokemon[] = [];

  for (let slot = 0; slot < count; slot++) {
    const requireLegendaryOrMythic =
      slot === legendaryBonusIndex ||
      Math.random() < LEGENDARY_MYTHIC_PER_SLOT_CHANCE;

    let pokemon = await pickLootboxPokemon(excludeIds, requireLegendaryOrMythic);

    if (!pokemon && requireLegendaryOrMythic) {
      pokemon = await pickLootboxPokemon(excludeIds, false);
    }

    if (!pokemon) {
      throw new Error('Error getting pokemons');
    }

    excludeIds.push(pokemon.id);
    pokemons.push(pokemon);
  }

  return pokemons;
}

async function openLootbox(userId: number, lootboxes: number) {
  try {
    if (lootboxes === 0) {
      throw new Error('This user does not have any lootboxes');
    }

    const { roll, pokemonCount } = rollLootboxDice();
    const pokemons = await generateLootboxPokemons(pokemonCount);

    if (!pokemons || pokemons.length === 0) {
      throw new Error('Error getting pokemons');
    }

    for (let x = 0; x < pokemons.length; x++) {
      await repository.savePokemonToUser(userId, pokemons[x].id);
    }

    const updated = await repository.removeOneLootbox(userId);

    if (updated.count === 0) {
      throw new Error('Could not remove lootbox');
    }

    return {
      message: 'Lootbox opened successfully',
      roll,
      pokemon_count: pokemonCount,
      pokemons,
    };
  } catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : error,
    };
    console.log(error);
    return errorMessage;
  }
}

export async function lootboxesHasUser(userId: number) {
  try {
    //comprobaciones
    if (!userId) {
      throw new Error('The user ID is required');
    }

    let lootboxes = await repository.userLootboxes(userId);

    if (!lootboxes) {
      throw new Error('Error getting lootboxes for this user');
    }

    return await openLootbox(userId, lootboxes.lootboxes);
  } catch (error) {
    let errorMessage = {
      message: error instanceof Error ? error.message : error,
    };
    console.log(error);
    return errorMessage;
  }
}
