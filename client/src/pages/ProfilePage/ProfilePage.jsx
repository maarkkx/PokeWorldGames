import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError } from '../../api/client.js';
import { updatePassword, updateUsername } from '../../api/profile.js';
import ProfileCustomize from '../../components/profile/ProfileCustomize.jsx';
import ProfileHero from '../../components/profile/ProfileHero.jsx';
import ProfilePinnedTeam from '../../components/profile/ProfilePinnedTeam.jsx';
import AppLayout from '../../components/layout/AppLayout.jsx';
import Button from '../../components/ui/Button.jsx';
import TextField from '../../components/ui/TextField.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { ROUTES } from '../../config/nav.js';
import { XP_PER_LEVEL, getLevelProgress } from '../../utils/xp.js';
import {
  validateUpdatePassword,
  validateUpdateUsername,
} from '../../utils/validation.js';
import './ProfilePage.css';

export default function ProfilePage() {
  const { t } = useI18n();
  const { user, token, logout, refreshProfile } = useAuth();

  const [username, setUsername] = useState(user?.name ?? '');
  const [password, setPassword] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [newPwdConf, setNewPwdConf] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [usernameSuccess, setUsernameSuccess] = useState('');
  const [isSavingUsername, setIsSavingUsername] = useState(false);

  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [isSavingPassword, setIsSavingPassword] = useState(false);
  const [pageError, setPageError] = useState('');

  const handleApiError = useCallback(
    (err) => {
      if (err instanceof ApiError && err.status === 401) {
        logout();
        return err.message;
      }

      return err?.message ?? t(KEYS.profile.refreshError);
    },
    [logout, t],
  );

  const reportPageError = useCallback(
    (err) => {
      setPageError(handleApiError(err));
    },
    [handleApiError],
  );

  useEffect(() => {
    if (user?.name) {
      setUsername(user.name);
    }
  }, [user?.name]);

  const level = user?.level ?? 1;
  const lootboxes = user?.lootboxes ?? 0;
  const { levelXp, progress } = getLevelProgress(user?.xp ?? 0);
  const displayName = user?.name ?? t(KEYS.common.trainerFallback);

  async function handleUsernameSubmit(event) {
    event.preventDefault();
    setUsernameError('');
    setUsernameSuccess('');

    const trimmed = username.trim();

    if (trimmed === user?.name) {
      setUsernameSuccess(t(KEYS.profile.usernameUnchanged));
      return;
    }

    const validationKey = validateUpdateUsername(trimmed);
    if (validationKey) {
      setUsernameError(t(validationKey));
      return;
    }

    setIsSavingUsername(true);

    try {
      await updateUsername(token, trimmed);
      await refreshProfile();
      setUsernameSuccess(t(KEYS.profile.usernameSuccess));
    } catch (err) {
      setUsernameError(handleApiError(err));
    } finally {
      setIsSavingUsername(false);
    }
  }

  async function handlePasswordSubmit(event) {
    event.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    const validationKey = validateUpdatePassword({ password, newPwd, newPwdConf });
    if (validationKey) {
      setPasswordError(t(validationKey));
      return;
    }

    setIsSavingPassword(true);

    try {
      await updatePassword(token, { password, newPwd, newPwdConf });
      setPassword('');
      setNewPwd('');
      setNewPwdConf('');
      setPasswordSuccess(t(KEYS.profile.passwordSuccess));
    } catch (err) {
      setPasswordError(handleApiError(err));
    } finally {
      setIsSavingPassword(false);
    }
  }

  return (
    <AppLayout activeNav="profile">
      <div className="profile-page">
        <p className="profile-page__label">{t(KEYS.profile.pageLabel)}</p>

        <header className="profile-intro">
          <div className="profile-intro__copy">
            <h1 className="profile-intro__title visually-hidden">{t(KEYS.profile.title)}</h1>
            <p className="profile-intro__subtitle">{t(KEYS.profile.subtitle)}</p>
          </div>
          <nav className="profile-intro__nav" aria-label={t(KEYS.profile.navAria)}>
            <Link className="profile-intro__link" to={ROUTES.home}>
              {t(KEYS.profile.backToHome)}
            </Link>
            <Link className="profile-intro__link" to={ROUTES.games}>
              {t(KEYS.profile.exploreGames)}
            </Link>
          </nav>
        </header>

        {pageError ? (
          <p className="profile-page__banner profile-page__banner--error" role="alert">
            {pageError}
          </p>
        ) : null}

        <ProfileHero
          displayName={displayName}
          level={level}
          levelXp={levelXp}
          progress={progress}
          lootboxes={lootboxes}
          profile={user?.profile}
        />

        <div className="profile-page__grid">
          <div className="profile-page__main">
            <ProfilePinnedTeam
              token={token}
              pinnedPokemons={user?.pinnedPokemons}
              onUpdated={() => {
                setPageError('');
                return refreshProfile();
              }}
              onError={reportPageError}
            />
            <ProfileCustomize
              token={token}
              profile={user?.profile}
              onUpdated={() => {
                setPageError('');
                return refreshProfile();
              }}
              onError={reportPageError}
            />
          </div>

          <aside className="profile-page__aside">
            <section className="profile-card profile-card--account">
              <header className="profile-card__head">
                <h2 className="profile-card__title">{t(KEYS.profile.accountTitle)}</h2>
                <p className="profile-card__hint">{t(KEYS.profile.accountSubtitle)}</p>
              </header>

              <div className="profile-account-stats">
                <div className="profile-stat">
                  <span className="profile-stat__label">{t(KEYS.profile.statEmail)}</span>
                  <span className="profile-stat__value">{user?.email ?? '—'}</span>
                  <p className="profile-stat__hint">{t(KEYS.profile.emailReadOnlyHint)}</p>
                </div>
              </div>

              <form className="profile-form" onSubmit={handleUsernameSubmit}>
                <h3 className="profile-form__section-title">{t(KEYS.profile.usernameTitle)}</h3>
                <TextField
                  id="profile-username"
                  label={t(KEYS.profile.usernameLabel)}
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                    setUsernameError('');
                    setUsernameSuccess('');
                  }}
                  placeholder={t(KEYS.profile.usernamePlaceholder)}
                  autoComplete="username"
                  disabled={isSavingUsername}
                  required
                />

                {usernameError ? (
                  <p className="profile-form__message profile-form__message--error" role="alert">
                    {usernameError}
                  </p>
                ) : null}

                {usernameSuccess ? (
                  <p className="profile-form__message profile-form__message--success" role="status">
                    {usernameSuccess}
                  </p>
                ) : null}

                <Button type="submit" disabled={isSavingUsername}>
                  {isSavingUsername
                    ? t(KEYS.profile.savingUsername)
                    : t(KEYS.profile.saveUsername)}
                </Button>
              </form>

              <form className="profile-form profile-form--password" onSubmit={handlePasswordSubmit}>
                <h3 className="profile-form__section-title">{t(KEYS.profile.passwordTitle)}</h3>
                <TextField
                  id="profile-current-password"
                  label={t(KEYS.profile.currentPasswordLabel)}
                  type="password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setPasswordError('');
                    setPasswordSuccess('');
                  }}
                  autoComplete="current-password"
                  disabled={isSavingPassword}
                  required
                />
                <TextField
                  id="profile-new-password"
                  label={t(KEYS.profile.newPasswordLabel)}
                  type="password"
                  value={newPwd}
                  onChange={(event) => {
                    setNewPwd(event.target.value);
                    setPasswordError('');
                    setPasswordSuccess('');
                  }}
                  autoComplete="new-password"
                  disabled={isSavingPassword}
                  required
                />
                <TextField
                  id="profile-confirm-password"
                  label={t(KEYS.profile.confirmPasswordLabel)}
                  type="password"
                  value={newPwdConf}
                  onChange={(event) => {
                    setNewPwdConf(event.target.value);
                    setPasswordError('');
                    setPasswordSuccess('');
                  }}
                  autoComplete="new-password"
                  disabled={isSavingPassword}
                  required
                />

                {passwordError ? (
                  <p className="profile-form__message profile-form__message--error" role="alert">
                    {passwordError}
                  </p>
                ) : null}

                {passwordSuccess ? (
                  <p className="profile-form__message profile-form__message--success" role="status">
                    {passwordSuccess}
                  </p>
                ) : null}

                <Button type="submit" disabled={isSavingPassword}>
                  {isSavingPassword
                    ? t(KEYS.profile.savingPassword)
                    : t(KEYS.profile.savePassword)}
                </Button>
              </form>
            </section>
          </aside>
        </div>
      </div>
    </AppLayout>
  );
}
