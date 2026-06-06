import { KEYS } from '../i18n/keys.js';

export const NAV_ITEMS = [
  { id: 'home', labelKey: KEYS.nav.home, path: '/', icon: '/assets/icon-home.svg' },
  { id: 'games', labelKey: KEYS.nav.games, path: '/games', icon: '/assets/icon-games.svg' },
  { id: 'profile', labelKey: KEYS.nav.profile, path: '/profile', icon: '/assets/icon-profile.svg' },
  { id: 'ranking', labelKey: KEYS.nav.ranking, path: '/ranking', icon: '/assets/icon-ranking.svg' },
  { id: 'trade', labelKey: KEYS.nav.trade, path: '/trade', icon: '/assets/icon-trade.svg' },
  { id: 'friends', labelKey: KEYS.nav.friends, path: '/friends', icon: '/assets/icon-friends.svg' },
  { id: 'lootboxes', labelKey: KEYS.nav.lootboxes, path: '/lootboxes', icon: '/assets/icon-lootbox.svg' },
  { id: 'pokedex', labelKey: KEYS.nav.pokedex, path: '/pokedex', icon: '/assets/icon-pokedex.svg' },
];

export const ROUTES = {
  home: '/',
  games: '/games',
  guessPokemon: '/games/guess-pokemon',
  guessPokemonRules: '/games/guess-pokemon/rules',
  guessShiny: '/games/guess-shiny',
  trade: '/trade',
  friends: '/friends',
  lootboxes: '/lootboxes',
  pokedex: '/pokedex',
  ranking: '/ranking',
  profile: '/profile',
  trainerProfile: (username) =>
    `/trainers/${encodeURIComponent(String(username ?? '').trim())}`,
};
