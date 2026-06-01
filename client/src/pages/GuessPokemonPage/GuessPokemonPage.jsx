import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError } from '../../api/client.js';
import {
  cashOutInfinite,
  resumeGame,
  searchPokemonNames,
  startGame,
  submitAnswer,
} from '../../api/guessPokemon.js';
import AppLayout from '../../components/layout/AppLayout.jsx';
import Button from '../../components/ui/Button.jsx';
import ProgressBar from '../../components/ui/ProgressBar.jsx';
import TextField from '../../components/ui/TextField.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { ROUTES } from '../../config/nav.js';
import { formatPokemonDisplayName } from '../../utils/pokemon.js';
import { validateGuessAnswer } from '../../utils/validation.js';
import './GuessPokemonPage.css';

const PHASE = {
  IDLE: 'idle',
  LOADING: 'loading',
  PLAYING: 'playing',
  WON: 'won',
  LOST: 'lost',
  ERROR: 'error',
};

const DIFFICULTIES = ['easy', 'medium', 'hard', 'infinite'];

const LIVES_BY_DIFFICULTY = {
  easy: 3,
  medium: 2,
  hard: 1,
  infinite: 4,
};

const DIFFICULTY_LABEL_KEYS = {
  easy: KEYS.guessPokemon.difficultyEasy,
  medium: KEYS.guessPokemon.difficultyMedium,
  hard: KEYS.guessPokemon.difficultyHard,
  infinite: KEYS.guessPokemon.difficultyInfinite,
};

const DIFFICULTY_META_KEYS = {
  easy: KEYS.guessPokemon.difficultyEasyMeta,
  medium: KEYS.guessPokemon.difficultyMediumMeta,
  hard: KEYS.guessPokemon.difficultyHardMeta,
  infinite: KEYS.guessPokemon.difficultyInfiniteMeta,
};

const INITIAL_STATE = {
  phase: PHASE.IDLE,
  difficulty: 'easy',
  gameId: null,
  image: null,
  lives: 0,
  maxLives: 3,
  answer: '',
  feedback: '',
  lastXpEarned: 0,
  error: '',
  canResume: false,
  pokemonName: null,
  suggestions: [],
  gameMode: 'classic',
  streak: 0,
  pendingXp: 0,
  multiplier: 1,
  pendingXpLost: 0,
};

const SEARCH_DEBOUNCE_MS = 300;
const MIN_SEARCH_LENGTH = 2;

function isNoActiveGameMessage(message) {
  return message?.toLowerCase().includes('no active game');
}

function isActiveGameBlockedMessage(message) {
  return message?.toLowerCase().includes('active game');
}

function applyGameSession(prev, result) {
  return {
    ...prev,
    phase: PHASE.PLAYING,
    gameId: result.gameId,
    image: result.image,
    lives: result.lives,
    maxLives: result.maxAttempts ?? result.lives,
    answer: '',
    feedback: '',
    lastXpEarned: 0,
    error: '',
    canResume: false,
    pokemonName: null,
    suggestions: [],
    gameMode: result.mode ?? 'classic',
    streak: result.streak ?? 0,
    pendingXp: result.pendingXp ?? 0,
    multiplier: result.multiplier ?? 1,
  };
}

function applyFinishedState(prev, result, phase) {
  return {
    ...prev,
    phase,
    lives: phase === PHASE.LOST ? 0 : (result.remainingAttempts ?? prev.lives),
    feedback: result.feedback ?? result.message,
    lastXpEarned: result.xpEarned ?? 0,
    answer: '',
    pokemonName: result.pokemonName ?? null,
    suggestions: [],
    pendingXpLost: result.pendingXpLost ?? 0,
    gameMode: 'classic',
  };
}

