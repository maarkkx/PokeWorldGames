import * as repository from './repository';
import * as regex from '../constants';
import { formatProfileAppearance } from '../format';

export async function updateAppearance(
  userId: number,
  pokemonId: unknown,
  bgColor: unknown
) {
  try {
    if (!userId) {
      throw new Error('The user ID is required');
    }

    const parsedPokemonId = Number(pokemonId);
    if (!regex.isValidProfilePokemonId(parsedPokemonId)) {
      throw new Error('Invalid profile pokemon id');
    }

    if (typeof bgColor !== 'string' || !regex.regexProfileBgColor.test(bgColor)) {
      throw new Error('Invalid profile background color');
    }

    const updated = await repository.updateAppearance(
      userId,
      parsedPokemonId,
      bgColor
    );

    return formatProfileAppearance(
      updated.profilePokemonId,
      updated.profileBgColor
    );
  } catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : error,
    };
    console.log(error);
    return errorMessage;
  }
}
