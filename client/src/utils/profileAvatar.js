export const OFFICIAL_ARTWORK_URL_BASE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

export const PROFILE_AVATAR_ID_MIN = 1;
export const PROFILE_AVATAR_ID_MAX = 151;

export const PROFILE_BG_PRESETS = [
  '#F1F1F1',
  '#FFE4E4',
  '#FFF0E4',
  '#E4F0FF',
  '#E8F5E9',
  '#F3E8FF',
  '#FFF9C4',
  '#DC2828',
  '#1D1B1B',
];

export function buildProfileAvatarUrl(pokemonId) {
  return `${OFFICIAL_ARTWORK_URL_BASE}/${pokemonId}.png`;
}

export function buildAvatarOptionsList() {
  return Array.from({ length: PROFILE_AVATAR_ID_MAX }, (_, index) => {
    const id = index + 1;
    return { id, avatarUrl: buildProfileAvatarUrl(id) };
  });
}
