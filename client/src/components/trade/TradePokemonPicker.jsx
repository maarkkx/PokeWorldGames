import PokemonTradeCard from './PokemonTradeCard.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { formatPokemonDisplayName } from '../../utils/pokemon.js';
import { filterInventoryByName } from '../../utils/tradeSelections.js';
import './TradePokemonPicker.css';

export default function TradePokemonPicker({
  inventory,
  filter,
  onFilterChange,
  selections,
  onToggle,
  onQuantityChange,
  trayTitle,
  trayAria,
  emptyInventoryMessage,
  emptyFilterMessage,
  gridAria,
  filterPlaceholder,
  filterAria,
}) {
  const { t } = useI18n();
  const filtered = filterInventoryByName(inventory, filter);
  const selectionList = Array.from(selections.values());

  return (
    <div className="trade-pokemon-picker">
      <div className="trade-pokemon-picker__toolbar">
        <input
          type="search"
          className="trade-pokemon-picker__filter"
          value={filter}
          onChange={(event) => onFilterChange(event.target.value)}
          placeholder={filterPlaceholder}
          aria-label={filterAria}
        />
      </div>

      {inventory.length === 0 ? (
        <p className="trade-pokemon-picker__empty">{emptyInventoryMessage}</p>
      ) : filtered.length === 0 ? (
        <p className="trade-pokemon-picker__empty">{emptyFilterMessage}</p>
      ) : (
        <div className="trade-pokemon-picker__grid" role="list" aria-label={gridAria}>
          {filtered.map((entry) => {
            const pokemonId = entry.pokemon.id;
            const selected = selections.has(pokemonId);
            const selectedEntry = selections.get(pokemonId);

            return (
              <div key={pokemonId} role="listitem">
                <PokemonTradeCard
                  entry={entry}
                  selected={selected}
                  selectedQuantity={selectedEntry?.quantity ?? 1}
                  onToggle={() => onToggle(entry)}
                  onQuantityChange={(qty) => onQuantityChange(pokemonId, qty)}
                  quantityBadgeAria={t(KEYS.trade.quantityBadge, {
                    count: entry.quantity,
                  })}
                  decreaseAria={t(KEYS.trade.decreaseQuantity)}
                  increaseAria={t(KEYS.trade.increaseQuantity)}
                  quantityInputAria={t(KEYS.trade.quantityInputAria, {
                    name: formatPokemonDisplayName(entry.pokemon.name),
                  })}
                  typesAria={t(KEYS.trade.typesAria, {
                    name: formatPokemonDisplayName(entry.pokemon.name),
                  })}
                />
              </div>
            );
          })}
        </div>
      )}

      <aside className="trade-selection-tray" aria-label={trayAria}>
        <h3 className="trade-selection-tray__title">{trayTitle}</h3>
        {selectionList.length === 0 ? (
          <p className="trade-selection-tray__empty">{t(KEYS.trade.trayEmpty)}</p>
        ) : (
          <ul className="trade-selection-tray__list">
            {selectionList.map((item) => (
              <li key={item.pokemonId} className="trade-selection-tray__item">
                {item.pokemon.urlImage ? (
                  <img
                    className="trade-selection-tray__thumb"
                    src={item.pokemon.urlImage}
                    alt=""
                  />
                ) : (
                  <span className="trade-selection-tray__thumb trade-selection-tray__thumb--empty" />
                )}
                <span className="trade-selection-tray__name">
                  {formatPokemonDisplayName(item.pokemon.name)}
                </span>
                <span className="trade-selection-tray__qty">×{item.quantity}</span>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}
