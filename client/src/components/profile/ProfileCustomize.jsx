import { useEffect, useMemo, useState } from 'react';
import { updateAppearance } from '../../api/profile.js';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import {
  PROFILE_BG_PRESETS,
  buildAvatarOptionsList,
  buildProfileAvatarUrl,
} from '../../utils/profileAvatar.js';
import Button from '../ui/Button.jsx';
import ProfileModal from './ProfileModal.jsx';
import './ProfileCustomize.css';

export default function ProfileCustomize({ token, profile, onUpdated, onError }) {
  const { t } = useI18n();
  const [pokemonId, setPokemonId] = useState(profile?.pokemonId ?? 1);
  const [bgColor, setBgColor] = useState(profile?.bgColor ?? '#F1F1F1');
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState('');

  const avatarOptions = useMemo(() => buildAvatarOptionsList(), []);

  useEffect(() => {
    setPokemonId(profile?.pokemonId ?? 1);
    setBgColor(profile?.bgColor ?? '#F1F1F1');
  }, [profile?.pokemonId, profile?.bgColor]);

  const previewUrl = buildProfileAvatarUrl(pokemonId);

  const filteredOptions = useMemo(() => {
    const query = search.trim();
    if (!query) {
      return avatarOptions;
    }
    return avatarOptions.filter((option) => String(option.id).includes(query));
  }, [avatarOptions, search]);

  const isDirty =
    pokemonId !== (profile?.pokemonId ?? 1) ||
    bgColor !== (profile?.bgColor ?? '#F1F1F1');

  async function handleSave() {
    setIsSaving(true);
    setSuccess('');

    try {
      await updateAppearance(token, { pokemonId, bgColor });
      await onUpdated();
      setSuccess(t(KEYS.profile.customizeSuccess));
    } catch (err) {
      onError(err);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <section className="profile-customize">
      <header className="profile-customize__head">
        <div>
          <h2 className="profile-customize__title">{t(KEYS.profile.customizeTitle)}</h2>
          <p className="profile-customize__subtitle">{t(KEYS.profile.customizeSubtitle)}</p>
        </div>
      </header>

      {success ? (
        <p className="profile-customize__flash" role="status">
          {success}
        </p>
      ) : null}

      <div className="profile-customize__preview" style={{ '--preview-bg': bgColor }}>
        <div className="profile-customize__preview-avatar">
          <img src={previewUrl} alt="" />
        </div>
        <div className="profile-customize__preview-meta">
          <span className="profile-customize__preview-label">
            {t(KEYS.profile.customizeAvatarLabel)}
          </span>
          <span className="profile-customize__preview-id">#{pokemonId}</span>
        </div>
      </div>

      <div className="profile-customize__field">
        <span className="profile-customize__label">{t(KEYS.profile.customizeBgLabel)}</span>
        <div className="profile-customize__swatches">
          {PROFILE_BG_PRESETS.map((color) => (
            <button
              key={color}
              type="button"
              className={`profile-customize__swatch${bgColor.toLowerCase() === color.toLowerCase() ? ' is-active' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setBgColor(color)}
              aria-label={color}
              aria-pressed={bgColor.toLowerCase() === color.toLowerCase()}
            />
          ))}
          <label className="profile-customize__color-input">
            <input
              type="color"
              value={bgColor.length === 7 ? bgColor : '#F1F1F1'}
              onChange={(event) => setBgColor(event.target.value.toUpperCase())}
            />
            <span>{bgColor}</span>
          </label>
        </div>
      </div>

      <div className="profile-customize__actions">
        <Button type="button" variant="secondary" onClick={() => setIsAvatarOpen(true)}>
          {t(KEYS.profile.customizeChangeAvatar)}
        </Button>
        <Button type="button" onClick={handleSave} disabled={isSaving || !isDirty}>
          {isSaving ? t(KEYS.profile.customizeSaving) : t(KEYS.profile.customizeSave)}
        </Button>
      </div>

      {isAvatarOpen ? (
        <ProfileModal
          title={t(KEYS.profile.avatarModalTitle)}
          onClose={() => setIsAvatarOpen(false)}
        >
          <label className="profile-customize__search">
            <span>{t(KEYS.profile.avatarModalSearch)}</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={t(KEYS.profile.avatarModalSearchPlaceholder)}
              inputMode="numeric"
            />
          </label>
          <div className="profile-customize__avatar-grid" role="list">
            {filteredOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                role="listitem"
                className={`profile-customize__avatar-option${
                  option.id === pokemonId ? ' is-selected' : ''
                }`}
                onClick={() => {
                  setPokemonId(option.id);
                  setIsAvatarOpen(false);
                  setSearch('');
                }}
              >
                <img src={option.avatarUrl} alt="" loading="lazy" />
                <span>#{option.id}</span>
              </button>
            ))}
          </div>
        </ProfileModal>
      ) : null}
    </section>
  );
}
