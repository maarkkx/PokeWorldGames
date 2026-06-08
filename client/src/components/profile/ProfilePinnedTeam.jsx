import { useCallback, useEffect, useMemo, useState } from 'react';
import { updatePinnedPokemons } from '../../api/profile.js';
import { fetchOwnedPokedex } from '../../api/pokedex.js';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { formatPokemonDisplayName } from '../../utils/pokemon.js';
import Button from '../ui/Button.jsx';
import ProfileModal from './ProfileModal.jsx';
import './ProfilePinnedTeam.css';

const SLOT_COUNT = 4;

function slotsFromPinned(pinnedPokemons) {
  const list = Array.isArray(pinnedPokemons) ? pinnedPokemons : [];
  return Array.from({ length: SLOT_COUNT }, (_, index) => {
    const slot = index + 1;
    const entry = list.find((item) => item.slot === slot);
    return { slot, pokemon: entry?.pokemon ?? null };
  });
}

function idsFromSlots(slots) {
  return slots.filter((s) => s.pokemon).map((s) => s.pokemon.id);
}

export default function ProfilePinnedTeam({
  token,
  pinnedPokemons,
  onUpdated,
  onError,
  readOnly = false,
  titleKey = KEYS.profile.teamTitle,
  subtitleKey = KEYS.profile.teamSubtitle,
  teamAriaKey = KEYS.profile.teamAria,
}) {
  const { t } = useI18n();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [draftIds, setDraftIds] = useState([]);
  const [owned, setOwned] = useState([]);
  const [loadingOwned, setLoadingOwned] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState('');

  const displaySlots = useMemo(
    () => slotsFromPinned(pinnedPokemons),
    [pinnedPokemons],
  );

  const openPicker = useCallback(async () => {
    setSuccess('');
    setDraftIds(idsFromSlots(displaySlots));
    setIsPickerOpen(true);
    setLoadingOwned(true);

    try {
      const list = await fetchOwnedPokedex(token);
      setOwned(list);
    } catch (err) {
      onError(err);
      setIsPickerOpen(false);
    } finally {
      setLoadingOwned(false);
    }
  }, [displaySlots, onError, token]);

  useEffect(() => {
    if (!isPickerOpen) {
      return;
    }
    setDraftIds(idsFromSlots(displaySlots));
  }, [isPickerOpen, displaySlots]);

  function togglePokemon(pokemonId) {
    setDraftIds((current) => {
      const index = current.indexOf(pokemonId);
      if (index >= 0) {
        return current.filter((id) => id !== pokemonId);
      }
      if (current.length >= SLOT_COUNT) {
        return current;
      }
      return [...current, pokemonId];
    });
  }

  async function handleSave() {
    setIsSaving(true);
    setSuccess('');

    try {
      await updatePinnedPokemons(token, draftIds);
      await onUpdated();
      setSuccess(t(KEYS.profile.teamSuccess));
      setIsPickerOpen(false);
    } catch (err) {
      onError(err);
    } finally {
      setIsSaving(false);
    }
  }

  const ownedById = useMemo(
    () => new Map(owned.map((pokemon) => [pokemon.id, pokemon])),
    [owned],
  );

  return (
    <section
      className={`profile-team${readOnly ? ' profile-team--readonly' : ''}`}
      aria-label={t(teamAriaKey)}
    >
      <header className="profile-team__head">
        <div>
          <h2 className="profile-team__title">{t(titleKey)}</h2>
          <p className="profile-team__subtitle">{t(subtitleKey)}</p>
        </div>
        {!readOnly ? (
          <Button type="button" variant="secondary" onClick={openPicker}>
            {t(KEYS.profile.teamEdit)}
          </Button>
        ) : null}
      </header>

      {success ? (
        <p className="profile-team__flash profile-team__flash--ok" role="status">
          {success}
        </p>
      ) : null}

      <ol className="profile-team__slots">
        {displaySlots.map(({ slot, pokemon }) => (
          <li key={slot} className="profile-team__slot">
            <span className="profile-team__slot-num">{slot}</span>
            {pokemon ? (
              <>
                <div className="profile-team__slot-visual">
                  {pokemon.urlImage ? (
                    <img src={pokemon.urlImage} alt="" />
                  ) : (
                    <span className="profile-team__slot-fallback" />
                  )}
                </div>
                <p className="profile-team__slot-name">
                  {formatPokemonDisplayName(pokemon.name)}
                </p>
              </>
            ) : (
              <div className="profile-team__slot-empty">
                <span aria-hidden="true">+</span>
                <span>{t(KEYS.profile.teamEmptySlot)}</span>
              </div>
            )}
          </li>
        ))}
      </ol>

      {!readOnly && isPickerOpen ? (
        <ProfileModal
          title={t(KEYS.profile.teamPickerTitle)}
          closeLabel={t(KEYS.profile.avatarModalClose)}
          onClose={() => !isSaving && setIsPickerOpen(false)}
          footer={
            <>
              <span className="profile-team__picker-count">
                {t(KEYS.profile.teamSelectedCount, { count: draftIds.length })}
              </span>
              <Button
                type="button"
                variant="secondary"
                onClick={() => setIsPickerOpen(false)}
                disabled={isSaving}
              >
                {t(KEYS.profile.avatarModalClose)}
              </Button>
              <Button type="button" onClick={handleSave} disabled={isSaving}>
                {isSaving ? t(KEYS.profile.teamSaving) : t(KEYS.profile.teamSave)}
              </Button>
            </>
          }
        >
          <p className="profile-team__picker-hint">{t(KEYS.profile.teamPickerHint)}</p>

          {loadingOwned ? (
            <p className="profile-team__picker-loading">{t(KEYS.common.loading)}</p>
          ) : owned.length === 0 ? (
            <p className="profile-team__picker-empty">{t(KEYS.profile.teamEmptyInventory)}</p>
          ) : (
            <div
              className="profile-team__picker-grid"
              role="list"
              aria-label={t(KEYS.profile.teamPickerAria)}
            >
              {owned.map((pokemon) => {
                const order = draftIds.indexOf(pokemon.id);
                const selected = order >= 0;

                return (
                  <button
                    key={pokemon.id}
                    type="button"
                    role="listitem"
                    className={`profile-team__picker-card${selected ? ' is-selected' : ''}${
                      !selected && draftIds.length >= SLOT_COUNT ? ' is-disabled' : ''
                    }`}
                    onClick={() => togglePokemon(pokemon.id)}
                    disabled={!selected && draftIds.length >= SLOT_COUNT}
                  >
                    {selected ? (
                      <span className="profile-team__picker-order">{order + 1}</span>
                    ) : null}
                    {pokemon.urlImage ? (
                      <img src={pokemon.urlImage} alt="" />
                    ) : (
                      <span className="profile-team__picker-fallback" />
                    )}
                    <span className="profile-team__picker-name">
                      {formatPokemonDisplayName(pokemon.name)}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          <ol className="profile-team__draft-preview">
            {Array.from({ length: SLOT_COUNT }, (_, index) => {
              const pokemonId = draftIds[index];
              const pokemon = pokemonId ? ownedById.get(pokemonId) : null;
              return (
                <li key={index + 1} className="profile-team__draft-slot">
                  <span>{index + 1}</span>
                  {pokemon?.urlImage ? (
                    <img src={pokemon.urlImage} alt="" />
                  ) : (
                    <span className="profile-team__draft-empty">—</span>
                  )}
                </li>
              );
            })}
          </ol>
        </ProfileModal>
      ) : null}
    </section>
  );
}
