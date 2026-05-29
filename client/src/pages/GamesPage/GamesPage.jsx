import { Link } from 'react-router-dom';
import AppLayout from '../../components/layout/AppLayout.jsx';
import Button from '../../components/ui/Button.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { ROUTES } from '../../config/nav.js';
import './GamesPage.css';

const GUESS_POKEMON_BULLETS = [
  KEYS.games.guessPokemon.bulletDifficulties,
  KEYS.games.guessPokemon.bulletLives,
  KEYS.games.guessPokemon.bulletXp,
];

const GUESS_SHINY_BULLETS = [
  KEYS.games.guessShiny.bulletPositions,
  KEYS.games.guessShiny.bulletAttempts,
  KEYS.games.guessShiny.bulletXp,
];

export default function GamesPage() {
  const { t } = useI18n();

  return (
    <AppLayout activeNav="games">
      <div className="games-page">
        <p className="games-page__label">{t(KEYS.games.pageLabel)}</p>

        <section className="games-intro" aria-label={t(KEYS.games.introAria)}>
          <p className="games-intro__kicker">{t(KEYS.games.kicker)}</p>
          <h1 className="games-intro__title">{t(KEYS.games.title)}</h1>
          <p className="games-intro__subtitle">{t(KEYS.games.subtitle)}</p>
        </section>

        <section className="games-modes" aria-label={t(KEYS.games.modesAria)}>
          <article className="game-mode-card">
            <div className="game-mode-card__visual game-mode-card__visual--silhouette" aria-hidden="true">
              <img src="/assets/gengar-silhouette.png" alt="" />
            </div>
            <div className="game-mode-card__body">
              <h2 className="game-mode-card__title">{t(KEYS.games.guessPokemon.title)}</h2>
              <p className="game-mode-card__desc">{t(KEYS.games.guessPokemon.description)}</p>
              <ul className="game-mode-card__bullets">
                {GUESS_POKEMON_BULLETS.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
              <div className="game-mode-card__actions">
                <Button className="game-mode-card__cta" to={ROUTES.guessPokemon}>
                  {t(KEYS.games.play)}
                </Button>
              </div>
            </div>
          </article>

          <article className="game-mode-card">
            <div className="game-mode-card__visual game-mode-card__visual--shiny" aria-hidden="true">
              <img src="/assets/gastly-shiny.png" alt="" />
            </div>
            <div className="game-mode-card__body">
              <h2 className="game-mode-card__title">{t(KEYS.games.guessShiny.title)}</h2>
              <p className="game-mode-card__desc">{t(KEYS.games.guessShiny.description)}</p>
              <ul className="game-mode-card__bullets">
                {GUESS_SHINY_BULLETS.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
              <div className="game-mode-card__actions">
                <Button className="game-mode-card__cta" to={ROUTES.guessShiny}>
                  {t(KEYS.games.play)}
                </Button>
              </div>
            </div>
          </article>
        </section>

        <aside className="games-help" aria-label={t(KEYS.games.helpAria)}>
          <p className="games-help__text">{t(KEYS.games.activeGameNote)}</p>
          <Link className="games-help__link" to={ROUTES.home}>
            {t(KEYS.common.backToHome)}
          </Link>
        </aside>
      </div>
    </AppLayout>
  );
}
