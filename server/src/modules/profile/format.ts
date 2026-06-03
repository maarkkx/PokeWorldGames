import {
  buildAvatarUrl,
  DEFAULT_PROFILE_POKEMON_ID,
  PINNED_SLOT_COUNT,
} from './constants';

type PinnedRow = {
  slot: number;
  pokemon: {
    id: number;
    name: string;
    urlImage: string | null;
  };
};

export type ProfileAppearance = {
  pokemonId: number;
  bgColor: string;
  avatarUrl: string;
};

export type PinnedSlotResponse = {
  slot: number;
  pokemon: {
    id: number;
    name: string;
    urlImage: string | null;
  } | null;
};

export function formatProfileAppearance(
  profilePokemonId: number,
  profileBgColor: string
): ProfileAppearance {
  const pokemonId = profilePokemonId || DEFAULT_PROFILE_POKEMON_ID;
  return {
    pokemonId,
    bgColor: profileBgColor,
    avatarUrl: buildAvatarUrl(pokemonId),
  };
}

export function formatPinnedPokemons(rows: PinnedRow[]): PinnedSlotResponse[] {
  const bySlot = new Map(rows.map((row) => [row.slot, row.pokemon]));

  return Array.from({ length: PINNED_SLOT_COUNT }, (_, index) => {
    const slot = index + 1;
    const pokemon = bySlot.get(slot) ?? null;
    return { slot, pokemon };
  });
}
