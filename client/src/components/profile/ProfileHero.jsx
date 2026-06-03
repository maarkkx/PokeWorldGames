import ProgressBar from '../ui/ProgressBar.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { XP_PER_LEVEL } from '../../utils/xp.js';
import './ProfileHero.css';

export default function ProfileHero({
  displayName,
  email,
  level,
  levelXp,
  progress,
  lootboxes,
  profile,
}) {
  const { t } = useI18n();
  const bgColor = profile?.bgColor ?? '#F1F1F1';
  const avatarUrl = profile?.avatarUrl;

  return (
    <section
      className="profile-hero"
      style={{ '--profile-accent': bgColor }}
      aria-label={t(KEYS.profile.summaryAria)}
    >
      <div className="profile-hero__mesh" aria-hidden="true" />
      <div className="profile-hero__inner">
        <div className="profile-hero__avatar-wrap">
          <div className="profile-hero__avatar-ring">
            <div
              className="profile-hero__avatar"
              style={{ backgroundColor: bgColor }}
            >
              {avatarUrl ? (
                <img
                  className="profile-hero__avatar-img"
                  src={avatarUrl}
                  alt=""
                  width={160}
                  height={160}
                />
              ) : null}
            </div>
          </div>
          <span className="profile-hero__level-badge">
            {t(KEYS.profile.heroBadge, { level })}
          </span>
        </div>

        <div className="profile-hero__content">
          <p className="profile-hero__kicker">{t(KEYS.profile.title)}</p>
          <h1 className="profile-hero__name">{displayName}</h1>
          {email ? <p className="profile-hero__email">{email}</p> : null}

          <div className="profile-hero__chips">
            <span className="profile-hero__chip">
              {t(KEYS.profile.heroXpChip, { current: levelXp, max: XP_PER_LEVEL })}
            </span>
            <span className="profile-hero__chip profile-hero__chip--loot">
              {t(KEYS.profile.heroLootboxes, { count: lootboxes })}
            </span>
          </div>

          <div className="profile-hero__progress">
            <div className="profile-hero__progress-head">
              <span>{t(KEYS.profile.progressTitle)}</span>
              <span>{Math.round(progress * 100)}%</span>
            </div>
            <ProgressBar progress={progress} size="md" />
            <p className="profile-hero__next">
              {t(KEYS.profile.nextGoal, {
                xp: XP_PER_LEVEL - levelXp,
                level: level + 1,
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
