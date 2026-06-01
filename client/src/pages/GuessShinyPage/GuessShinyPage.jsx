import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError } from '../../api/client.js';
import { startGame, submitAnswer } from '../../api/guessShiny.js';
import AppLayout from '../../components/layout/AppLayout.jsx';
import Button from '../../components/ui/Button.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { ROUTES } from '../../config/nav.js';
import { buildShinyGridCells } from '../../utils/guessShinyGrid.js';
import {
  clearShinySession,
  loadShinySession,
  saveShinySession,
} from '../../utils/guessShinySession.js';
import './GuessShinyPage.css';

const PHASE = {
  IDLE: 'idle',
  LOADING: 'loading',
  PLAYING: 'playing',
  WON: 'won',
  LOST: 'lost',
  ERROR: 'error',
};

const INITIAL_STATE = {
  phase: PHASE.IDLE,
  gameId: null,
  imageUrl: null,
  correctPosition: null,
  cells: [],
  selectedPosition: null,
  feedback: '',
  lastXpEarned: 0,
  error: '',
  canResume: false,
};

function isActiveGameBlockedMessage(message) {
  return message?.toLowerCase().includes('active game');
}

function applyPlayingState(prev, session) {
  return {
    ...prev,
    phase: PHASE.PLAYING,
    gameId: session.gameId,
    imageUrl: session.imageUrl,
    correctPosition: session.correctPosition,
    cells: session.cells,
    selectedPosition: null,
    feedback: '',
    lastXpEarned: 0,
    error: '',
    canResume: false,
  };
}

function createSessionFromStart(result) {
  const cells = buildShinyGridCells(result.imageUrl, result.correctPosition);

  return {
    gameId: result.gameId,
    imageUrl: result.imageUrl,
    correctPosition: result.correctPosition,
    cells,
  };
}

