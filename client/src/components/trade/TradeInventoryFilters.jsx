import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import {
  OWNERSHIP_FILTER,
  PERSPECTIVE,
  SORT_BY,
  SORT_DIR,
} from '../../utils/tradeInventoryFilters.js';
import { MAX_EXACT_TYPE_COUNT, POKEMON_TYPES } from '../../utils/pokemonTypes.js';
import { TRADE_GRID_COLUMN_OPTIONS } from '../../utils/tradeGridColumns.js';
import TypeMultiCombobox from './TypeMultiCombobox.jsx';
import './TradeInventoryFilters.css';

export default function TradeInventoryFilters({
  filters,
  onChange,
  perspective,
  targetUsername,
  gridColumns,
  onGridColumnsChange,
  variant = 'trade',
}) {
  const { t } = useI18n();

  function updateField(field, value) {
    onChange({ ...filters, [field]: value });
  }

  function handleExactTypesChange(event) {
    const exactTypes = event.target.checked;
    const types = filters.types ?? [];
    const trimmedTypes =
      exactTypes && types.length > MAX_EXACT_TYPE_COUNT
        ? types.slice(0, MAX_EXACT_TYPE_COUNT)
        : types;

    onChange({ ...filters, exactTypes, types: trimmedTypes });
  }

  const exactTypes = Boolean(filters.exactTypes);
  const maxTypes = exactTypes ? MAX_EXACT_TYPE_COUNT : POKEMON_TYPES.length;

  const showOwnership = variant !== 'inventory';

  const ownershipOptions =
    perspective === PERSPECTIVE.TARGET
      ? [
          { value: OWNERSHIP_FILTER.ALL, label: t(KEYS.trade.ownership.all) },
          {
            value: OWNERSHIP_FILTER.MISSING_FROM_ME,
            label: t(KEYS.trade.ownership.missingFromMe, { name: targetUsername }),
          },
          {
            value: OWNERSHIP_FILTER.ALSO_OWN,
            label: t(KEYS.trade.ownership.alsoOwn),
          },
        ]
      : [
          { value: OWNERSHIP_FILTER.ALL, label: t(KEYS.trade.ownership.all) },
          {
            value: OWNERSHIP_FILTER.MISSING_FROM_THEM,
            label: t(KEYS.trade.ownership.missingFromThem, { name: targetUsername }),
          },
          {
            value: OWNERSHIP_FILTER.ALSO_IN_THEIR,
            label: t(KEYS.trade.ownership.alsoInTheir, { name: targetUsername }),
          },
        ];

  return (
    <aside className="trade-inventory-filters" aria-label={t(KEYS.trade.filtersAria)}>
      <label className="trade-inventory-filters__field">
        <span className="trade-inventory-filters__label">{t(KEYS.trade.pokemonFilterAria)}</span>
        <input
          type="search"
          className="trade-inventory-filters__input"
          value={filters.nameQuery}
          onChange={(event) => updateField('nameQuery', event.target.value)}
          placeholder={t(KEYS.trade.pokemonFilterPlaceholder)}
          aria-label={t(KEYS.trade.pokemonFilterAria)}
        />
      </label>

      <div className="trade-inventory-filters__type-block">
        <TypeMultiCombobox
          selectedTypes={filters.types ?? []}
          onChange={(types) => updateField('types', types)}
          maxTypes={maxTypes}
        />
        <label className="trade-inventory-filters__exact">
          <input
            type="checkbox"
            className="trade-inventory-filters__exact-input"
            checked={exactTypes}
            onChange={handleExactTypesChange}
          />
          <span className="trade-inventory-filters__exact-label">
            {t(KEYS.trade.exactTypesMatch)}
          </span>
        </label>
      </div>

      <label className="trade-inventory-filters__field">
        <span className="trade-inventory-filters__label">{t(KEYS.trade.sortBy)}</span>
        <select
          className="trade-inventory-filters__select"
          value={filters.sortBy}
          onChange={(event) => updateField('sortBy', event.target.value)}
        >
          <option value={SORT_BY.POKEDEX}>{t(KEYS.trade.sortPokedex)}</option>
          <option value={SORT_BY.NAME}>{t(KEYS.trade.sortName)}</option>
          <option value={SORT_BY.QUANTITY}>{t(KEYS.trade.sortQuantity)}</option>
        </select>
      </label>

      <label className="trade-inventory-filters__field">
        <span className="trade-inventory-filters__label">{t(KEYS.trade.sortDir)}</span>
        <select
          className="trade-inventory-filters__select"
          value={filters.sortDir}
          onChange={(event) => updateField('sortDir', event.target.value)}
        >
          <option value={SORT_DIR.ASC}>{t(KEYS.trade.sortAsc)}</option>
          <option value={SORT_DIR.DESC}>{t(KEYS.trade.sortDesc)}</option>
        </select>
      </label>

      {showOwnership ? (
        <label className="trade-inventory-filters__field">
          <span className="trade-inventory-filters__label">{t(KEYS.trade.filterOwnership)}</span>
          <select
            className="trade-inventory-filters__select"
            value={filters.ownership}
            onChange={(event) => updateField('ownership', event.target.value)}
          >
            {ownershipOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      ) : null}

      <label className="trade-inventory-filters__field">
        <span className="trade-inventory-filters__label">{t(KEYS.trade.gridColumns)}</span>
        <select
          className="trade-inventory-filters__select"
          value={gridColumns}
          onChange={(event) => onGridColumnsChange(Number(event.target.value))}
          aria-label={t(KEYS.trade.gridColumns)}
        >
          {TRADE_GRID_COLUMN_OPTIONS.map((count) => (
            <option key={count} value={count}>
              {t(KEYS.trade.gridColumnsOption, { count })}
            </option>
          ))}
        </select>
      </label>
    </aside>
  );
}
