import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/nav.js';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import './FriendTile.css';

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 7L17 17M17 7L7 17"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FriendTile({ user, onRemove, isRemoving = false }) {
  const { t } = useI18n();
  const profile = user?.profile;
  const bgColor = profile?.bgColor ?? '#f1f1f1';
  const avatarUrl = profile?.avatarUrl;

  return (
    <article className="friend-tile">
      <Link
        className="friend-tile__link"
        to={ROUTES.trainerProfile(user.name)}
        aria-label={t(KEYS.friends.viewProfile, { name: user.name })}
      >
        <div
          className="friend-tile__avatar"
          style={{ backgroundColor: bgColor }}
        >
          {avatarUrl ? <img src={avatarUrl} alt="" /> : null}
        </div>
        <p className="friend-tile__name">{user.name}</p>
        <p className="friend-tile__level">{t(KEYS.header.level, { level: user.level })}</p>
      </Link>

      {onRemove ? (
        <button
          type="button"
          className="friend-tile__remove"
          onClick={onRemove}
          disabled={isRemoving}
          aria-label={t(KEYS.friends.remove)}
        >
          <IconClose />
        </button>
      ) : null}
    </article>
  );
}