export default function GuessShinyPage() {
  const { t } = useI18n();
  const { token, logout, refreshProfile } = useAuth();
  const [state, setState] = useState(INITIAL_STATE);
  const [isRestoringSession, setIsRestoringSession] = useState(true);

  const handleApiError = useCallback(
    (err) => {
      if (err instanceof ApiError && err.status === 401) {
        logout();
        return;
      }

      const message = err?.message ?? t(KEYS.common.loading);
      const savedSession = loadShinySession();

      setState((prev) => ({
        ...prev,
        phase: PHASE.ERROR,
        error: message,
        feedback: '',
        canResume: isActiveGameBlockedMessage(message) && Boolean(savedSession),
      }));
    },
    [logout, t],
  );

  const resetToIdle = useCallback(() => {
    clearShinySession();
    setState(INITIAL_STATE);
  }, []);

  const restoreSession = useCallback((session) => {
    setState((prev) => applyPlayingState(prev, session));
  }, []);

  const handleContinue = useCallback(() => {
    const session = loadShinySession();
    if (!session) {
      setState((prev) => ({
        ...prev,
        phase: PHASE.IDLE,
        error: '',
        canResume: false,
      }));
      return;
    }

    restoreSession(session);
  }, [restoreSession]);

  useEffect(() => {
    const session = loadShinySession();
    if (session) {
      setState((prev) => applyPlayingState(prev, session));
    }
    setIsRestoringSession(false);
  }, []);

  async function handleStart() {
    setState((prev) => ({
      ...prev,
      phase: PHASE.LOADING,
      error: '',
      feedback: '',
      canResume: false,
    }));

    try {
      const result = await startGame(token);
      const session = createSessionFromStart(result);
      saveShinySession(session);
      setState((prev) => applyPlayingState(prev, session));
    } catch (err) {
      handleApiError(err);
    }
  }

  async function handlePlayAgain() {
    clearShinySession();

    setState({
      ...INITIAL_STATE,
      phase: PHASE.LOADING,
    });

    try {
      const result = await startGame(token);
      const session = createSessionFromStart(result);
      saveShinySession(session);
      setState((prev) => applyPlayingState(prev, session));
    } catch (err) {
      handleApiError(err);
    }
  }

  async function handlePickPosition(position) {
    if (state.phase !== PHASE.PLAYING) {
      return;
    }

    setState((prev) => ({
      ...prev,
      phase: PHASE.LOADING,
      selectedPosition: position,
      error: '',
    }));

    try {
      const result = await submitAnswer(token, position);

      if (result.status === 'WON' || result.status === 'LOST') {
        clearShinySession();

        if (result.xpEarned > 0) {
          await refreshProfile();
        }

        setState((prev) => ({
          ...prev,
          phase: result.status === 'WON' ? PHASE.WON : PHASE.LOST,
          feedback: result.message,
          lastXpEarned: result.xpEarned ?? 0,
          selectedPosition: position,
        }));
        return;
      }

      setState((prev) => ({
        ...prev,
        phase: PHASE.PLAYING,
        feedback: result.message,
        selectedPosition: position,
      }));
    } catch (err) {
      handleApiError(err);
    }
  }

  const isLoading = state.phase === PHASE.LOADING;
  const isPlaying = state.phase === PHASE.PLAYING || isLoading;
  const isFinished = state.phase === PHASE.WON || state.phase === PHASE.LOST;
  const showIdle = state.phase === PHASE.IDLE || state.phase === PHASE.ERROR;
  const resultTitle =
    state.phase === PHASE.WON ? t(KEYS.guessShiny.wonTitle) : t(KEYS.guessShiny.lostTitle);

  return (
    <AppLayout activeNav="games">
      <div className="guess-shiny-page">
        <p className="guess-shiny-page__label">{t(KEYS.guessShiny.pageLabel)}</p>

        <header className="guess-shiny-page__head">
          <div>
            <h1 className="guess-shiny-page__title">{t(KEYS.guessShiny.title)}</h1>
            <p className="guess-shiny-page__subtitle">{t(KEYS.guessShiny.subtitle)}</p>
          </div>
          <nav className="guess-shiny-page__nav" aria-label={t(KEYS.guessShiny.navAria)}>
            <Link className="guess-shiny-page__nav-link" to={ROUTES.games}>
              {t(KEYS.guessShiny.backToGames)}
            </Link>
          </nav>
        </header>

        {isRestoringSession ? (
          <section className="guess-shiny-panel guess-shiny-panel--checking">
            <p className="guess-shiny-panel__checking">{t(KEYS.guessShiny.checkingSession)}</p>
          </section>
        ) : null}

        {!isRestoringSession && showIdle ? (
          <section className="guess-shiny-panel" aria-label={t(KEYS.guessShiny.startAria)}>
            <h2 className="guess-shiny-panel__title">{t(KEYS.guessShiny.howToPlayTitle)}</h2>
            <ul className="guess-shiny-rules">
              <li>{t(KEYS.guessShiny.howToPlay1)}</li>
              <li>{t(KEYS.guessShiny.howToPlay2)}</li>
              <li>{t(KEYS.guessShiny.howToPlay3)}</li>
            </ul>

            {state.phase === PHASE.ERROR && state.error ? (
              <div className="guess-shiny-feedback guess-shiny-feedback--error" role="alert">
                <p className="guess-shiny-feedback__message">{state.error}</p>
                {state.canResume ? (
                  <p className="guess-shiny-feedback__hint">{t(KEYS.guessShiny.activeGameHint)}</p>
                ) : null}
              </div>
            ) : null}

            <div className="guess-shiny-panel__actions">
              {state.canResume ? (
                <Button type="button" disabled={isLoading} onClick={handleContinue}>
                  {t(KEYS.guessShiny.continueGame)}
                </Button>
              ) : null}
              <Button type="button" disabled={isLoading} onClick={handleStart}>
                {isLoading ? t(KEYS.guessShiny.starting) : t(KEYS.guessShiny.startGame)}
              </Button>
              {state.phase === PHASE.ERROR ? (
                <Button type="button" variant="primary-sm" onClick={resetToIdle}>
                  {t(KEYS.guessShiny.playAgain)}
                </Button>
              ) : null}
            </div>
          </section>
        ) : null}

        {!isRestoringSession && isPlaying && state.cells.length === 4 ? (
          <section className="guess-shiny-panel guess-shiny-panel--game" aria-label={t(KEYS.guessShiny.gameAria)}>
            <p className="guess-shiny-panel__prompt">{t(KEYS.guessShiny.pickPrompt)}</p>

            <div className="guess-shiny-grid" role="group" aria-label={t(KEYS.guessShiny.gridAria)}>
              {state.cells.map((cell) => {
                const isSelected = state.selectedPosition === cell.position;
                const revealState = isFinished || isLoading;
                const isCorrectCell = cell.position === state.correctPosition;
                const showCorrect = revealState && isCorrectCell;
                const showWrong = revealState && isSelected && !isCorrectCell;

                let cellClass = 'guess-shiny-cell';
                if (showCorrect) cellClass += ' guess-shiny-cell--correct';
                if (showWrong) cellClass += ' guess-shiny-cell--wrong';
                if (isSelected && !revealState) cellClass += ' guess-shiny-cell--selected';

                return (
                  <button
                    key={cell.position}
                    type="button"
                    className={cellClass}
                    disabled={isLoading || isFinished}
                    aria-label={t(KEYS.guessShiny.positionAria, { position: cell.position })}
                    onClick={() => handlePickPosition(cell.position)}
                  >
                    <span className="guess-shiny-cell__badge">{cell.position}</span>
                    <span className="guess-shiny-cell__image-wrap">
                      <img
                        className={`guess-shiny-cell__img${cell.filterClass ? ` ${cell.filterClass}` : ''}`}
                        src={cell.imageUrl}
                        alt=""
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            {state.feedback ? (
              <div
                className="guess-shiny-feedback"
                role="status"
                aria-live="polite"
                aria-label={t(KEYS.guessShiny.feedbackAria)}
              >
                <p className="guess-shiny-feedback__message">{state.feedback}</p>
              </div>
            ) : null}
          </section>
        ) : null}

        {!isRestoringSession && isFinished ? (
          <section
            className={`guess-shiny-panel guess-shiny-panel--result${
              state.phase === PHASE.WON ? ' guess-shiny-panel--won' : ' guess-shiny-panel--lost'
            }`}
            aria-label={resultTitle}
          >
            <h2 className="guess-shiny-result__title">{resultTitle}</h2>
            {state.feedback ? <p className="guess-shiny-result__message">{state.feedback}</p> : null}
            {state.phase === PHASE.WON && state.lastXpEarned > 0 ? (
              <p className="guess-shiny-result__xp">
                {t(KEYS.guessShiny.xpEarned, { count: state.lastXpEarned })}
              </p>
            ) : null}
            {state.correctPosition ? (
              <p className="guess-shiny-result__position">
                {t(KEYS.guessShiny.correctPositionReveal, { position: state.correctPosition })}
              </p>
            ) : null}

            {state.cells.length === 4 ? (
              <div className="guess-shiny-grid guess-shiny-grid--result" aria-hidden="true">
                {state.cells.map((cell) => {
                  const isCorrectCell = cell.position === state.correctPosition;
                  const isSelected = state.selectedPosition === cell.position;

                  let cellClass = 'guess-shiny-cell guess-shiny-cell--static';
                  if (isCorrectCell) cellClass += ' guess-shiny-cell--correct';
                  if (isSelected && !isCorrectCell) cellClass += ' guess-shiny-cell--wrong';

                  return (
                    <div key={cell.position} className={cellClass}>
                      <span className="guess-shiny-cell__badge">{cell.position}</span>
                      <span className="guess-shiny-cell__image-wrap">
                        <img
                          className={`guess-shiny-cell__img${cell.filterClass ? ` ${cell.filterClass}` : ''}`}
                          src={cell.imageUrl}
                          alt=""
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : null}

            <div className="guess-shiny-panel__actions">
              <Button type="button" disabled={isLoading} onClick={handlePlayAgain}>
                {isLoading ? t(KEYS.guessShiny.starting) : t(KEYS.guessShiny.playAgain)}
              </Button>
              <Button variant="primary-sm" to={ROUTES.games}>
                {t(KEYS.guessShiny.backToGames)}
              </Button>
            </div>
          </section>
        ) : null}
      </div>
    </AppLayout>
  );
}
