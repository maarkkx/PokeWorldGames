import { Link } from 'react-router-dom';
import { ROUTES } from '../../config/nav.js';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import './FriendCard.css';

export default function FriendCard({ user, actions }) {
  const { t } = useI18n();
  const profile = user?.profile;
  const bgColor = profile?.bgColor ?? '#f1f1f1';
  const avatarUrl = profile?.avatarUrl;

  return (
    <article className="friend-card">
      <Link
        className="friend-card__main"
        to={ROUTES.trainerProfile(user.name)}
        aria-label={t(KEYS.friends.viewProfile, { name: user.name })}
      >
        <div
          className="friend-card__avatar"
          style={{ backgroundColor: bgColor }}
        >
          {avatarUrl ? <img src={avatarUrl} alt="" /> : null}
        </div>
        <div className="friend-card__info">
          <p className="friend-card__name">{user.name}</p>
          <p className="friend-card__level">{t(KEYS.header.level, { level: user.level })}</p>
        </div>
      </Link>
      {actions ? <div className="friend-card__actions">{actions}</div> : null}
    </article>
  );
}
