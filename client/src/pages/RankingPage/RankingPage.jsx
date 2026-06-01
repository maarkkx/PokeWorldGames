import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRankings } from '../../api/ranking.js';
import AppLayout from '../../components/layout/AppLayout.jsx';
import Button from '../../components/ui/Button.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { ROUTES } from '../../config/nav.js';
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

function MetricCell({ label, value }) {
  return (
    <div className="ranking-row__metric-stack">
      {label ? <span className="ranking-row__metric-label">{label}</span> : null}
      <span className="ranking-row__metric-value">{value}</span>
    </div>
  );
}

function RankingBoard({
  title,
  description,
  entries,
  userId,
  emptyMessage,
  ariaLabel,
  metricHeader,
  renderMetric,
  t,
}) {
  return (
    <article className="ranking-board" aria-label={ariaLabel}>
      <header className="ranking-board__head">
        <h2 className="ranking-board__title">{title}</h2>
        <p className="ranking-board__desc">{description}</p>
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

                return (
                  <tr
                    key={`${entry.id}-${rank}`}
                    className={`ranking-row${medalClass ? ` ${medalClass}` : ''}${
                      isCurrentUser ? ' ranking-row--current' : ''
                    }`}
                  >
                    <td className="ranking-row__rank">{rank}</td>
                    <td className="ranking-row__trainer">
                      <span className="ranking-row__name">{entry.name}</span>
                      {isCurrentUser ? (
                        <span className="ranking-row__badge">{t(KEYS.ranking.youBadge)}</span>
                      ) : null}
                    </td>
                    <td className="ranking-row__metric">{renderMetric(entry, t)}</td>
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
}

export default function RankingPage() {
  const { t } = useI18n();
  const { user, token } = useAuth();
  const [rankings, setRankings] = useState(EMPTY_RANKINGS);
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

  return (
    <AppLayout activeNav="ranking">
      <div className="ranking-page">
        <p className="ranking-page__label">{t(KEYS.ranking.pageLabel)}</p>

        <header className="ranking-intro">
          <div className="ranking-intro__copy">
            <p className="ranking-intro__kicker">{t(KEYS.ranking.kicker)}</p>
            <h1 className="ranking-intro__title">{t(KEYS.ranking.title)}</h1>
            <p className="ranking-intro__subtitle">{t(KEYS.ranking.subtitle)}</p>
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
          <section className="ranking-boards" aria-label={t(KEYS.ranking.boardsAria)}>
            <RankingBoard
              title={t(KEYS.ranking.levelTitle)}
              description={t(KEYS.ranking.levelDescription)}
              entries={rankings.level}
              userId={user?.id}
              emptyMessage={t(KEYS.ranking.empty)}
              ariaLabel={t(KEYS.ranking.levelTitle)}
              metricHeader={t(KEYS.ranking.colXp)}
              renderMetric={(entry, translate) => (
                <MetricCell
                  value={translate(KEYS.ranking.xpValue, { xp: entry.xp ?? 0 })}
                />
              )}
              t={t}
            />
            <RankingBoard
              title={t(KEYS.ranking.totalTitle)}
              description={t(KEYS.ranking.totalDescription)}
              entries={rankings.numberPokemons}
              userId={user?.id}
              emptyMessage={t(KEYS.ranking.empty)}
              ariaLabel={t(KEYS.ranking.totalTitle)}
              metricHeader={t(KEYS.ranking.colPokemon)}
              renderMetric={(entry, translate) => (
                <MetricCell
                  value={translate(KEYS.ranking.pokemonValue, {
                    count: entry.totalPokemons ?? 0,
                  })}
                />
              )}
              t={t}
            />
            <RankingBoard
              title={t(KEYS.ranking.uniqueTitle)}
              description={t(KEYS.ranking.uniqueDescription)}
              entries={rankings.uniquePokemons}
              userId={user?.id}
              emptyMessage={t(KEYS.ranking.empty)}
              ariaLabel={t(KEYS.ranking.uniqueTitle)}
              metricHeader={t(KEYS.ranking.colUniqueSpecies)}
              renderMetric={(entry, translate) => (
                <MetricCell
                  value={translate(KEYS.ranking.uniqueValue, {
                    count: entry.uniquePokemons ?? 0,
                  })}
                />
              )}
              t={t}
            />
          </section>
        ) : null}

        {!isLoading && !error ? (
          <aside className="ranking-help" aria-label={t(KEYS.ranking.helpAria)}>
            <h2 className="ranking-help__title">{t(KEYS.ranking.helpTitle)}</h2>
            <ul className="ranking-help__list">
              <li>{t(KEYS.ranking.helpLevel)}</li>
              <li>{t(KEYS.ranking.helpTotal)}</li>
              <li>{t(KEYS.ranking.helpUnique)}</li>
            </ul>
          </aside>
        ) : null}
      </div>
    </AppLayout>
  );
}
