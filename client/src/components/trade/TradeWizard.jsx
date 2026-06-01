import { useCallback, useState } from 'react';
import { ApiError, createTrade, fetchUserPokemons } from '../../api/trade.js';
import Button from '../ui/Button.jsx';
import TextField from '../ui/TextField.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import {
  createEmptySelections,
  selectionsToPayload,
  setSelectionQuantity,
  toggleSelection,
} from '../../utils/tradeSelections.js';
import { regexUser } from '../../utils/validation.js';
import TradePokemonPicker from './TradePokemonPicker.jsx';
import TradeSummary from './TradeSummary.jsx';
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
  const [requestFilter, setRequestFilter] = useState('');
  const [offerFilter, setOfferFilter] = useState('');
  const [searchError, setSearchError] = useState('');
  const [stepError, setStepError] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isLoadingOffer, setIsLoadingOffer] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inventoryLoaded, setInventoryLoaded] = useState(false);

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

    try {
      const pokemons = await fetchUserPokemons(trimmed);
      setTargetUsername(trimmed);
      setTargetInventory(pokemons);
      setInventoryLoaded(true);

      if (pokemons.length === 0) {
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

    setIsLoadingOffer(true);

    try {
      const pokemons = await fetchUserPokemons(user.name);
      setMyInventory(pokemons);
      setOffered(createEmptySelections());
      setStep(STEPS.OFFER);

      if (pokemons.length === 0) {
        setStepError(t(KEYS.trade.ownNoPokemon));
      }
    } catch (err) {
      setStepError(handleApiError(err));
    } finally {
      setIsLoadingOffer(false);
    }
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

  return (
    <div className="trade-wizard">
      <ol className="trade-wizard__steps" aria-label={t(KEYS.trade.wizardStepsAria)}>
        {STEP_ORDER.map((stepId, index) => (
          <li
            key={stepId}
            className={`trade-wizard__step${
              index === currentStepIndex ? ' is-current' : ''
            }${index < currentStepIndex ? ' is-done' : ''}`}
          >
            <span className="trade-wizard__step-num">{index + 1}</span>
            <span className="trade-wizard__step-label">
              {t(KEYS.trade.wizardStep[stepId])}
            </span>
          </li>
        ))}
      </ol>

      {step === STEPS.REQUEST ? (
        <section className="trade-wizard__panel" aria-label={t(KEYS.trade.stepRequestAria)}>
          <form className="trade-wizard__search" onSubmit={handleSearchUser}>
            <TextField
              id="trade-target-user"
              label={t(KEYS.trade.targetUserLabel)}
              value={targetUsername}
              onChange={(event) => {
                setTargetUsername(event.target.value);
                setSearchError('');
              }}
              placeholder={t(KEYS.trade.targetUserPlaceholder)}
              autoComplete="username"
              disabled={isSearching}
              required
            />
            <Button type="submit" disabled={isSearching}>
              {isSearching ? t(KEYS.trade.searchingUser) : t(KEYS.trade.searchUser)}
            </Button>
          </form>

          {searchError ? (
            <p className="trade-wizard__message trade-wizard__message--error" role="alert">
              {searchError}
            </p>
          ) : null}

          {inventoryLoaded && targetInventory.length > 0 ? (
            <>
              <TradePokemonPicker
                inventory={targetInventory}
                filter={requestFilter}
                onFilterChange={setRequestFilter}
                selections={requested}
                onToggle={handleToggleRequested}
                onQuantityChange={handleRequestedQuantity}
                trayTitle={t(KEYS.trade.trayRequested)}
                trayAria={t(KEYS.trade.trayRequestedAria)}
                emptyInventoryMessage={t(KEYS.trade.targetNoPokemon)}
                emptyFilterMessage={t(KEYS.trade.filterNoResults)}
                gridAria={t(KEYS.trade.requestGridAria)}
                filterPlaceholder={t(KEYS.trade.pokemonFilterPlaceholder)}
                filterAria={t(KEYS.trade.pokemonFilterAria)}
              />
              {stepError ? (
                <p className="trade-wizard__message trade-wizard__message--error" role="alert">
                  {stepError}
                </p>
              ) : null}
              <div className="trade-wizard__nav">
                <Button type="button" disabled={isLoadingOffer} onClick={goToOfferStep}>
                  {isLoadingOffer ? t(KEYS.trade.loadingOfferStep) : t(KEYS.trade.continueToOffer)}
                </Button>
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
          <TradePokemonPicker
            inventory={myInventory}
            filter={offerFilter}
            onFilterChange={setOfferFilter}
            selections={offered}
            onToggle={handleToggleOffered}
            onQuantityChange={handleOfferedQuantity}
            trayTitle={t(KEYS.trade.trayOffered)}
            trayAria={t(KEYS.trade.trayOfferedAria)}
            emptyInventoryMessage={t(KEYS.trade.ownNoPokemon)}
            emptyFilterMessage={t(KEYS.trade.filterNoResults)}
            gridAria={t(KEYS.trade.offerGridAria)}
            filterPlaceholder={t(KEYS.trade.pokemonFilterPlaceholder)}
            filterAria={t(KEYS.trade.pokemonFilterAria)}
          />
          {stepError ? (
            <p className="trade-wizard__message trade-wizard__message--error" role="alert">
              {stepError}
            </p>
          ) : null}
          <div className="trade-wizard__nav">
            <Button type="button" variant="primary-sm" onClick={() => setStep(STEPS.REQUEST)}>
              {t(KEYS.trade.backToRequest)}
            </Button>
            <Button type="button" onClick={goToSummaryStep}>
              {t(KEYS.trade.continueToSummary)}
            </Button>
          </div>
        </section>
      ) : null}

      {step === STEPS.SUMMARY ? (
        <section className="trade-wizard__panel" aria-label={t(KEYS.trade.stepSummaryAria)}>
          <TradeSummary
            targetUsername={targetUsername}
            offered={offered}
            requested={requested}
            onEditRequested={() => setStep(STEPS.REQUEST)}
            onEditOffered={() => setStep(STEPS.OFFER)}
            onSubmit={handleSubmitTrade}
            isSubmitting={isSubmitting}
            error={submitError}
          />
        </section>
      ) : null}
    </div>
  );
}
