import * as repository from './repository';
import { PINNED_SLOT_COUNT } from '../constants';
import { formatPinnedPokemons } from '../format';

export async function updatePinnedPokemons(
  userId: number,
  pokemonIds: unknown
) {
  try {
    if (!userId) {
      throw new Error('The user ID is required');
    }

    if (!Array.isArray(pokemonIds)) {
      throw new Error('Invalid pinned pokemon list');
    }

    if (pokemonIds.length > PINNED_SLOT_COUNT) {
      throw new Error('You can pin up to 4 Pokemon');
    }

    const parsedIds = pokemonIds.map((id) => Number(id));

    if (parsedIds.some((id) => !Number.isInteger(id) || id <= 0)) {
      throw new Error('Invalid pokemon id');
    }

    const uniqueIds = new Set(parsedIds);
    if (uniqueIds.size !== parsedIds.length) {
      throw new Error('Duplicate pokemon ids are not allowed');
    }

    if (parsedIds.length > 0) {
      const existingCount = await repository.countExistingPokemon(parsedIds);
      if (existingCount !== parsedIds.length) {
        throw new Error('Pokemon does not exist');
      }

      const ownedCount = await repository.countOwnedPokemon(userId, parsedIds);
      if (ownedCount !== parsedIds.length) {
        throw new Error('You do not own this Pokemon');
      }
    }

    const entries = parsedIds.map((pokemonId, index) => ({
      slot: index + 1,
      pokemonId,
    }));

    const rows = await repository.replacePinnedPokemons(userId, entries);

    return {
      pinnedPokemons: formatPinnedPokemons(rows),
    };
  } catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : error,
    };
    console.log(error);
    return errorMessage;
  }
}
