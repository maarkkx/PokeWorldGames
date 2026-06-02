import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError } from '../../api/client.js';
import { fetchPokedexData } from '../../api/pokedex.js';
import AppLayout from '../../components/layout/AppLayout.jsx';
import PokemonDexCard from '../../components/pokedex/PokemonDexCard.jsx';
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
import '../../components/trade/TradePokemonPicker.css';
import './PokedexPage.css';

const POKEDEX_GRID_COLUMNS = 6;

export default function PokedexPage() {
  const { t } = useI18n();
  const { token, logout } = useAuth();

  const [regionId, setRegionId] = useState(DEFAULT_POKEDEX_REGION_ID);
  const [catalog, setCatalog] = useState([]);
  const [ownedIds, setOwnedIds] = useState(() => new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  useEffect(() => {
    loadPokedex();
  }, [loadPokedex]);

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
      </div>
    </AppLayout>
  );
}
