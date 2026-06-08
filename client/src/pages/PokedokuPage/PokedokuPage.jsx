import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError } from '../../api/client.js';
import {
  resumeGame,
  searchPokemonForCell,
  startGame,
  submitAnswer,
} from '../../api/pokedoku.js';
import AppLayout from '../../components/layout/AppLayout.jsx';
import Button from '../../components/ui/Button.jsx';
import ProgressBar from '../../components/ui/ProgressBar.jsx';
import TypePill from '../../components/ui/TypePill.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { ROUTES } from '../../config/nav.js';
import { formatPokemonDisplayName } from '../../utils/pokemon.js';
import {
  getConditionHeaderAttrs,
  getConditionLabelKey,
  getConditionLabelParams,
  isTypeCondition,
} from '../../utils/pokedokuConditions.js';
import './PokedokuPage.css';

const PHASE = {
  IDLE: 'idle',
  LOADING: 'loading',
  PLAYING: 'playing',
  WON: 'won',
  LOST: 'lost',
  ERROR: 'error',
};

const SEARCH_DEBOUNCE_MS = 300;
const MIN_SEARCH_LENGTH = 2;

const INITIAL_STATE = {
  phase: PHASE.IDLE,
  gameId: null,
  rows: [],
  columns: [],
  cells: [],
  usedPokemonIds: [],
  remainingLives: 9,
  correctCount: 0,
  selectedPosition: null,
  searchQuery: '',
  searchResults: [],
  feedback: '',
  feedbackIsError: false,
  lastXpEarned: 0,
  error: '',
  canResume: false,
};

function isNoActiveGameMessage(message) {
  return message?.toLowerCase().includes('no active game');
}

function isActiveGameBlockedMessage(message) {
  return message?.toLowerCase().includes('active game');
}

function applyGameSession(prev, session) {
  return {
    ...prev,
    phase: PHASE.PLAYING,
    gameId: session.gameId,
    rows: session.rows,
    columns: session.columns,
    cells: session.cells,
    usedPokemonIds: session.usedPokemonIds,
    remainingLives: session.remainingLives ?? 9,
    correctCount: session.correctCount ?? 0,
    selectedPosition: null,
    searchQuery: '',
    searchResults: [],
    feedback: '',
    feedbackIsError: false,
    lastXpEarned: 0,
    error: '',
    canResume: false,
  };
}

function ConditionBadge({ condition, t }) {
  if (isTypeCondition(condition)) {
    return <TypePill typeName={condition.value} />;
  }

  const labelKey = getConditionLabelKey(condition);
  if (!labelKey) {
    return null;
  }

  return (
    <p className="pokedoku-board__header-label">
      {t(labelKey, getConditionLabelParams(condition))}
    </p>
  );
}

function mapConditionLabel(t, condition) {
  if (isTypeCondition(condition)) {
    return condition.value;
  }

  const labelKey = getConditionLabelKey(condition);
  if (!labelKey) {
    return '';
  }

  return t(labelKey, getConditionLabelParams(condition));
}

