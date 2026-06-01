import { useCallback, useEffect, useMemo, useState } from 'react';
import { ApiError, acceptTrade, fetchMyTrades, rejectTrade } from '../../api/trade.js';
import Button from '../ui/Button.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { LOCALE_ES } from '../../i18n/locales.js';
import { formatPokemonDisplayName } from '../../utils/pokemon.js';
import './TradeList.css';

const FILTERS = ['all', 'sent', 'received'];

const STATUS_CLASS = {
  PENDING: 'trade-status--pending',
  ACCEPTED: 'trade-status--accepted',
  REJECTED: 'trade-status--rejected',
  CANCELLED: 'trade-status--cancelled',
};

function TradePokemonStrip({ items, label }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="trade-pokemon-strip">
      <span className="trade-pokemon-strip__label">{label}</span>
      <ul className="trade-pokemon-strip__list">
        {items.map((item) => (
          <li key={item.id} className="trade-pokemon-strip__item" title={item.pokemon?.name}>
            {item.pokemon?.urlImage ? (
              <img src={item.pokemon.urlImage} alt="" />
            ) : (
              <span className="trade-pokemon-strip__placeholder" />
            )}
            <span className="trade-pokemon-strip__qty">×{item.quantity}</span>
            <span className="trade-pokemon-strip__name">
              {formatPokemonDisplayName(item.pokemon?.name)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TradeCard({
  trade,
  t,
  locale,
  onAccept,
  onReject,
  actingId,
  actionErrorTradeId,
  actionErrorMessage,
}) {
  const statusKey = KEYS.trade.status[trade.status] ?? trade.status;
  const typeKey =
    trade.type === 'sent' ? KEYS.trade.typeSent : KEYS.trade.typeReceived;
  const canRespond =
    trade.type === 'received' && trade.status === 'PENDING';
  const isActing = actingId === trade.tradeId;
  const dateLocale = locale === LOCALE_ES ? 'es-ES' : 'en-GB';
  const formattedDate = new Date(trade.createdAt).toLocaleString(dateLocale, {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return (
    <article className="trade-card">
      <header className="trade-card__head">
        <div className="trade-card__meta">
          <span className={`trade-status ${STATUS_CLASS[trade.status] ?? ''}`}>
            {t(statusKey)}
          </span>
          <span className="trade-card__type">{t(typeKey)}</span>
        </div>
        <time className="trade-card__date" dateTime={trade.createdAt}>
          {formattedDate}
        </time>
      </header>

      <p className="trade-card__counterparty">
        {t(KEYS.trade.withUser, { name: trade.otherUser?.name ?? '—' })}
      </p>

      <div className="trade-card__sides">
        <TradePokemonStrip
          items={trade.offeredPokemons}
          label={t(KEYS.trade.offeredLabel)}
        />
        <TradePokemonStrip
          items={trade.requestedPokemons}
          label={t(KEYS.trade.requestedLabel)}
        />
      </div>

      {actionErrorTradeId === trade.tradeId && actionErrorMessage ? (
        <p className="trade-card__error" role="alert">
          {actionErrorMessage}
        </p>
      ) : null}

      {canRespond ? (
        <div className="trade-card__actions">
          <Button
            type="button"
            disabled={actingId != null}
            onClick={() => onAccept(trade.tradeId)}
          >
            {actingId === trade.tradeId ? t(KEYS.trade.accepting) : t(KEYS.trade.accept)}
          </Button>
          <Button
            type="button"
            variant="primary-sm"
            disabled={actingId != null}
            onClick={() => onReject(trade.tradeId)}
          >
            {actingId === trade.tradeId ? t(KEYS.trade.rejecting) : t(KEYS.trade.reject)}
          </Button>
        </div>
      ) : null}
    </article>
  );
}

export default function TradeList() {
  const { t, locale } = useI18n();
  const { token, logout } = useAuth();
  const [trades, setTrades] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const [actingId, setActingId] = useState(null);
  const [actionError, setActionError] = useState({ tradeId: null, message: '' });

  const handleApiError = useCallback(
    (err) => {
      if (err instanceof ApiError && err.status === 401) {
        logout();
        return err.message;
      }
      return err?.message ?? t(KEYS.trade.loadError);
    },
    [logout, t],
  );

  const loadTrades = useCallback(async () => {
    setIsLoading(true);
    setLoadError('');

    try {
      const data = await fetchMyTrades(token);
      setTrades(data);
    } catch (err) {
      setTrades([]);
      setLoadError(handleApiError(err));
    } finally {
      setIsLoading(false);
    }
  }, [token, handleApiError]);

  useEffect(() => {
    loadTrades();
  }, [loadTrades]);

  const filteredTrades = useMemo(() => {
    if (filter === 'all') return trades;
    return trades.filter((trade) => trade.type === filter);
  }, [trades, filter]);

  async function handleAccept(tradeId) {
    setActingId(tradeId);
    setActionError({ tradeId: null, message: '' });

    try {
      await acceptTrade(token, tradeId);
      await loadTrades();
    } catch (err) {
      setActionError({ tradeId, message: handleApiError(err) });
    } finally {
      setActingId(null);
    }
  }

  async function handleReject(tradeId) {
    setActingId(tradeId);
    setActionError({ tradeId: null, message: '' });

    try {
      await rejectTrade(token, tradeId);
      await loadTrades();
    } catch (err) {
      setActionError({ tradeId, message: handleApiError(err) });
    } finally {
      setActingId(null);
    }
  }

  return (
    <div className="trade-list">
      <div className="trade-list__filters" role="tablist" aria-label={t(KEYS.trade.listFilterAria)}>
        {FILTERS.map((value) => (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={filter === value}
            className={`trade-list__filter${filter === value ? ' is-active' : ''}`}
            onClick={() => setFilter(value)}
          >
            {t(KEYS.trade.listFilter[value])}
          </button>
        ))}
        <Button
          type="button"
          variant="primary-sm"
          className="trade-list__refresh"
          disabled={isLoading}
          onClick={loadTrades}
        >
          {isLoading ? t(KEYS.trade.refreshing) : t(KEYS.trade.refresh)}
        </Button>
      </div>

      {isLoading ? (
        <p className="trade-list__status" role="status">
          {t(KEYS.common.loading)}
        </p>
      ) : null}

      {loadError ? (
        <section className="trade-panel trade-panel--error" role="alert">
          <p>{loadError}</p>
          <Button type="button" onClick={loadTrades}>
            {t(KEYS.trade.retry)}
          </Button>
        </section>
      ) : null}

      {!isLoading && !loadError && filteredTrades.length === 0 ? (
        <p className="trade-list__empty">{t(KEYS.trade.listEmpty)}</p>
      ) : null}

      {!isLoading && !loadError && filteredTrades.length > 0 ? (
        <div className="trade-list__cards">
          {filteredTrades.map((trade) => (
            <TradeCard
              key={trade.tradeId}
              trade={trade}
              t={t}
              locale={locale}
              onAccept={handleAccept}
              onReject={handleReject}
              actingId={actingId}
              actionErrorTradeId={actionError.tradeId}
              actionErrorMessage={actionError.message}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
