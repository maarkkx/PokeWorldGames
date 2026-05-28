import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { ROUTES } from '../../config/nav.js';
import { XP_PER_LEVEL, getLevelProgress } from '../../utils/xp.js';
import AppLayout from '../../components/layout/AppLayout.jsx';
import Button from '../../components/ui/Button.jsx';
import ProgressBar from '../../components/ui/ProgressBar.jsx';
import './HomePage.css';

export default function HomePage() {
  const { user } = useAuth();
  const { t } = useI18n();
  const { levelXp, progress } = getLevelProgress(user?.xp ?? 0);
  const nextXp = XP_PER_LEVEL - levelXp;
  const displayName = user?.name ?? t(KEYS.common.trainerFallback);
  const level = user?.level ?? 1;
  const lootboxes = user?.lootboxes ?? 0;

  return (
    <AppLayout activeNav="home">
      <div className="home-page">
        <p className="home-page__label">{t(KEYS.home.pageLabel)}</p>
        <section className="home-hero">
          <div className="home-hero__copy">
            <p className="home-hero__kicker">{t(KEYS.home.kicker)}</p>
            <h1 className="home-hero__title">{t(KEYS.home.welcome, { name: displayName })}</h1>
            <p className="home-hero__subtitle">{t(KEYS.home.subtitle)}</p>

            <div className="home-hero__cta-row">
              <Button className="home-hero__primary-cta" to={ROUTES.guessPokemon}>
                {t(KEYS.home.startChallenge)}
              </Button>
              <Link className="home-hero__secondary-link" to={ROUTES.games}>
                {t(KEYS.home.exploreGames)}
              </Link>
            </div>
          </div>

          <div className="home-hero__stats" aria-label={t(KEYS.home.statsAria)}>
            <dl className="hero-stats">
              <div className="hero-stat">
                <dt className="hero-stat__label">{t(KEYS.home.statLevel)}</dt>
                <dd className="hero-stat__value">{t(KEYS.common.levelShort, { level })}</dd>
              </div>
              <div className="hero-stat">
                <dt className="hero-stat__label">{t(KEYS.home.statXp)}</dt>
                <dd className="hero-stat__value">
                  {levelXp} / {XP_PER_LEVEL}
                </dd>
              </div>
              <div className="hero-stat">
                <dt className="hero-stat__label">{t(KEYS.home.statLootBoxes)}</dt>
                <dd className="hero-stat__value">{lootboxes}</dd>
              </div>
              <div className="hero-stat hero-stat--wide">
                <dt className="hero-stat__label">{t(KEYS.home.statNextGoal)}</dt>
                <dd className="hero-stat__value">{t(KEYS.home.xpToLevelUp, { count: nextXp })}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="home-section">
          <div className="home-section__head">
            <h2 className="home-section__title">{t(KEYS.home.quickActions)}</h2>
            <p className="home-section__hint">{t(KEYS.home.quickActionsHint)}</p>
          </div>

          <div className="quick-actions">
            <Link className="quick-card" to={ROUTES.guessPokemon}>
              <span className="quick-card__icon" aria-hidden="true">
                <img src="/assets/icon-games.svg" alt="" />
              </span>
              <span className="quick-card__label">{t(KEYS.home.guessPokemon)}</span>
              <span className="quick-card__meta">{t(KEYS.home.guessAttempts)}</span>
            </Link>
            <Link className="quick-card" to={ROUTES.trade}>
              <span className="quick-card__icon" aria-hidden="true">
                <img src="/assets/icon-trade.svg" alt="" />
              </span>
              <span className="quick-card__label">{t(KEYS.home.trade)}</span>
              <span className="quick-card__meta">{t(KEYS.home.tradeMeta)}</span>
            </Link>
            <Link className="quick-card" to={ROUTES.ranking}>
              <span className="quick-card__icon" aria-hidden="true">
                <img src="/assets/icon-ranking.svg" alt="" />
              </span>
              <span className="quick-card__label">{t(KEYS.home.ranking)}</span>
              <span className="quick-card__meta">{t(KEYS.home.rankingMeta)}</span>
            </Link>
            <Link className="quick-card" to={ROUTES.profile}>
              <span className="quick-card__icon" aria-hidden="true">
                <img src="/assets/icon-profile.svg" alt="" />
              </span>
              <span className="quick-card__label">{t(KEYS.home.profile)}</span>
              <span className="quick-card__meta">{t(KEYS.home.profileMeta)}</span>
            </Link>
          </div>
        </section>

        <section className="home-main-grid" aria-label={t(KEYS.home.highlightsAria)}>
          <section className="featured-card" aria-label={t(KEYS.home.featuredAria)}>
            <div className="featured-card__head">
              <span className="badge badge--brand">{t(KEYS.home.recommended)}</span>
              <span className="featured-card__rule">{t(KEYS.home.guessRule)}</span>
            </div>

            <div className="featured-card__content">
              <div className="featured-card__copy">
                <h2 className="featured-card__title">{t(KEYS.home.featuredTitle)}</h2>
                <p className="featured-card__desc">{t(KEYS.home.featuredDesc)}</p>

                <div className="featured-card__actions">
                  <Button className="featured-card__cta" to={ROUTES.guessPokemon}>
                    {t(KEYS.home.startChallengeShort)}
                  </Button>
                  <Link className="featured-card__link" to={ROUTES.guessPokemonRules}>
                    {t(KEYS.home.viewRules)}
                  </Link>
                </div>
              </div>

              <div className="featured-card__visual" aria-hidden="true">
                <img src="/assets/gengar-silhouette.png" alt="" />
              </div>
            </div>
          </section>

          <section className="progress-card" aria-label={t(KEYS.home.progressAria)}>
            <div className="progress-card__head">
              <h2 className="progress-card__title">{t(KEYS.home.progressTitle)}</h2>
              <span className="badge badge--soft">
                {t(KEYS.home.lootBoxesBadge, { count: lootboxes })}
              </span>
            </div>

            <div className="progress-card__meta">
              <span className="progress-card__level">{t(KEYS.home.xpLevel, { level })}</span>
              <span className="progress-card__value">
                {t(KEYS.home.xpProgress, { current: levelXp, max: XP_PER_LEVEL })}
              </span>
            </div>
            <ProgressBar progress={progress} size="md" />

            <p className="progress-card__next">
              {t(KEYS.home.nextGoal, { xp: nextXp, level: level + 1 })}
            </p>
          </section>
        </section>
      </div>
    </AppLayout>
  );
}
