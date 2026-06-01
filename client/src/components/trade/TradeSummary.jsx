import Button from '../ui/Button.jsx';
import TypePill from '../ui/TypePill.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { formatPokemonDisplayName } from '../../utils/pokemon.js';
import './TradeSummary.css';

function SummaryGrid({ title, items, emptyMessage, ariaLabel }) {
  const { t } = useI18n();

  return (
    <section className="trade-summary-block" aria-label={ariaLabel}>
      <h3 className="trade-summary-block__title">{title}</h3>
      {items.length === 0 ? (
        <p className="trade-summary-block__empty">{emptyMessage}</p>
      ) : (
        <ul className="trade-summary-block__grid">
          {items.map((item) => {
            const displayName = formatPokemonDisplayName(item.pokemon.name);
            const types = Array.isArray(item.pokemon.types) ? item.pokemon.types : [];

            return (
              <li key={item.pokemonId} className="trade-summary-item">
                <div className="trade-summary-item__visual">
                  {item.pokemon.urlImage ? (
                    <img src={item.pokemon.urlImage} alt="" />
                  ) : (
                    <span className="trade-summary-item__placeholder" aria-hidden="true" />
                  )}
                </div>
                <div className="trade-summary-item__meta">
                  <span className="trade-summary-item__name">{displayName}</span>
                  {types.length > 0 ? (
                    <ul
                      className="trade-summary-item__types"
                      aria-label={t(KEYS.trade.typesAria, { name: displayName })}
                    >
                      {types.map((typeEntry) => {
                        const typeName = typeEntry?.name ?? '';

                        return (
                          <li key={typeName}>
                            <TypePill typeName={typeName} />
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                  <span className="trade-summary-item__qty">×{item.quantity}</span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

export default function TradeSummary({
  targetUsername,
  offered,
  requested,
  onSubmit,
  isSubmitting,
  error,
}) {
  const { t } = useI18n();
  const offeredList = Array.from(offered.values());
  const requestedList = Array.from(requested.values());

  return (
    <div className="trade-summary">
      <p className="trade-summary__target">
        {t(KEYS.trade.summaryTarget, { name: targetUsername })}
      </p>

      <div className="trade-summary__columns">
        <SummaryGrid
          title={t(KEYS.trade.summaryYouGive)}
          items={offeredList}
          emptyMessage={t(KEYS.trade.summaryEmptyOffer)}
          ariaLabel={t(KEYS.trade.summaryOfferAria)}
        />
        <SummaryGrid
          title={t(KEYS.trade.summaryYouAsk)}
          items={requestedList}
          emptyMessage={t(KEYS.trade.summaryEmptyRequest)}
          ariaLabel={t(KEYS.trade.summaryRequestAria)}
        />
      </div>

      {error ? (
        <p className="trade-summary__error" role="alert">
          {error}
        </p>
      ) : null}

      <div className="trade-summary__actions">
        <Button type="button" variant="primary-sm" disabled={isSubmitting} onClick={onSubmit}>
          {isSubmitting ? t(KEYS.trade.sendingTrade) : t(KEYS.trade.sendTrade)}
        </Button>
      </div>
    </div>
  );
}
