import * as repository from './repository';
import { formatPinnedPokemons, formatProfileAppearance } from '../format';
import * as friendshipShared from '../../friends/shared_repository';
import { resolveFriendshipForViewer } from '../../friends/format';

export async function getPublicProfile(username: string, viewerId: number) {
  try {
    const trimmed = username?.trim() ?? '';

    if (!trimmed) {
      throw new Error('The username is required');
    }

    const user = await repository.getPublicProfileByName(trimmed);

    if (!user) {
      throw new Error('User does not exist');
    }

    let friendship = resolveFriendshipForViewer(viewerId, user.id, null);

    try {
      const friendshipRow = await friendshipShared.findFriendshipBetween(
        viewerId,
        user.id
      );
      friendship = resolveFriendshipForViewer(viewerId, user.id, friendshipRow);
    } catch (friendshipError) {
      console.log(friendshipError);
    }

    const { profilePokemonId, profileBgColor, pinnedPokemons, ...base } = user;

    return {
      ...base,
      profile: formatProfileAppearance(profilePokemonId, profileBgColor),
      pinnedPokemons: formatPinnedPokemons(pinnedPokemons),
      friendship,
    };
  } catch (error) {
    const errorMessage = {
      message: error instanceof Error ? error.message : error,
    };
    console.log(error);
    return errorMessage;
  }
}
