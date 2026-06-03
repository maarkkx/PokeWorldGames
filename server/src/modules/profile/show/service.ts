import * as repository from './repository';
import { formatPinnedPokemons, formatProfileAppearance } from '../format';

export async function getUserDetails(userId: number) {
  try {
    if (!userId) {
      throw new Error('The user ID is required');
    }

    const user = await repository.getUserDetails(userId);

    if (!user) {
      throw new Error('User does not exist');
    }

    const { profilePokemonId, profileBgColor, pinnedPokemons, ...base } = user;

    return {
      ...base,
      profile: formatProfileAppearance(profilePokemonId, profileBgColor),
      pinnedPokemons: formatPinnedPokemons(pinnedPokemons),
    };
  } catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : error,
    };
    console.log(error);
    return errorMessage;
  }
}