export default function PokedokuPage() {
  const { t } = useI18n();
  const { token, logout, refreshProfile } = useAuth();
  const [state, setState] = useState(INITIAL_STATE);
  const [isCheckingResume, setIsCheckingResume] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const filledCount = useMemo(
    () => state.cells.filter((cell) => cell.answered && cell.correct !== false).length,
    [state.cells],
  );

  const handleApiError = useCallback(
    (err) => {
      if (err instanceof ApiError && err.status === 401) {
        logout();
        return;
      }

      const message = err?.message ?? t(KEYS.pokedoku.genericError);

      setState((prev) => ({
        ...prev,
        phase: PHASE.ERROR,
        error: message,
        feedback: '',
        canResume: isActiveGameBlockedMessage(message),
      }));
    },
    [logout, t],
  );

  const beginSession = useCallback((session) => {
    setState((prev) => applyGameSession(prev, session));
  }, []);

  useEffect(() => {
    if (!token) {
      setIsCheckingResume(false);
      return;
    }

    let cancelled = false;

    resumeGame(token)
      .then((session) => {
        if (!cancelled) {
          beginSession(session);
        }
      })
      .catch((err) => {
        if (!cancelled && !isNoActiveGameMessage(err?.message)) {
          handleApiError(err);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsCheckingResume(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [token, beginSession, handleApiError]);

  useEffect(() => {
    if (
      state.phase !== PHASE.PLAYING ||
      !state.selectedPosition ||
      !state.gameId ||
      !token ||
      state.searchQuery.trim().length < MIN_SEARCH_LENGTH
    ) {
      return undefined;
    }

    const query = state.searchQuery.trim();
    const timeoutId = window.setTimeout(async () => {
      setIsSearching(true);

      try {
        const result = await searchPokemonForCell(token, {
          gameId: state.gameId,
          position: state.selectedPosition,
          query,
        });

        setState((prev) => ({
          ...prev,
          searchResults: result.pokemons ?? [],
        }));
      } catch (err) {
        if (!(err instanceof ApiError && err.status === 401)) {
          setState((prev) => ({
            ...prev,
            searchResults: [],
          }));
        }
      } finally {
        setIsSearching(false);
      }
    }, SEARCH_DEBOUNCE_MS);

    return () => window.clearTimeout(timeoutId);
  }, [state.phase, state.selectedPosition, state.gameId, state.searchQuery, token]);

  async function handleStart() {
    if (!token) {
      return;
    }

    setState((prev) => ({ ...prev, phase: PHASE.LOADING, error: '', feedback: '' }));

    try {
      const session = await startGame(token);
      beginSession(session);
    } catch (err) {
      handleApiError(err);
    }
  }

  async function handleContinue() {
    if (!token) {
      return;
    }

    setState((prev) => ({ ...prev, phase: PHASE.LOADING, error: '', feedback: '' }));

    try {
      const session = await resumeGame(token);
      beginSession(session);
    } catch (err) {
      handleApiError(err);
    }
  }

  function handleSelectCell(position) {
    const cell = state.cells.find((entry) => entry.position === position);
    if (!cell || cell.answered || state.phase !== PHASE.PLAYING || isSubmitting) {
      return;
    }

    setState((prev) => ({
      ...prev,
      selectedPosition: position,
      searchQuery: '',
      searchResults: [],
      feedback: '',
    }));
  }

  async function handlePickPokemon(pokemon) {
    if (!token || !state.gameId || !state.selectedPosition || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setState((prev) => ({ ...prev, feedback: '' }));

    try {
      const result = await submitAnswer(token, {
        gameId: state.gameId,
        position: state.selectedPosition,
        pokemonId: pokemon.id,
      });

      setState((prev) => {
        const nextCells = prev.cells.map((cell) =>
          cell.position === result.position
            ? {
                position: cell.position,
                answered: true,
                correct: result.correct,
                pokemon: result.pokemon,
              }
            : cell,
        );

        const nextUsedIds = [...new Set([...prev.usedPokemonIds, pokemon.id])];

        return {
          ...prev,
          cells: nextCells,
          usedPokemonIds: nextUsedIds,
          remainingLives: result.remainingLives ?? prev.remainingLives,
          correctCount: result.correctCount ?? prev.correctCount,
          selectedPosition: null,
          searchQuery: '',
          searchResults: [],
          feedback: result.message,
          feedbackIsError: !result.correct && result.status === 'ACTIVE',
          lastXpEarned: result.xpEarned ?? 0,
          phase:
            result.status === 'WON'
              ? PHASE.WON
              : result.status === 'LOST'
                ? PHASE.LOST
                : PHASE.PLAYING,
        };
      });

      if ((result.xpEarned ?? 0) > 0) {
        await refreshProfile();
      }
    } catch (err) {
      handleApiError(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  const isLoading = state.phase === PHASE.LOADING;
  const selectedCell = state.cells.find((cell) => cell.position === state.selectedPosition);

  return (
    <AppLayout activeNav="games">
      <div className="pokedoku-page">
        <p className="pokedoku-page__label">{t(KEYS.pokedoku.pageLabel)}</p>

        <header className="pokedoku-page__head">
          <div>
            <h1 className="pokedoku-page__title">{t(KEYS.pokedoku.title)}</h1>
            <p className="pokedoku-page__subtitle">{t(KEYS.pokedoku.subtitle)}</p>
          </div>
          <nav className="pokedoku-page__nav" aria-label={t(KEYS.pokedoku.navAria)}>
            <Link className="pokedoku-page__nav-link" to={ROUTES.games}>
              {t(KEYS.pokedoku.backToGames)}
            </Link>
          </nav>
        </header>

        {isCheckingResume ? (
          <section className="pokedoku-panel pokedoku-panel--centered" aria-live="polite">
            <p className="pokedoku-panel__checking">{t(KEYS.pokedoku.checkingSession)}</p>
          </section>
        ) : null}

        {!isCheckingResume && (state.phase === PHASE.IDLE || state.phase === PHASE.ERROR) ? (
          <section
            className="pokedoku-panel pokedoku-panel--centered pokedoku-panel--intro"
            aria-label={t(KEYS.pokedoku.startAria)}
          >
            <h2 className="pokedoku-panel__title">{t(KEYS.pokedoku.howToPlayTitle)}</h2>
            <ul className="pokedoku-panel__rules">
              <li>{t(KEYS.pokedoku.howToPlay1)}</li>
              <li>{t(KEYS.pokedoku.howToPlay2)}</li>
              <li>{t(KEYS.pokedoku.howToPlay3)}</li>
              <li>{t(KEYS.pokedoku.howToPlay4)}</li>
            </ul>

            {state.error ? (
              <p className="pokedoku-page__error" role="alert">
                {state.error}
              </p>
            ) : null}

            <div className="pokedoku-panel__actions">
              {state.canResume ? (
                <Button type="button" variant="primary-sm" disabled={isLoading} onClick={handleContinue}>
                  {t(KEYS.pokedoku.continueGame)}
                </Button>
              ) : null}
              <Button type="button" variant="primary-sm" disabled={isLoading} onClick={handleStart}>
                {isLoading ? t(KEYS.pokedoku.starting) : t(KEYS.pokedoku.startGame)}
              </Button>
            </div>
          </section>
        ) : null}

        {!isCheckingResume && state.phase === PHASE.PLAYING ? (
          <section
            className="pokedoku-panel pokedoku-panel--game"
            aria-label={t(KEYS.pokedoku.gameAria)}
          >
            <div className="pokedoku-arena">
              <div className="pokedoku-hud">
                <div className="pokedoku-hud__stats">
                  <span className="pokedoku-hud__badge">{t(KEYS.pokedoku.pageLabel)}</span>
                  <p className="pokedoku-hud__progress-text">
                    {t(KEYS.pokedoku.progress, { filled: filledCount, total: 9 })}
                  </p>
                  <p className="pokedoku-hud__lives" aria-label={t(KEYS.pokedoku.livesAria)}>
                    {t(KEYS.pokedoku.lives, { remaining: state.remainingLives, total: 9 })}
                  </p>
                </div>
                <ProgressBar
                  className="pokedoku-hud__bar"
                  progress={filledCount / 9}
                  size="md"
                />
                <p className="pokedoku-hud__prompt">{t(KEYS.pokedoku.pickPrompt)}</p>
              </div>

              <div className="pokedoku-board-frame">
                <div className="pokedoku-board" role="grid" aria-label={t(KEYS.pokedoku.gridAria)}>
                  <div className="pokedoku-board__spacer" aria-hidden="true" />

                  {state.columns.map((condition, index) => (
                    <div
                      key={`col-${index}`}
                      className="pokedoku-board__header pokedoku-board__header--column"
                      role="columnheader"
                      {...getConditionHeaderAttrs(condition)}
                      aria-label={t(KEYS.pokedoku.columnHeaderAria, {
                        label: mapConditionLabel(t, condition),
                      })}
                    >
                      <ConditionBadge condition={condition} t={t} />
                    </div>
                  ))}

              {state.rows.flatMap((rowCondition, rowIndex) => {
                const rowCells = [0, 1, 2].map((columnIndex) => {
                  const position = rowIndex * 3 + columnIndex + 1;
                  const cell = state.cells.find((entry) => entry.position === position);
                  const isSelected = state.selectedPosition === position;
                  const classNames = [
                    'pokedoku-board__cell',
                    cell?.answered ? 'is-filled' : '',
                    cell?.answered && cell.correct ? 'is-correct' : '',
                    cell?.answered && cell.correct === false ? 'is-wrong' : '',
                    isSelected ? 'is-selected' : '',
                  ]
                    .filter(Boolean)
                    .join(' ');

                  return (
                    <button
                      key={`cell-${position}`}
                      type="button"
                      className={classNames}
                      role="gridcell"
                      disabled={cell?.answered || isSubmitting}
                      aria-label={t(KEYS.pokedoku.cellAria, { position })}
                      aria-pressed={isSelected}
                      onClick={() => handleSelectCell(position)}
                    >
                      {cell?.pokemon ? (
                        <>
                          {cell.pokemon.urlImage ? (
                            <img
                              className="pokedoku-board__cell-image"
                              src={cell.pokemon.urlImage}
                              alt=""
                              loading="lazy"
                            />
                          ) : null}
                          <p className="pokedoku-board__cell-name">
                            {formatPokemonDisplayName(cell.pokemon.name)}
                          </p>
                        </>
                        ) : (
                          <>
                            <span className="pokedoku-board__cell-plus" aria-hidden="true">
                              +
                            </span>
                            <span className="pokedoku-board__cell-placeholder">
                              {t(KEYS.pokedoku.emptyCell)}
                            </span>
                          </>
                        )}
                    </button>
                  );
                });

                return [
                  <div
                    key={`row-header-${rowIndex}`}
                    className="pokedoku-board__header"
                    role="rowheader"
                    {...getConditionHeaderAttrs(rowCondition)}
                    aria-label={t(KEYS.pokedoku.rowHeaderAria, {
                      label: mapConditionLabel(t, rowCondition),
                    })}
                  >
                    <ConditionBadge condition={rowCondition} t={t} />
                  </div>,
                  ...rowCells,
                ];
              })}
                </div>
              </div>

              {selectedCell ? (
                <div className="pokedoku-picker-dock">
                  <div className="pokedoku-picker" aria-label={t(KEYS.pokedoku.pickerAria)}>
                <h3 className="pokedoku-picker__title">
                  {t(KEYS.pokedoku.pickerTitle, { position: state.selectedPosition })}
                </h3>
                <input
                  type="search"
                  className="pokedoku-picker__search"
                  value={state.searchQuery}
                  onChange={(event) =>
                    setState((prev) => ({
                      ...prev,
                      searchQuery: event.target.value,
                      searchResults: [],
                    }))
                  }
                  placeholder={t(KEYS.pokedoku.searchPlaceholder)}
                  aria-label={t(KEYS.pokedoku.searchAria)}
                />

                {state.searchQuery.trim().length > 0 &&
                state.searchQuery.trim().length < MIN_SEARCH_LENGTH ? (
                  <p className="pokedoku-picker__hint">{t(KEYS.pokedoku.searchMinLength)}</p>
                ) : null}

                {state.searchQuery.trim().length >= MIN_SEARCH_LENGTH && !isSearching ? (
                  state.searchResults.length === 0 ? (
                    <p className="pokedoku-picker__empty">{t(KEYS.pokedoku.searchNoResults)}</p>
                  ) : (
                    <div className="pokedoku-picker__results" role="list">
                      {state.searchResults.map((pokemon) => (
                        <button
                          key={pokemon.id}
                          type="button"
                          className="pokedoku-picker__option"
                          role="listitem"
                          disabled={isSubmitting}
                          onClick={() => handlePickPokemon(pokemon)}
                        >
                          {pokemon.urlImage ? (
                            <img
                              className="pokedoku-picker__option-image"
                              src={pokemon.urlImage}
                              alt=""
                              loading="lazy"
                            />
                          ) : null}
                          <span className="pokedoku-picker__option-name">
                            {formatPokemonDisplayName(pokemon.name)}
                          </span>
                        </button>
                      ))}
                    </div>
                  )
                ) : null}

                {isSearching ? <p className="pokedoku-picker__hint">{t(KEYS.pokedoku.searching)}</p> : null}
                  </div>
                </div>
              ) : null}

              {state.feedback ? (
                <p
                  className={`pokedoku-feedback pokedoku-feedback--inline ${
                    state.feedbackIsError
                      ? 'pokedoku-feedback--error'
                      : 'pokedoku-feedback--success'
                  }`}
                  role="status"
                >
                  {state.feedback}
                </p>
              ) : null}
            </div>
          </section>
        ) : null}

        {!isCheckingResume && (state.phase === PHASE.WON || state.phase === PHASE.LOST) ? (
          <section
            className="pokedoku-panel pokedoku-panel--centered pokedoku-panel--result"
            aria-label={t(KEYS.pokedoku.feedbackAria)}
          >
            <div
              className={`pokedoku-feedback ${
                state.phase === PHASE.WON
                  ? 'pokedoku-feedback--success'
                  : 'pokedoku-feedback--error'
              }`}
              role="status"
            >
              <p>
                {state.phase === PHASE.WON
                  ? t(KEYS.pokedoku.wonTitle)
                  : t(KEYS.pokedoku.lostTitle)}
              </p>
              {state.phase === PHASE.WON ? (
                <p className="pokedoku-feedback__hint">
                  {t(KEYS.pokedoku.xpEarned, { count: state.lastXpEarned })}
                </p>
              ) : (
                <>
                  <p className="pokedoku-feedback__hint">
                    {t(KEYS.pokedoku.partialSummary, {
                      correct: state.correctCount,
                      total: 9,
                    })}
                  </p>
                  {state.lastXpEarned > 0 ? (
                    <p className="pokedoku-feedback__hint">
                      {t(KEYS.pokedoku.xpEarned, { count: state.lastXpEarned })}
                    </p>
                  ) : null}
                </>
              )}
            </div>

            <div className="pokedoku-feedback__actions">
              <Button type="button" variant="primary-sm" disabled={isLoading} onClick={handleStart}>
                {isLoading ? t(KEYS.pokedoku.starting) : t(KEYS.pokedoku.playAgain)}
              </Button>
              <Button variant="primary-sm" to={ROUTES.games}>
                {t(KEYS.pokedoku.backToGames)}
              </Button>
            </div>
          </section>
        ) : null}
      </div>
    </AppLayout>
  );
}
