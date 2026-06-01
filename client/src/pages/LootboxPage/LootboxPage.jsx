import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError } from '../../api/client.js';
import { openLootbox } from '../../api/lootbox.js';
import AppLayout from '../../components/layout/AppLayout.jsx';
import LootboxRewardCard from '../../components/lootbox/LootboxRewardCard.jsx';
import PokeballOpenAnimation from '../../components/lootbox/PokeballOpenAnimation.jsx';
import Button from '../../components/ui/Button.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { ROUTES } from '../../config/nav.js';
import './LootboxPage.css';

const PHASE = {
  IDLE: 'idle',
  OPENING: 'opening',
  REVEAL: 'reveal',
};

const OPENING_MIN_MS = 900;

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export default function LootboxPage() {
  const { t } = useI18n();
  const { user, token, logout, refreshProfile } = useAuth();

  const [phase, setPhase] = useState(PHASE.IDLE);
  const [reward, setReward] = useState(null);
  const [error, setError] = useState('');

  const lootboxCount = user?.lootboxes ?? 0;
  const isBusy = phase === PHASE.OPENING;
  const canOpen = lootboxCount > 0 && !isBusy;
  const showReveal = phase === PHASE.REVEAL && reward?.length > 0;

  const handleApiError = useCallback(
    (err) => {
      if (err instanceof ApiError && err.status === 401) {
        logout();
        return err.message;
      }
      return err?.message ?? t(KEYS.lootbox.errors.generic);
    },
    [logout, t],
  );

  const handleOpen = useCallback(async () => {
    if (!canOpen || !token) {
      return;
    }

    setError('');
    setReward(null);

    const reducedMotion = prefersReducedMotion();

    if (reducedMotion) {
      try {
        const result = await openLootbox(token);
        setReward(result.pokemons);
        setPhase(PHASE.REVEAL);
        await refreshProfile();
      } catch (err) {
        setPhase(PHASE.IDLE);
        setError(handleApiError(err));
      }

      return;
    }

    setPhase(PHASE.OPENING);

    const delay = new Promise((resolve) => {
      window.setTimeout(resolve, OPENING_MIN_MS);
    });

    try {
      const [result] = await Promise.all([openLootbox(token), delay]);
      setReward(result.pokemons);
      setPhase(PHASE.REVEAL);
      await refreshProfile();
    } catch (err) {
      setPhase(PHASE.IDLE);
      setError(handleApiError(err));
    }
  }, [canOpen, token, refreshProfile, handleApiError]);

  const animationPhase = useMemo(() => {
    if (showReveal) {
      return PHASE.REVEAL;
    }

    if (phase === PHASE.OPENING) {
      return PHASE.OPENING;
    }

    return PHASE.IDLE;
  }, [phase, showReveal]);

  return (
    <AppLayout activeNav="lootboxes">
      <div className="lootbox-page">
        <p className="lootbox-page__label">{t(KEYS.lootbox.pageLabel)}</p>

        <header className="lootbox-intro">
          <div className="lootbox-intro__copy">
            <p className="lootbox-intro__kicker">{t(KEYS.lootbox.kicker)}</p>
            <h1 className="lootbox-intro__title">{t(KEYS.lootbox.title)}</h1>
            <p className="lootbox-intro__subtitle">{t(KEYS.lootbox.subtitle)}</p>
          </div>
          <nav className="lootbox-intro__nav" aria-label={t(KEYS.lootbox.navAria)}>
            <Link className="lootbox-intro__link" to={ROUTES.home}>
              {t(KEYS.lootbox.backToHome)}
            </Link>
          </nav>
        </header>

        <section className="lootbox-status" aria-label={t(KEYS.lootbox.statusAria)}>
          <p className="lootbox-status__count">
            {t(KEYS.lootbox.count, { count: lootboxCount })}
          </p>
          <p className="lootbox-status__hint">{t(KEYS.lootbox.countHint)}</p>

          <div className="lootbox-status__actions">
            <Button
              type="button"
              variant="primary-sm"
              disabled={!canOpen}
              onClick={handleOpen}
            >
              {isBusy ? t(KEYS.lootbox.opening) : t(KEYS.lootbox.openCta)}
            </Button>
          </div>
        </section>

        {error ? (
          <p className="lootbox-page__error" role="alert">
            {error}
          </p>
        ) : null}

        <section className="lootbox-stage" aria-label={t(KEYS.lootbox.stageAria)}>
          {!showReveal ? <PokeballOpenAnimation phase={animationPhase} /> : null}

          <div
            className={`lootbox-reveal${showReveal ? ' is-visible' : ''}`}
            aria-live="polite"
            aria-atomic="true"
          >
            {showReveal ? (
              <>
                <p className="lootbox-reveal__title">{t(KEYS.lootbox.revealTitle)}</p>
                <ul
                  className={`lootbox-reveal__grid lootbox-reveal__grid--${reward.length}`}
                >
                  {reward.map((pokemon) => (
                    <li key={pokemon.id}>
                      <LootboxRewardCard pokemon={pokemon} />
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </section>

        <aside className="lootbox-help">
          <h2 className="lootbox-help__title">{t(KEYS.lootbox.helpTitle)}</h2>
          <p className="lootbox-help__text">{t(KEYS.lootbox.helpText)}</p>
          <Link className="lootbox-help__link" to={ROUTES.games}>
            {t(KEYS.lootbox.helpLink)}
          </Link>
        </aside>
      </div>
    </AppLayout>
  );
}
