//requisitos minimos para los campos de un usuario
export const regexUser = /^[a-zA-Z0-9]{4,20}$/; //de 4 a 20 caracteres
export const regexPasswd = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/; //minimo 8 caracteres, maximo 100 caracteres, 1 Mayusucla, 1 numero y 1 simbolo minimo
export const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; //x... + @ + x... + . + x...

export const PROFILE_POKEMON_ID_MIN = 1;
export const PROFILE_POKEMON_ID_MAX = 151;
export const DEFAULT_PROFILE_BG_COLOR = '#F1F1F1';
export const DEFAULT_PROFILE_POKEMON_ID = 1;
export const PINNED_SLOT_COUNT = 4;

export const regexProfileBgColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

export const OFFICIAL_ARTWORK_URL_BASE =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork';

export function buildAvatarUrl(profilePokemonId: number): string {
  return `${OFFICIAL_ARTWORK_URL_BASE}/${profilePokemonId}.png`;
}

export function isValidProfilePokemonId(id: number): boolean {
  return Number.isInteger(id) && id >= PROFILE_POKEMON_ID_MIN && id <= PROFILE_POKEMON_ID_MAX;
}