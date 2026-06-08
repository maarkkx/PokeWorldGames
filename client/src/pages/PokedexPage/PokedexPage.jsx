import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError } from '../../api/client.js';
import { fetchPokedexData } from '../../api/pokedex.js';
import { fetchUserPokemons } from '../../api/trade.js';
import AppLayout from '../../components/layout/AppLayout.jsx';
import PokemonDexCard from '../../components/pokedex/PokemonDexCard.jsx';
import PokemonTradeCard from '../../components/trade/PokemonTradeCard.jsx';
import TradeInventoryFilters from '../../components/trade/TradeInventoryFilters.jsx';
import SegmentedControl from '../../components/ui/SegmentedControl.jsx';
import {
  DEFAULT_POKEDEX_REGION_ID,
  POKEDEX_REGIONS,
  countSpeciesInRange,
  getPokedexRegion,
} from '../../config/pokedexRegions.js';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { ROUTES } from '../../config/nav.js';
import {
  countCaughtInEntries,
  filterEntriesByRegion,
  mergePokedexEntries,
} from '../../utils/pokedexMerge.js';
import { formatPokemonDisplayName } from '../../utils/pokemon.js';
import {
  POKEDEX_INVENTORY_DEFAULT_FILTERS,
  applyInventoryFilters,
} from '../../utils/tradeInventoryFilters.js';
import { readTradeGridColumns, writeTradeGridColumns } from '../../utils/tradeGridColumns.js';
import '../../components/trade/TradeInventoryFilters.css';
import '../../components/trade/PokemonTradeCard.css';
import '../../components/trade/TradePokemonPicker.css';
import './PokedexPage.css';

const POKEDEX_GRID_COLUMNS = 6;

const VIEW_MODES = {
  POKEDEX: 'pokedex',
  INVENTORY: 'inventory',
};

const EMPTY_INVENTORY_MESSAGE = 'This user does not have any Pokemon';

