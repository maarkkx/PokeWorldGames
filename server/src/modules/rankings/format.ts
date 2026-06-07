import { formatProfileAppearance } from '../profile/format';

export type RankingUserRow = {
  id: number;
  name: string;
  level: number;
  xp: number;
  profilePokemonId: number;
  profileBgColor: string;
  totalPokemons?: number;
  uniquePokemons?: number;
};

export function formatRankingEntry(user: Partial<RankingUserRow> | undefined) {
  if (
    !user?.id ||
    !user.name ||
    user.level == null ||
    user.xp == null ||
    user.profilePokemonId == null ||
    !user.profileBgColor
  ) {
    return undefined;
  }

  const { profilePokemonId, profileBgColor, ...rest } = user as RankingUserRow;

  return {
    ...rest,
    profile: formatProfileAppearance(profilePokemonId, profileBgColor),
  };
}
