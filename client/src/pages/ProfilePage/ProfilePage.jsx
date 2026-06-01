import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError } from '../../api/client.js';
import { updatePassword, updateUsername } from '../../api/profile.js';
import AppLayout from '../../components/layout/AppLayout.jsx';
import Button from '../../components/ui/Button.jsx';
import ProgressBar from '../../components/ui/ProgressBar.jsx';
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

  useEffect(() => {
    if (user?.name) {
      setUsername(user.name);
    }
  }, [user?.name]);

  const level = user?.level ?? 1;
  const lootboxes = user?.lootboxes ?? 0;
  const { levelXp, progress } = getLevelProgress(user?.xp ?? 0);
  const nextXp = XP_PER_LEVEL - levelXp;
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
            <h1 className="profile-intro__title">{t(KEYS.profile.title)}</h1>
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

        <div className="profile-layout">
          <section className="profile-card" aria-label={t(KEYS.profile.summaryAria)}>
            <h2 className="profile-card__title">{t(KEYS.profile.summaryTitle)}</h2>

            <dl className="profile-stats">
              <div className="profile-stat">
                <dt>{t(KEYS.profile.statUsername)}</dt>
                <dd>{displayName}</dd>
              </div>
              <div className="profile-stat profile-stat--wide">
                <dt>{t(KEYS.profile.statEmail)}</dt>
                <dd>{user?.email ?? '—'}</dd>
                <p className="profile-stat__hint">{t(KEYS.profile.emailReadOnlyHint)}</p>
              </div>
              <div className="profile-stat">
                <dt>{t(KEYS.profile.statLevel)}</dt>
                <dd>{t(KEYS.common.levelShort, { level })}</dd>
              </div>
              <div className="profile-stat">
                <dt>{t(KEYS.profile.statXp)}</dt>
                <dd>
                  {t(KEYS.profile.xpProgress, { current: levelXp, max: XP_PER_LEVEL })}
                </dd>
              </div>
              <div className="profile-stat">
                <dt>{t(KEYS.profile.statLootboxes)}</dt>
                <dd>{lootboxes}</dd>
              </div>
            </dl>

            <div className="profile-progress" aria-label={t(KEYS.profile.progressAria)}>
              <div className="profile-progress__head">
                <h3 className="profile-progress__title">{t(KEYS.profile.progressTitle)}</h3>
                <span className="profile-progress__value">
                  {t(KEYS.profile.xpProgress, { current: levelXp, max: XP_PER_LEVEL })}
                </span>
              </div>
              <ProgressBar progress={progress} size="md" />
              <p className="profile-progress__next">
                {t(KEYS.profile.nextGoal, { xp: nextXp, level: level + 1 })}
              </p>
            </div>
          </section>

          <div className="profile-forms">
            <section className="profile-card profile-card--form">
              <h2 className="profile-card__title">{t(KEYS.profile.usernameTitle)}</h2>

              <form className="profile-form" onSubmit={handleUsernameSubmit}>
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
            </section>

            <section className="profile-card profile-card--form">
              <h2 className="profile-card__title">{t(KEYS.profile.passwordTitle)}</h2>

              <form className="profile-form" onSubmit={handlePasswordSubmit}>
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
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