export default function GuessPokemonPage() {
  const { t } = useI18n();
  const { token, logout, refreshProfile } = useAuth();
  const [state, setState] = useState(INITIAL_STATE);
  const [isCheckingResume, setIsCheckingResume] = useState(true);

  const handleApiError = useCallback(
    (err) => {
      if (err instanceof ApiError && err.status === 401) {
        logout();
        return;
      }

      const message = err?.message ?? t(KEYS.common.loading);

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

  const resetToIdle = useCallback(() => {
    setState(INITIAL_STATE);
  }, []);

  const handleResume = useCallback(async () => {
    setState((prev) => ({
      ...prev,
      phase: PHASE.LOADING,
      error: '',
      feedback: '',
    }));

    try {
      const result = await resumeGame(token);
      setState((prev) => applyGameSession(prev, result));
    } catch (err) {
      if (isNoActiveGameMessage(err?.message)) {
        setState((prev) => ({
          ...prev,
          phase: PHASE.IDLE,
          error: '',
          canResume: false,
        }));
        return;
      }

      handleApiError(err);
    }
  }, [token, handleApiError]);

  useEffect(() => {
    if (!token) {
      setIsCheckingResume(false);
      return;
    }

    let cancelled = false;

    async function checkActiveGame() {
      try {
        const result = await resumeGame(token);
        if (cancelled) return;
        setState((prev) => applyGameSession(prev, result));
      } catch (err) {
        if (cancelled) return;

        if (!isNoActiveGameMessage(err?.message)) {
          handleApiError(err);
        }
      } finally {
        if (!cancelled) {
          setIsCheckingResume(false);
        }
      }
    }

    checkActiveGame();

    return () => {
      cancelled = true;
    };
  }, [token, handleApiError]);

  useEffect(() => {
    if (!token || state.phase !== PHASE.PLAYING) {
      return undefined;
    }

    const query = state.answer.trim();

    if (query.length < MIN_SEARCH_LENGTH) {
      setState((prev) => ({ ...prev, suggestions: [] }));
      return undefined;
    }

    const timeoutId = window.setTimeout(async () => {
      try {
        const names = await searchPokemonNames(token, query);
        setState((prev) => ({ ...prev, suggestions: names }));
      } catch {
        setState((prev) => ({ ...prev, suggestions: [] }));
      }
    }, SEARCH_DEBOUNCE_MS);

    return () => window.clearTimeout(timeoutId);
  }, [token, state.phase, state.answer]);

  async function handleStart() {
    setState((prev) => ({
      ...prev,
      phase: PHASE.LOADING,
      error: '',
      feedback: '',
      canResume: false,
    }));

    try {
      const result = await startGame(token, state.difficulty);
      const maxLives = LIVES_BY_DIFFICULTY[state.difficulty];

      setState((prev) => ({
        ...applyGameSession(prev, result),
        lives: result.lives ?? maxLives,
        maxLives: result.maxAttempts ?? maxLives,
      }));
    } catch (err) {
      handleApiError(err);
    }
  }

  async function handlePlayAgain() {
    const { difficulty } = state;

    setState({
      ...INITIAL_STATE,
      difficulty,
      phase: PHASE.LOADING,
    });

    try {
      const result = await startGame(token, difficulty);
      const maxLives = LIVES_BY_DIFFICULTY[difficulty];

      setState((prev) => ({
        ...applyGameSession(prev, result),
        lives: result.lives ?? maxLives,
        maxLives: result.maxAttempts ?? maxLives,
      }));
    } catch (err) {
      handleApiError(err);
    }
  }

  async function handleCashOut() {
    setState((prev) => ({
      ...prev,
      phase: PHASE.LOADING,
      error: '',
    }));

    try {
      const result = await cashOutInfinite(token);

      if (result.xpEarned > 0) {
        await refreshProfile();
      }

      setState((prev) =>
        applyFinishedState(
          prev,
          {
            ...result,
            feedback: result.message,
            pokemonName: null,
          },
          PHASE.WON,
        ),
      );
    } catch (err) {
      handleApiError(err);
    }
  }

  async function handleSubmitAnswer(event) {
    event.preventDefault();

    const validationKey = validateGuessAnswer(state.answer);
    if (validationKey) {
      setState((prev) => ({ ...prev, feedback: '', error: t(validationKey) }));
      return;
    }

    setState((prev) => ({
      ...prev,
      phase: PHASE.LOADING,
      error: '',
    }));

    try {
      const result = await submitAnswer(token, state.answer.trim());

      if (result.mode === 'infinite' && result.status === 'ACTIVE') {
        setState((prev) => ({
          ...prev,
          phase: PHASE.PLAYING,
          image: result.image ?? prev.image,
          lives: result.remainingAttempts ?? prev.lives,
          streak: result.streak ?? prev.streak,
          pendingXp: result.pendingXp ?? prev.pendingXp,
          multiplier: result.multiplier ?? prev.multiplier,
          feedback: result.message,
          answer: '',
          error: '',
          suggestions: [],
        }));
        return;
      }

      if (result.mode === 'infinite' && result.status === 'LOST') {
        setState((prev) =>
          applyFinishedState(
            prev,
            {
              ...result,
              feedback: `${result.message} ${t(KEYS.guessPokemon.infiniteLostPending, {
                count: result.pendingXpLost ?? 0,
              })}`,
            },
            PHASE.LOST,
          ),
        );
        return;
      }

      if (result.status === 'WON') {
        if (result.xpEarned > 0) {
          await refreshProfile();
        }

        setState((prev) => applyFinishedState(prev, result, PHASE.WON));
        return;
      }

      if (result.status === 'LOST') {
        setState((prev) => applyFinishedState(prev, result, PHASE.LOST));
        return;
      }

      if (result.status !== 'ACTIVE') {
        const finishedPhase = result.status === 'WON' ? PHASE.WON : PHASE.LOST;
        setState((prev) => applyFinishedState(prev, result, finishedPhase));
        return;
      }

      setState((prev) => ({
        ...prev,
        phase: PHASE.PLAYING,
        lives: result.remainingAttempts ?? prev.lives,
        feedback: result.message,
        answer: '',
        error: '',
        suggestions: [],
      }));
    } catch (err) {
      handleApiError(err);
    }
  }

  const isLoading = state.phase === PHASE.LOADING;
  const isPlaying = state.phase === PHASE.PLAYING;
  const isFinished = state.phase === PHASE.WON || state.phase === PHASE.LOST;
  const showIdle = state.phase === PHASE.IDLE || state.phase === PHASE.ERROR;
  const isInfiniteMode = state.gameMode === 'infinite';
  const livesProgress = state.maxLives > 0 ? state.lives / state.maxLives : 0;
  const resultTitle =
    state.phase === PHASE.WON && isInfiniteMode && state.lastXpEarned > 0
      ? t(KEYS.guessPokemon.infiniteCashOutTitle)
      : state.phase === PHASE.WON
        ? t(KEYS.guessPokemon.wonTitle)
        : t(KEYS.guessPokemon.lostTitle);

  return (
    <AppLayout activeNav="games">
      <div className="guess-pokemon-page">
        <p className="guess-pokemon-page__label">{t(KEYS.guessPokemon.pageLabel)}</p>

        <header className="guess-pokemon-page__head">
          <div className="guess-pokemon-page__titles">
            <h1 className="guess-pokemon-page__title">{t(KEYS.guessPokemon.title)}</h1>
            <p className="guess-pokemon-page__subtitle">{t(KEYS.guessPokemon.subtitle)}</p>
          </div>
          <nav className="guess-pokemon-page__nav" aria-label={t(KEYS.guessPokemon.navAria)}>
            <Link className="guess-pokemon-page__nav-link" to={ROUTES.games}>
              {t(KEYS.guessPokemon.backToGames)}
            </Link>
          </nav>
        </header>

        {isCheckingResume ? (
          <section className="guess-panel guess-panel--checking">
            <p className="guess-panel__checking">{t(KEYS.guessPokemon.checkingResume)}</p>
          </section>
        ) : null}

        {!isCheckingResume && showIdle ? (
          <section className="guess-panel" aria-label={t(KEYS.guessPokemon.difficultyAria)}>
            <h2 className="guess-panel__title">{t(KEYS.guessPokemon.difficultyAria)}</h2>
            <div className="difficulty-picker">
              {DIFFICULTIES.map((difficulty) => {
                const selected = state.difficulty === difficulty;

                return (
                  <button
                    key={difficulty}
                    type="button"
                    className={`difficulty-option${selected ? ' difficulty-option--selected' : ''}`}
                    aria-pressed={selected}
                    disabled={isLoading}
                    onClick={() =>
                      setState((prev) => ({
                        ...prev,
                        difficulty,
                        error: '',
                      }))
                    }
                  >
                    <span className="difficulty-option__label">
                      {t(DIFFICULTY_LABEL_KEYS[difficulty])}
                    </span>
                    <span className="difficulty-option__meta">
                      {t(DIFFICULTY_META_KEYS[difficulty])}
                    </span>
                  </button>
                );
              })}
            </div>

            {state.phase === PHASE.ERROR && state.error ? (
              <div className="guess-feedback guess-feedback--error" role="alert">
                <p className="guess-feedback__message">{state.error}</p>
                {state.canResume ? (
                  <p className="guess-feedback__hint">{t(KEYS.guessPokemon.activeGameHint)}</p>
                ) : null}
              </div>
            ) : null}

            <div className="guess-panel__actions">
              {state.canResume ? (
                <Button type="button" disabled={isLoading} onClick={handleResume}>
                  {isLoading ? t(KEYS.guessPokemon.resuming) : t(KEYS.guessPokemon.continueGame)}
                </Button>
              ) : null}
              <Button type="button" disabled={isLoading} onClick={handleStart}>
                {isLoading ? t(KEYS.guessPokemon.starting) : t(KEYS.guessPokemon.startGame)}
              </Button>
              {state.phase === PHASE.ERROR ? (
                <Button type="button" variant="primary-sm" onClick={resetToIdle}>
                  {t(KEYS.guessPokemon.playAgain)}
                </Button>
              ) : null}
            </div>
          </section>
        ) : null}

        {!isCheckingResume && (isPlaying || isLoading) && state.image ? (
          <section className="guess-panel guess-panel--game" aria-label={t(KEYS.guessPokemon.gameAria)}>
            <div className="guess-game">
              <div className="guess-game__image-wrap guess-game__image-wrap--playing">
                <img
                  className="guess-game__image"
                  src={state.image}
                  alt={t(KEYS.guessPokemon.pokemonImageAria)}
                />
              </div>

              <div className="guess-game__sidebar">
                {isInfiniteMode ? (
                  <dl className="guess-infinite-stats">
                    <div className="guess-infinite-stats__row">
                      <dt>{t(KEYS.guessPokemon.streakLabel)}</dt>
                      <dd>{state.streak}</dd>
                    </div>
                    <div className="guess-infinite-stats__row">
                      <dt>{t(KEYS.guessPokemon.pendingXpLabel)}</dt>
                      <dd>{state.pendingXp}</dd>
                    </div>
                    <div className="guess-infinite-stats__row">
                      <dt>{t(KEYS.guessPokemon.multiplierLabel)}</dt>
                      <dd>x{state.multiplier.toFixed(1)}</dd>
                    </div>
                  </dl>
                ) : (
                  <div className="guess-lives">
                    <div className="guess-lives__head">
                      <span className="guess-lives__label">{t(KEYS.guessPokemon.livesLabel)}</span>
                      <span className="guess-lives__value">
                        {t(KEYS.guessPokemon.livesRemaining, { count: state.lives })}
                      </span>
                    </div>
                    <ProgressBar progress={livesProgress} size="md" />
                  </div>
                )}

                {isInfiniteMode ? (
                  <Button
                    type="button"
                    variant="primary-sm"
                    disabled={isLoading}
                    onClick={handleCashOut}
                  >
                    {isLoading ? t(KEYS.guessPokemon.cashingOut) : t(KEYS.guessPokemon.cashOut)}
                  </Button>
                ) : null}

                {state.feedback ? (
                  <div
                    className="guess-feedback"
                    role="status"
                    aria-live="polite"
                    aria-label={t(KEYS.guessPokemon.feedbackAria)}
                  >
                    <p className="guess-feedback__message">{state.feedback}</p>
                  </div>
                ) : null}

                <form className="guess-answer-form" onSubmit={handleSubmitAnswer}>
                  <div className="guess-answer-form__field">
                    <TextField
                      id="guess-answer"
                      label={t(KEYS.guessPokemon.answerLabel)}
                      value={state.answer}
                      onChange={(event) =>
                        setState((prev) => ({
                          ...prev,
                          answer: event.target.value,
                          error: '',
                        }))
                      }
                      placeholder={t(KEYS.guessPokemon.answerPlaceholder)}
                      autoComplete="off"
                      disabled={isLoading}
                    />
                    {state.suggestions.length > 0 ? (
                      <ul
                        className="guess-suggestions"
                        role="listbox"
                        aria-label={t(KEYS.guessPokemon.suggestionsAria)}
                      >
                        {state.suggestions.map((name) => (
                          <li key={name}>
                            <button
                              type="button"
                              className="guess-suggestions__item"
                              role="option"
                              onClick={() =>
                                setState((prev) => ({
                                  ...prev,
                                  answer: name,
                                  suggestions: [],
                                }))
                              }
                            >
                              {formatPokemonDisplayName(name)}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  {state.error ? (
                    <p className="guess-answer-form__error" role="alert">
                      {state.error}
                    </p>
                  ) : null}
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? t(KEYS.guessPokemon.submitting) : t(KEYS.guessPokemon.submitAnswer)}
                  </Button>
                </form>
              </div>
            </div>
          </section>
        ) : null}

        {!isCheckingResume && isFinished ? (
          <section
            className={`guess-panel guess-panel--result${state.phase === PHASE.WON ? ' guess-panel--won' : ' guess-panel--lost'}`}
            aria-label={
              state.phase === PHASE.WON
                ? t(KEYS.guessPokemon.wonTitle)
                : t(KEYS.guessPokemon.lostTitle)
            }
          >
            <h2 className="guess-result__title">{resultTitle}</h2>
            {state.feedback ? (
              <p className="guess-result__message">{state.feedback}</p>
            ) : null}
            {state.phase === PHASE.WON && state.lastXpEarned > 0 ? (
              <p className="guess-result__xp">
                {t(KEYS.guessPokemon.xpEarned, { count: state.lastXpEarned })}
              </p>
            ) : null}
            {state.pokemonName ? (
              <p className="guess-result__pokemon-name">
                {t(KEYS.guessPokemon.revealedName, {
                  name: formatPokemonDisplayName(state.pokemonName),
                })}
              </p>
            ) : null}
            {state.image ? (
              <div className="guess-result__image-wrap">
                <img
                  className="guess-result__image"
                  src={state.image}
                  alt={
                    state.pokemonName
                      ? formatPokemonDisplayName(state.pokemonName)
                      : t(KEYS.guessPokemon.pokemonImageAria)
                  }
                />
              </div>
            ) : null}
            <div className="guess-panel__actions">
              <Button type="button" disabled={isLoading} onClick={handlePlayAgain}>
                {isLoading ? t(KEYS.guessPokemon.starting) : t(KEYS.guessPokemon.playAgain)}
              </Button>
              <Button variant="primary-sm" to={ROUTES.games}>
                {t(KEYS.guessPokemon.backToGames)}
              </Button>
            </div>
          </section>
        ) : null}
      </div>
    </AppLayout>
  );
}
