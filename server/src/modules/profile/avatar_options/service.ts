import {
  buildAvatarUrl,
  PROFILE_POKEMON_ID_MAX,
  PROFILE_POKEMON_ID_MIN,
} from '../constants';

export function getAvatarOptions() {
  const options = [];

  for (let id = PROFILE_POKEMON_ID_MIN; id <= PROFILE_POKEMON_ID_MAX; id++) {
    options.push({
      id,
      avatarUrl: buildAvatarUrl(id),
    });
  }

  return { options };
}