export default function PokedexPage() {
  const { t } = useI18n();
  const { token, logout, user } = useAuth();

  const [viewMode, setViewMode] = useState(VIEW_MODES.POKEDEX);
  const [regionId, setRegionId] = useState(DEFAULT_POKEDEX_REGION_ID);
  const [catalog, setCatalog] = useState([]);
  const [ownedIds, setOwnedIds] = useState(() => new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [inventory, setInventory] = useState([]);
  const [inventoryLoading, setInventoryLoading] = useState(false);
  const [inventoryError, setInventoryError] = useState('');
  const [inventoryLoaded, setInventoryLoaded] = useState(false);
  const [inventoryFilters, setInventoryFilters] = useState(() => ({
    ...POKEDEX_INVENTORY_DEFAULT_FILTERS,
  }));
  const [gridColumns, setGridColumns] = useState(readTradeGridColumns);

  const regionOptions = useMemo(
    () =>
      POKEDEX_REGIONS.map((region) => ({
        value: region.id,
        label: t(KEYS.pokedex.regions[region.id]),
      })),
    [t],
  );

  const allEntries = useMemo(
    () => mergePokedexEntries(catalog, ownedIds),
    [catalog, ownedIds],
  );

  const activeRegion = useMemo(() => getPokedexRegion(regionId), [regionId]);

  const regionEntries = useMemo(
    () => filterEntriesByRegion(allEntries, activeRegion),
    [allEntries, activeRegion],
  );

  const regionCaught = useMemo(() => countCaughtInEntries(regionEntries), [regionEntries]);

  const regionTotalInCatalog = regionEntries.length;
  const regionTotalInRange = countSpeciesInRange(activeRegion.minId, activeRegion.maxId);

  const globalCaught = useMemo(() => countCaughtInEntries(allEntries), [allEntries]);

  const filteredInventory = useMemo(
    () => applyInventoryFilters(inventory, inventoryFilters),
    [inventory, inventoryFilters],
  );

  const inventoryStats = useMemo(
    () => ({
      species: inventory.length,
      total: inventory.reduce((sum, entry) => sum + (entry.quantity ?? 0), 0),
    }),
    [inventory],
  );

  const loadPokedex = useCallback(async () => {
    if (!token) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { catalog: nextCatalog, owned } = await fetchPokedexData(token);
      setCatalog(nextCatalog);
      setOwnedIds(new Set(owned.map((pokemon) => pokemon.id)));
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        logout();
        return;
      }
      setError(err?.message ?? t(KEYS.pokedex.errors.generic));
      setCatalog([]);
      setOwnedIds(new Set());
    } finally {
      setLoading(false);
    }
  }, [token, logout, t]);

  const loadInventory = useCallback(async () => {
    if (!token || !user?.name) {
      return;
    }

    setInventoryLoading(true);
    setInventoryError('');

    try {
      const pokemons = await fetchUserPokemons(user.name);
      setInventory(pokemons);
      setInventoryLoaded(true);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        logout();
        return;
      }

      if (err?.message === EMPTY_INVENTORY_MESSAGE) {
        setInventory([]);
        setInventoryLoaded(true);
        return;
      }

      setInventoryError(err?.message ?? t(KEYS.pokedex.errors.generic));
      setInventory([]);
      setInventoryLoaded(false);
    } finally {
      setInventoryLoading(false);
    }
  }, [token, user?.name, logout, t]);

  useEffect(() => {
    loadPokedex();
  }, [loadPokedex]);

  useEffect(() => {
    if (viewMode !== VIEW_MODES.INVENTORY || inventoryLoaded || inventoryLoading) {
      return;
    }

    loadInventory();
  }, [viewMode, inventoryLoaded, inventoryLoading, loadInventory]);

  useEffect(() => {
    writeTradeGridColumns(gridColumns);
  }, [gridColumns]);

  return (
    <AppLayout activeNav="pokedex">
      <div className="pokedex-page">
        <p className="pokedex-page__label">{t(KEYS.pokedex.pageLabel)}</p>

        <header className="pokedex-intro">
          <div className="pokedex-intro__copy">
            <p className="pokedex-intro__kicker">{t(KEYS.pokedex.kicker)}</p>
            <h1 className="pokedex-intro__title">{t(KEYS.pokedex.title)}</h1>
            <p className="pokedex-intro__subtitle">{t(KEYS.pokedex.subtitle)}</p>
          </div>
          <nav className="pokedex-intro__nav" aria-label={t(KEYS.pokedex.navAria)}>
            <Link className="pokedex-intro__link" to={ROUTES.home}>
              {t(KEYS.pokedex.backToHome)}
            </Link>
          </nav>
        </header>

        <div className="pokedex-page__tabs-wrap">
          <SegmentedControl
            ariaLabel={t(KEYS.pokedex.sectionAria)}
            value={viewMode}
            onChange={setViewMode}
            options={[
              { value: VIEW_MODES.POKEDEX, label: t(KEYS.pokedex.tabPokedex) },
              { value: VIEW_MODES.INVENTORY, label: t(KEYS.pokedex.tabInventory) },
            ]}
          />
        </div>

        {viewMode === VIEW_MODES.POKEDEX ? (
          <>
            <p className="pokedex-page__global-progress" aria-live="polite">
              {loading
                ? t(KEYS.common.loading)
                : t(KEYS.pokedex.globalProgress, {
                    caught: globalCaught,
                    total: catalog.length,
                  })}
            </p>

            <div className="pokedex-page__regions-wrap">
              <SegmentedControl
                className="segmented-control--scroll"
                ariaLabel={t(KEYS.pokedex.regionAria)}
                value={regionId}
                onChange={setRegionId}
                options={regionOptions}
              />
            </div>

            <div className="pokedex-page__summary" aria-live="polite">
              <p className="pokedex-page__region-progress">
                {t(KEYS.pokedex.regionProgress, {
                  caught: regionCaught,
                  total: regionTotalInCatalog,
                  rangeTotal: regionTotalInRange,
                })}
              </p>
              {regionTotalInCatalog < regionTotalInRange ? (
                <p className="pokedex-page__region-gap-hint">
                  {t(KEYS.pokedex.regionCatalogGap, {
                    missing: regionTotalInRange - regionTotalInCatalog,
                  })}
                </p>
              ) : null}
            </div>

            {error ? (
              <p className="pokedex-page__error" role="alert">
                {error}
              </p>
            ) : null}

            <section className="pokedex-page__content" aria-label={t(KEYS.pokedex.gridAria)}>
              {loading ? (
                <p className="pokedex-page__status">{t(KEYS.pokedex.loading)}</p>
              ) : null}

              {!loading && !error && regionEntries.length === 0 ? (
                <p className="pokedex-page__status">{t(KEYS.pokedex.emptyRegion)}</p>
              ) : null}

              {!loading && !error && regionEntries.length > 0 ? (
                <div
                  className="pokedex-page__grid trade-pokemon-picker__grid"
                  role="list"
                  style={{ '--trade-grid-columns': POKEDEX_GRID_COLUMNS }}
                >
                  {regionEntries.map((entry) => (
                    <div key={entry.pokemon.id} className="pokedex-page__grid-item" role="listitem">
                      <PokemonDexCard pokemon={entry.pokemon} caught={entry.caught} />
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          </>
        ) : (
          <section
            className="pokedex-page__inventory"
            aria-label={t(KEYS.pokedex.inventoryTitle)}
          >
            <header className="pokedex-page__inventory-header">
              <h2 className="pokedex-page__inventory-title">{t(KEYS.pokedex.inventoryTitle)}</h2>
              <p className="pokedex-page__inventory-subtitle">
                {t(KEYS.pokedex.inventorySubtitle)}
              </p>
              <p className="pokedex-page__inventory-summary" aria-live="polite">
                {inventoryLoading
                  ? t(KEYS.common.loading)
                  : t(KEYS.pokedex.inventorySummary, {
                      species: inventoryStats.species,
                      total: inventoryStats.total,
                    })}
              </p>
            </header>

            {inventoryError ? (
              <p className="pokedex-page__error" role="alert">
                {inventoryError}
              </p>
            ) : null}

            {!inventoryError ? (
              <div className="trade-inventory-layout">
                <TradeInventoryFilters
                  variant="inventory"
                  filters={inventoryFilters}
                  onChange={setInventoryFilters}
                  gridColumns={gridColumns}
                  onGridColumnsChange={setGridColumns}
                />

                <div className="trade-inventory-layout__main">
                  {inventoryLoading ? (
                    <p className="pokedex-page__status">{t(KEYS.common.loading)}</p>
                  ) : null}

                  {!inventoryLoading && inventory.length === 0 ? (
                    <p className="pokedex-page__status">{t(KEYS.pokedex.inventoryEmpty)}</p>
                  ) : null}

                  {!inventoryLoading &&
                  inventory.length > 0 &&
                  filteredInventory.length === 0 ? (
                    <p className="pokedex-page__status">{t(KEYS.pokedex.inventoryNoResults)}</p>
                  ) : null}

                  {!inventoryLoading && filteredInventory.length > 0 ? (
                    <div
                      className="trade-pokemon-picker__grid"
                      role="list"
                      aria-label={t(KEYS.pokedex.inventoryGridAria)}
                      style={{ '--trade-grid-columns': gridColumns }}
                    >
                      {filteredInventory.map((entry) => (
                        <div key={entry.pokemon.id} role="listitem">
                          <PokemonTradeCard
                            entry={entry}
                            readOnly
                            quantityBadgeAria={t(KEYS.trade.quantityBadge, {
                              count: entry.quantity,
                            })}
                            typesAria={t(KEYS.trade.typesAria, {
                              name: formatPokemonDisplayName(entry.pokemon.name),
                            })}
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </section>
        )}
      </div>
    </AppLayout>
  );
}
