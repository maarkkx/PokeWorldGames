import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ApiError } from '../../api/client.js';
import { fetchPublicProfile } from '../../api/profile.js';
import AppLayout from '../../components/layout/AppLayout.jsx';
import TrainerFriendActions from '../../components/friends/TrainerFriendActions.jsx';
import ProfileHero from '../../components/profile/ProfileHero.jsx';
import ProfilePinnedTeam from '../../components/profile/ProfilePinnedTeam.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { ROUTES } from '../../config/nav.js';
import { KEYS } from '../../i18n/keys.js';
import { isTrainerNotFoundMessage } from '../../utils/apiErrors.js';
import { getLevelProgress } from '../../utils/xp.js';
import './TrainerProfilePage.css';

export default function TrainerProfilePage() {
  const { username = '' } = useParams();
  const navigate = useNavigate();
  const { t } = useI18n();
  const { token, logout } = useAuth();

  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState('');

  const decodedUsername = decodeURIComponent(username).trim();

  const loadProfile = useCallback(async () => {
    if (!decodedUsername) {
      setNotFound(true);
      setProfile(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setNotFound(false);
    setError('');

    try {
      const result = await fetchPublicProfile(token, decodedUsername);
      setProfile(result);
    } catch (err) {
      setProfile(null);

      if (err instanceof ApiError && err.status === 401) {
        logout();
        return;
      }

      const message = err?.message ?? '';
      if (isTrainerNotFoundMessage(message)) {
        setNotFound(true);
      } else {
        setError(message || t(KEYS.trainerProfile.loadError));
      }
    } finally {
      setIsLoading(false);
    }
  }, [decodedUsername, logout, t, token]);

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  useEffect(() => {
    if (profile?.friendship?.status === 'self') {
      navigate(ROUTES.profile, { replace: true });
    }
  }, [profile?.friendship?.status, navigate]);

  const level = profile?.level ?? 1;
  const { levelXp, progress } = getLevelProgress(profile?.xp ?? 0);
  const displayName = profile?.name ?? decodedUsername;

  return (
    <AppLayout activeNav="home">
      <div className="trainer-profile-page">
        <p className="trainer-profile-page__label">{t(KEYS.trainerProfile.pageLabel)}</p>

        <header className="trainer-profile-intro">
          <div className="trainer-profile-intro__copy">
            <p className="trainer-profile-intro__kicker">{t(KEYS.trainerProfile.heroKicker)}</p>
            <h1 className="trainer-profile-intro__title">
              {profile?.name
                ? t(KEYS.trainerProfile.title, { name: profile.name })
                : notFound
                  ? decodedUsername
                  : t(KEYS.trainerProfile.pageLabel)}
            </h1>
            <p className="trainer-profile-intro__subtitle">{t(KEYS.trainerProfile.subtitle)}</p>
          </div>
          <nav className="trainer-profile-intro__nav" aria-label={t(KEYS.trainerProfile.navAria)}>
            <button
              type="button"
              className="trainer-profile-intro__link"
              onClick={() => navigate(-1)}
            >
              {t(KEYS.trainerProfile.back)}
            </button>
            <Link className="trainer-profile-intro__link" to={ROUTES.home}>
              {t(KEYS.common.backToHome)}
            </Link>
          </nav>
        </header>

        {isLoading ? (
          <p className="trainer-profile-page__status" role="status">
            {t(KEYS.trainerProfile.loading)}
          </p>
        ) : null}

        {!isLoading && notFound ? (
          <p className="trainer-profile-page__banner trainer-profile-page__banner--warn" role="alert">
            {t(KEYS.trainerProfile.notFound)}
          </p>
        ) : null}

        {!isLoading && error ? (
          <p className="trainer-profile-page__banner trainer-profile-page__banner--error" role="alert">
            {error}
          </p>
        ) : null}

        {!isLoading && profile && profile.friendship?.status !== 'self' ? (
          <div className="trainer-profile-page__content">
            <ProfileHero
              displayName={displayName}
              level={level}
              levelXp={levelXp}
              progress={progress}
              profile={profile.profile}
              readOnly
              showEmail={false}
              kickerKey={KEYS.trainerProfile.heroKicker}
              summaryAriaKey={KEYS.trainerProfile.summaryAria}
              aside={
                <TrainerFriendActions
                  compact
                  targetUserName={profile.name}
                  friendship={profile.friendship}
                  onUpdated={loadProfile}
                />
              }
            />
            <ProfilePinnedTeam
              pinnedPokemons={profile.pinnedPokemons}
              readOnly
              titleKey={KEYS.trainerProfile.teamTitle}
              subtitleKey={KEYS.trainerProfile.teamSubtitle}
              teamAriaKey={KEYS.trainerProfile.teamAria}
            />
          </div>
        ) : null}
      </div>
    </AppLayout>
  );
}
