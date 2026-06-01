import { useCallback, useEffect, useMemo, useState } from 'react';
import { ApiError, createTrade, fetchUserPokemons } from '../../api/trade.js';
import Button from '../ui/Button.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import {
  createEmptySelections,
  selectionsToPayload,
  setSelectionQuantity,
  toggleSelection,
} from '../../utils/tradeSelections.js';
import {
  DEFAULT_INVENTORY_FILTERS,
  PERSPECTIVE,
  applyInventoryFilters,
  buildPokemonIdSet,
} from '../../utils/tradeInventoryFilters.js';
import { readTradeGridColumns, writeTradeGridColumns } from '../../utils/tradeGridColumns.js';
import { regexUser } from '../../utils/validation.js';
import TradeInventoryFilters from './TradeInventoryFilters.jsx';
import TradePokemonPicker from './TradePokemonPicker.jsx';
import TradeSummary from './TradeSummary.jsx';
import TradeUserSearch from './TradeUserSearch.jsx';
import './TradeWizard.css';

const STEPS = {
  REQUEST: 'request',
  OFFER: 'offer',
  SUMMARY: 'summary',
};

const STEP_ORDER = [STEPS.REQUEST, STEPS.OFFER, STEPS.SUMMARY];

export default function TradeWizard({ onTradeCreated }) {
  const { t } = useI18n();
  const { user, token, logout } = useAuth();

  const [step, setStep] = useState(STEPS.REQUEST);
  const [targetUsername, setTargetUsername] = useState('');
  const [targetInventory, setTargetInventory] = useState([]);
  const [myInventory, setMyInventory] = useState([]);
  const [requested, setRequested] = useState(createEmptySelections);
  const [offered, setOffered] = useState(createEmptySelections);
  const [requestFilters, setRequestFilters] = useState({ ...DEFAULT_INVENTORY_FILTERS });
  const [offerFilters, setOfferFilters] = useState({ ...DEFAULT_INVENTORY_FILTERS });
  const [searchError, setSearchError] = useState('');
  const [stepError, setStepError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingOffer, setIsLoadingOffer] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inventoryLoaded, setInventoryLoaded] = useState(false);
  const [gridColumns, setGridColumns] = useState(readTradeGridColumns);

  useEffect(() => {
    writeTradeGridColumns(gridColumns);
  }, [gridColumns]);

  const myPokemonIds = useMemo(() => buildPokemonIdSet(myInventory), [myInventory]);
  const theirPokemonIds = useMemo(() => buildPokemonIdSet(targetInventory), [targetInventory]);

  const filteredTargetInventory = useMemo(
    () =>
      applyInventoryFilters(targetInventory, {
        ...requestFilters,
        perspective: PERSPECTIVE.TARGET,
        myPokemonIds,
      }),
    [targetInventory, requestFilters, myPokemonIds],
  );

  const filteredMyInventory = useMemo(
    () =>
      applyInventoryFilters(myInventory, {
        ...offerFilters,
        perspective: PERSPECTIVE.OWN,
        theirPokemonIds,
      }),
    [myInventory, offerFilters, theirPokemonIds],
  );

  const handleApiError = useCallback(
    (err) => {
      if (err instanceof ApiError && err.status === 401) {
        logout();
        return err.message;
      }
      return err?.message ?? t(KEYS.trade.genericError);
    },
    [logout, t],
  );

  async function handleSearchUser(event) {
    event.preventDefault();
    setSearchError('');
    setStepError('');

    const trimmed = targetUsername.trim();

    if (!regexUser.test(trimmed)) {
      setSearchError(t(KEYS.validation.usernameInvalid));
      return;
    }

    if (trimmed.toLowerCase() === user?.name?.toLowerCase()) {
      setSearchError(t(KEYS.trade.cannotTradeSelf));
      return;
    }

    setIsSearching(true);
    setInventoryLoaded(false);
    setRequested(createEmptySelections());
    setTargetInventory([]);
    setMyInventory([]);
    setRequestFilters({ ...DEFAULT_INVENTORY_FILTERS });
    setOfferFilters({ ...DEFAULT_INVENTORY_FILTERS });

    try {
      const [targetPokemons, ownPokemons] = await Promise.all([
        fetchUserPokemons(trimmed),
        fetchUserPokemons(user.name),
      ]);

      setTargetUsername(trimmed);
      setTargetInventory(targetPokemons);
      setMyInventory(ownPokemons);
      setInventoryLoaded(true);

      if (targetPokemons.length === 0) {
        setSearchError(t(KEYS.trade.targetNoPokemon));
      }
    } catch (err) {
      setSearchError(handleApiError(err));
      setInventoryLoaded(false);
    } finally {
      setIsSearching(false);
    }
  }

  function validateRequested() {
    if (!inventoryLoaded || targetInventory.length === 0) {
      return KEYS.trade.needTargetInventory;
    }
    if (requested.size === 0) {
      return KEYS.trade.needRequested;
    }
    return null;
  }

  async function goToOfferStep() {
    setStepError('');
    const validationKey = validateRequested();
    if (validationKey) {
      setStepError(t(validationKey));
      return;
    }

    if (myInventory.length === 0) {
      setIsLoadingOffer(true);
      try {
        const pokemons = await fetchUserPokemons(user.name);
        setMyInventory(pokemons);
        if (pokemons.length === 0) {
          setStepError(t(KEYS.trade.ownNoPokemon));
          return;
        }
      } catch (err) {
        setStepError(handleApiError(err));
        return;
      } finally {
        setIsLoadingOffer(false);
      }
    }

    setOffered(createEmptySelections());
    setOfferFilters({ ...DEFAULT_INVENTORY_FILTERS });
    setStep(STEPS.OFFER);
  }

  function goToSummaryStep() {
    setStepError('');
    if (offered.size === 0) {
      setStepError(t(KEYS.trade.needOffered));
      return;
    }
    setSubmitError('');
    setStep(STEPS.SUMMARY);
  }

  async function handleSubmitTrade() {
    setSubmitError('');

    const validationKey = validateRequested();
    if (validationKey) {
      setSubmitError(t(validationKey));
      setStep(STEPS.REQUEST);
      return;
    }

    if (offered.size === 0) {
      setSubmitError(t(KEYS.trade.needOffered));
      setStep(STEPS.OFFER);
      return;
    }

    setIsSubmitting(true);

    try {
      await createTrade(token, {
        toUserName: targetUsername,
        offeredPokemons: selectionsToPayload(offered),
        requestedPokemons: selectionsToPayload(requested),
      });
      onTradeCreated?.();
    } catch (err) {
      setSubmitError(handleApiError(err));
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleToggleRequested(entry) {
    setRequested((prev) => toggleSelection(prev, entry));
    setStepError('');
  }

  function handleRequestedQuantity(pokemonId, quantity) {
    setRequested((prev) => setSelectionQuantity(prev, pokemonId, quantity));
  }

  function handleToggleOffered(entry) {
    setOffered((prev) => toggleSelection(prev, entry));
    setStepError('');
  }

  function handleOfferedQuantity(pokemonId, quantity) {
    setOffered((prev) => setSelectionQuantity(prev, pokemonId, quantity));
  }

  const currentStepIndex = STEP_ORDER.indexOf(step);

  function goToStep(stepId) {
    const targetIndex = STEP_ORDER.indexOf(stepId);
    if (targetIndex === currentStepIndex || targetIndex > currentStepIndex) {
      return;
    }

    setStepError('');
    setSubmitError('');
    setStep(stepId);
  }

  return (
    <div className="trade-wizard">
      <ol className="trade-wizard__steps" aria-label={t(KEYS.trade.wizardStepsAria)}>
        {STEP_ORDER.map((stepId, index) => {
          const isCurrent = index === currentStepIndex;
          const isDone = index < currentStepIndex;
          const stepLabel = t(KEYS.trade.wizardStep[stepId]);
          const stepClassName = `trade-wizard__step${
            isCurrent ? ' is-current' : ''
          }${isDone ? ' is-done' : ''}`;

          return (
            <li key={stepId} className="trade-wizard__steps-item">
              {isDone ? (
                <button
                  type="button"
                  className={`${stepClassName} trade-wizard__step-btn`}
                  onClick={() => goToStep(stepId)}
                  aria-label={t(KEYS.trade.wizardStepGoTo, { step: stepLabel })}
                >
                  <span className="trade-wizard__step-num">{index + 1}</span>
                  <span className="trade-wizard__step-label">{stepLabel}</span>
                </button>
              ) : (
                <span
                  className={stepClassName}
                  aria-current={isCurrent ? 'step' : undefined}
                >
                  <span className="trade-wizard__step-num">{index + 1}</span>
                  <span className="trade-wizard__step-label">{stepLabel}</span>
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {step === STEPS.REQUEST ? (
        <section className="trade-wizard__panel" aria-label={t(KEYS.trade.stepRequestAria)}>
          <TradeUserSearch
            value={targetUsername}
            onChange={setTargetUsername}
            onSubmit={handleSearchUser}
            disabled={isSearching}
            error={searchError}
            currentUsername={user?.name}
          />

          {inventoryLoaded && targetInventory.length > 0 ? (
            <>
              <div className="trade-inventory-layout">
                <TradeInventoryFilters
                  filters={requestFilters}
                  onChange={setRequestFilters}
                  perspective={PERSPECTIVE.TARGET}
                  targetUsername={targetUsername}
                  gridColumns={gridColumns}
                  onGridColumnsChange={setGridColumns}
                />

                <div className="trade-inventory-layout__main">
                  <div className="trade-wizard__nav trade-wizard__nav--sticky">
                    <Button
                      type="button"
                      variant="primary-sm"
                      disabled={isLoadingOffer}
                      onClick={goToOfferStep}
                    >
                      {isLoadingOffer
                        ? t(KEYS.trade.loadingOfferStep)
                        : t(KEYS.trade.continueToOffer)}
                    </Button>
                  </div>

                  {stepError ? (
                    <p className="trade-wizard__message trade-wizard__message--error" role="alert">
                      {stepError}
                    </p>
                  ) : null}

                  {filteredTargetInventory.length === 0 ? (
                    <p className="trade-wizard__message">{t(KEYS.trade.filterNoResults)}</p>
                  ) : (
                    <TradePokemonPicker
                      inventory={filteredTargetInventory}
                      selections={requested}
                      onToggle={handleToggleRequested}
                      onQuantityChange={handleRequestedQuantity}
                      trayTitle={t(KEYS.trade.trayRequested)}
                      trayAria={t(KEYS.trade.trayRequestedAria)}
                      emptyInventoryMessage={t(KEYS.trade.targetNoPokemon)}
                      gridAria={t(KEYS.trade.requestGridAria)}
                      gridColumns={gridColumns}
                    />
                  )}
                </div>
              </div>
            </>
          ) : null}
        </section>
      ) : null}

      {step === STEPS.OFFER ? (
        <section className="trade-wizard__panel" aria-label={t(KEYS.trade.stepOfferAria)}>
          <p className="trade-wizard__hint">
            {t(KEYS.trade.offerHint, { name: targetUsername })}
          </p>

          <div className="trade-inventory-layout">
            <TradeInventoryFilters
              filters={offerFilters}
              onChange={setOfferFilters}
              perspective={PERSPECTIVE.OWN}
              targetUsername={targetUsername}
              gridColumns={gridColumns}
              onGridColumnsChange={setGridColumns}
            />

            <div className="trade-inventory-layout__main">
              <div className="trade-wizard__nav trade-wizard__nav--sticky">
                <Button type="button" variant="primary-sm" onClick={() => setStep(STEPS.REQUEST)}>
                  {t(KEYS.trade.backToRequest)}
                </Button>
                <Button type="button" variant="primary-sm" onClick={goToSummaryStep}>
                  {t(KEYS.trade.continueToSummary)}
                </Button>
              </div>

              {stepError ? (
                <p className="trade-wizard__message trade-wizard__message--error" role="alert">
                  {stepError}
                </p>
              ) : null}

              {filteredMyInventory.length === 0 ? (
                <p className="trade-wizard__message">{t(KEYS.trade.filterNoResults)}</p>
              ) : (
                <TradePokemonPicker
                  inventory={filteredMyInventory}
                  selections={offered}
                  onToggle={handleToggleOffered}
                  onQuantityChange={handleOfferedQuantity}
                  trayTitle={t(KEYS.trade.trayOffered)}
                  trayAria={t(KEYS.trade.trayOfferedAria)}
                  emptyInventoryMessage={t(KEYS.trade.ownNoPokemon)}
                  gridAria={t(KEYS.trade.offerGridAria)}
                  gridColumns={gridColumns}
                />
              )}
            </div>
          </div>
        </section>
      ) : null}

      {step === STEPS.SUMMARY ? (
        <section className="trade-wizard__panel" aria-label={t(KEYS.trade.stepSummaryAria)}>
          <TradeSummary
            targetUsername={targetUsername}
            offered={offered}
            requested={requested}
            onSubmit={handleSubmitTrade}
            isSubmitting={isSubmitting}
            error={submitError}
          />
        </section>
      ) : null}
    </div>
  );
}
