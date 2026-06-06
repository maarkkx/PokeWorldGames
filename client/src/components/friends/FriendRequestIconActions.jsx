import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import './FriendRequestIconActions.css';

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12.5L10 17.5L19 7.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

export default function FriendRequestIconActions({
  onAccept,
  onReject,
  disabled = false,
  acceptLabelKey = KEYS.friends.accept,
  rejectLabelKey = KEYS.friends.reject,
}) {
  const { t } = useI18n();

  return (
    <div className="friend-request-icon-actions">
      <button
        type="button"
        className="friend-request-icon-actions__btn friend-request-icon-actions__btn--accept"
        onClick={onAccept}
        disabled={disabled}
        aria-label={t(acceptLabelKey)}
      >
        <IconCheck />
      </button>
      <button
        type="button"
        className="friend-request-icon-actions__btn friend-request-icon-actions__btn--reject"
        onClick={onReject}
        disabled={disabled}
        aria-label={t(rejectLabelKey)}
      >
        <IconClose />
      </button>
    </div>
  );
}
