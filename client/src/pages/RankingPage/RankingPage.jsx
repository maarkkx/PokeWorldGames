import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRankings } from '../../api/ranking.js';
import AppLayout from '../../components/layout/AppLayout.jsx';
import Button from '../../components/ui/Button.jsx';
import ProgressBar from '../../components/ui/ProgressBar.jsx';
import SegmentedControl from '../../components/ui/SegmentedControl.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { ROUTES } from '../../config/nav.js';
import { getLevelProgress } from '../../utils/xp.js';
import './RankingPage.css';

const EMPTY_RANKINGS = {
  level: [],
  numberPokemons: [],
  uniquePokemons: [],
};

const RANK_MEDAL_CLASS = {
  1: 'ranking-row--gold',
  2: 'ranking-row--silver',
  3: 'ranking-row--bronze',
};

const BOARD_VARIANT = {
  level: 'level',
  total: 'total',
  unique: 'unique',
};

const BOARD_IDS = ['level', 'total', 'unique'];

function getLeaderValue(entries, getValue) {
  if (!entries.length) {
    return 1;
  }

  return Math.max(...entries.map(getValue), 1);
}

function TrainerAvatar({ name, rank }) {
  const initials = String(name ?? '?')
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      className={`ranking-avatar ranking-avatar--rank-${Math.min(rank, 3) || 'default'}`}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}

function RankDisplay({ rank }) {
  if (rank <= 3) {
    return (
      <span className={`ranking-medal ranking-medal--${rank === 1 ? 'gold' : rank === 2 ? 'silver' : 'bronze'}`}>
        {rank}
      </span>
    );
  }

  return <span className="ranking-medal ranking-medal--plain">{rank}</span>;
}

function MetricCell({ label, value, ratio }) {
  return (
    <div className="ranking-row__metric-stack">
      {label ? <span className="ranking-row__metric-label">{label}</span> : null}
      <span className="ranking-row__metric-value">{value}</span>
      <ProgressBar progress={ratio} size="sm" className="ranking-row__metric-bar" />
    </div>
  );
}

const RankingPodium = memo(function RankingPodium({ entries, userId, t }) {
  const topThree = entries.slice(0, 3);
  if (topThree.length === 0) {
    return null;
  }

  const slots = [
    { entry: topThree[1], rank: 2, variant: 'silver' },
    { entry: topThree[0], rank: 1, variant: 'gold' },
    { entry: topThree[2], rank: 3, variant: 'bronze' },
  ].filter((slot) => slot.entry);

  return (
    <section className="ranking-podium" aria-label={t(KEYS.ranking.podiumAria)}>
      <header className="ranking-podium__head">
        <p className="ranking-podium__kicker">{t(KEYS.ranking.podiumKicker)}</p>
        <h2 className="ranking-podium__title">{t(KEYS.ranking.podiumTitle)}</h2>
      </header>

      <div className="ranking-podium__stage">
        {slots.map(({ entry, rank, variant }) => {
          const isCurrentUser = userId != null && entry.id === userId;

          return (
            <article
              key={entry.id}
              className={`ranking-podium__slot ranking-podium__slot--${variant}${
                isCurrentUser ? ' ranking-podium__slot--current' : ''
              }`}
            >
              <div className="ranking-podium__pedestal">
                <div className="ranking-podium__body">
                  <RankDisplay rank={rank} />
                  <TrainerAvatar name={entry.name} rank={rank} />
                  <Link className="ranking-podium__name" to={ROUTES.trainerProfile(entry.name)}>
                    {entry.name}
                  </Link>
                  <p className="ranking-podium__level">
                    {t(KEYS.common.levelShort, { level: entry.level ?? 1 })}
                  </p>
                  <p className="ranking-podium__xp">
                    {t(KEYS.ranking.xpValue, { xp: entry.xp ?? 0 })}
                  </p>
                  {isCurrentUser ? (
                    <span className="ranking-podium__you">{t(KEYS.ranking.youBadge)}</span>
                  ) : null}
                </div>
                <div className="ranking-podium__riser" aria-hidden="true" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
});

const RankingBoard = memo(function RankingBoard({
  title,
  description,
  entries,
  userId,
  emptyMessage,
  ariaLabel,
  metricHeader,
  renderMetric,
  getMetricValue,
  variant,
  t,
}) {
  const leaderValue = useMemo(
    () => getLeaderValue(entries, getMetricValue),
    [entries, getMetricValue],
  );

  return (
    <article
      className={`ranking-board ranking-board--${variant}`}
      aria-label={ariaLabel}
    >
      <header className="ranking-board__head">
        <span className={`ranking-board__icon ranking-board__icon--${variant}`} aria-hidden="true" />
        <div>
          <h2 className="ranking-board__title">{title}</h2>
          <p className="ranking-board__desc">{description}</p>
        </div>
      </header>

      {entries.length === 0 ? (
        <p className="ranking-board__empty">{emptyMessage}</p>
      ) : (
        <div className="ranking-board__table-wrap">
          <table className="ranking-table">
            <thead>
              <tr>
                <th scope="col" className="ranking-table__col-rank">
                  {t(KEYS.ranking.colRank)}
                </th>
                <th scope="col" className="ranking-table__col-trainer">
                  {t(KEYS.ranking.colTrainer)}
                </th>
                <th scope="col" className="ranking-table__col-metric">
                  {metricHeader}
                </th>
                <th scope="col" className="ranking-table__col-level">
                  {t(KEYS.ranking.colLevel)}
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => {
                const rank = index + 1;
                const isCurrentUser = userId != null && entry.id === userId;
                const medalClass = RANK_MEDAL_CLASS[rank] ?? '';
                const metricValue = getMetricValue(entry);
                const ratio = metricValue / leaderValue;

                return (
                  <tr
                    key={`${entry.id}-${rank}`}
                    className={`ranking-row${medalClass ? ` ${medalClass}` : ''}${
                      isCurrentUser ? ' ranking-row--current' : ''
                    }`}
                    style={{ '--row-delay': `${index * 40}ms` }}
                  >
                    <td className="ranking-row__rank">
                      <RankDisplay rank={rank} />
                    </td>
                    <td className="ranking-row__trainer">
                      <TrainerAvatar name={entry.name} rank={rank} />
                      <Link className="ranking-row__name" to={ROUTES.trainerProfile(entry.name)}>
                        {entry.name}
                      </Link>
                      {isCurrentUser ? (
                        <span className="ranking-row__badge">{t(KEYS.ranking.youBadge)}</span>
                      ) : null}
                    </td>
                    <td className="ranking-row__metric">
                      {renderMetric(entry, t, ratio)}
                    </td>
                    <td className="ranking-row__level">
                      {t(KEYS.common.levelShort, { level: entry.level ?? 1 })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </article>
  );
});

export default function RankingPage() {
  const { t } = useI18n();
  const { user, token } = useAuth();
  const [rankings, setRankings] = useState(EMPTY_RANKINGS);
  const [activeBoard, setActiveBoard] = useState('level');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const loadRankings = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const data = await fetchRankings(token);
      setRankings(data);
    } catch (err) {
      setRankings(EMPTY_RANKINGS);
      setError(err?.message ?? t(KEYS.ranking.loadError));
    } finally {
      setIsLoading(false);
    }
  }, [token, t]);

  useEffect(() => {
    loadRankings();
  }, [loadRankings]);

  const userProgress = useMemo(() => {
    if (user?.xp == null) {
      return 0;
    }

    return getLevelProgress(user.xp).progress;
  }, [user?.xp]);

  const boardTabs = useMemo(
    () =>
      BOARD_IDS.map((id) => ({
        value: id,
        label:
          id === 'level'
            ? t(KEYS.ranking.levelTitle)
            : id === 'total'
              ? t(KEYS.ranking.totalTitle)
              : t(KEYS.ranking.uniqueTitle),
      })),
    [t],
  );

  const activeBoardConfig = useMemo(() => {
    if (activeBoard === 'total') {
      return {
        variant: BOARD_VARIANT.total,
        entries: rankings.numberPokemons,
        title: t(KEYS.ranking.totalTitle),
        description: t(KEYS.ranking.totalDescription),
        metricHeader: t(KEYS.ranking.colPokemon),
        getMetricValue: (entry) => entry.totalPokemons ?? 0,
        renderMetric: (entry, translate, ratio) => (
          <MetricCell
            value={translate(KEYS.ranking.pokemonValue, { count: entry.totalPokemons ?? 0 })}
            ratio={ratio}
          />
        ),
        helpText: t(KEYS.ranking.helpTotal),
      };
    }

    if (activeBoard === 'unique') {
      return {
        variant: BOARD_VARIANT.unique,
        entries: rankings.uniquePokemons,
        title: t(KEYS.ranking.uniqueTitle),
        description: t(KEYS.ranking.uniqueDescription),
        metricHeader: t(KEYS.ranking.colUniqueSpecies),
        getMetricValue: (entry) => entry.uniquePokemons ?? 0,
        renderMetric: (entry, translate, ratio) => (
          <MetricCell
            value={translate(KEYS.ranking.uniqueValue, { count: entry.uniquePokemons ?? 0 })}
            ratio={ratio}
          />
        ),
        helpText: t(KEYS.ranking.helpUnique),
      };
    }

    return {
      variant: BOARD_VARIANT.level,
      entries: rankings.level,
      title: t(KEYS.ranking.levelTitle),
      description: t(KEYS.ranking.levelDescription),
      metricHeader: t(KEYS.ranking.colXp),
      getMetricValue: (entry) => entry.xp ?? 0,
      renderMetric: (entry, translate, ratio) => (
        <MetricCell value={translate(KEYS.ranking.xpValue, { xp: entry.xp ?? 0 })} ratio={ratio} />
      ),
      helpText: t(KEYS.ranking.helpLevel),
    };
  }, [activeBoard, rankings, t]);

  return (
    <AppLayout activeNav="ranking">
      <div className="ranking-page">
        <p className="ranking-page__label">{t(KEYS.ranking.pageLabel)}</p>

        <header className="ranking-intro">
          <div className="ranking-intro__copy">
            <p className="ranking-intro__kicker">{t(KEYS.ranking.kicker)}</p>
            <h1 className="ranking-intro__title">{t(KEYS.ranking.title)}</h1>
            <p className="ranking-intro__subtitle">{t(KEYS.ranking.subtitle)}</p>
            {!isLoading && !error ? (
              <p className="ranking-intro__live">
                <span className="ranking-intro__live-dot" aria-hidden="true" />
                {t(KEYS.ranking.liveBoards)}
              </p>
            ) : null}
          </div>
          <nav className="ranking-intro__nav" aria-label={t(KEYS.ranking.navAria)}>
            <Link className="ranking-intro__link" to={ROUTES.home}>
              {t(KEYS.ranking.backToHome)}
            </Link>
            <Button
              type="button"
              variant="primary-sm"
              disabled={isLoading}
              onClick={loadRankings}
            >
              {isLoading ? t(KEYS.ranking.refreshing) : t(KEYS.ranking.refresh)}
            </Button>
          </nav>
          {user ? (
            <div className="ranking-intro__you" aria-label={t(KEYS.ranking.yourStandingAria)}>
              <span className="ranking-intro__you-label">{t(KEYS.ranking.yourStanding)}</span>
              <strong className="ranking-intro__you-name">{user.name}</strong>
              <span className="ranking-intro__you-level">
                {t(KEYS.common.levelShort, { level: user.level ?? 1 })}
              </span>
              <ProgressBar progress={userProgress} size="sm" className="ranking-intro__you-bar" />
            </div>
          ) : null}
        </header>

        {isLoading ? (
          <p className="ranking-page__status" role="status">
            {t(KEYS.common.loading)}
          </p>
        ) : null}

        {error ? (
          <section className="ranking-panel ranking-panel--error" role="alert">
            <p className="ranking-panel__message">{error}</p>
            <Button type="button" onClick={loadRankings}>
              {t(KEYS.ranking.retry)}
            </Button>
          </section>
        ) : null}

        {!isLoading && !error ? (
          <>
            <div className="ranking-board-picker">
              <SegmentedControl
                className="segmented-control--wide"
                options={boardTabs}
                value={activeBoard}
                onChange={setActiveBoard}
                ariaLabel={t(KEYS.ranking.boardTabsAria)}
              />
            </div>

            <RankingPodium
              entries={activeBoardConfig.entries}
              userId={user?.id}
              t={t}
            />

            <section className="ranking-boards" aria-label={t(KEYS.ranking.boardsAria)}>
              <RankingBoard
                key={activeBoard}
                title={activeBoardConfig.title}
                description={activeBoardConfig.description}
                entries={activeBoardConfig.entries}
                userId={user?.id}
                emptyMessage={t(KEYS.ranking.empty)}
                ariaLabel={activeBoardConfig.title}
                metricHeader={activeBoardConfig.metricHeader}
                variant={activeBoardConfig.variant}
                getMetricValue={activeBoardConfig.getMetricValue}
                renderMetric={activeBoardConfig.renderMetric}
                t={t}
              />
            </section>

            <aside className="ranking-help" aria-label={t(KEYS.ranking.helpAria)}>
              <h2 className="ranking-help__title">{t(KEYS.ranking.helpTitle)}</h2>
              <p className="ranking-help__text">{activeBoardConfig.helpText}</p>
            </aside>
          </>
        ) : null}
      </div>
    </AppLayout>
  );
}
