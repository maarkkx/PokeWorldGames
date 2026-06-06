import { useState } from 'react';
import { ApiError } from '../../api/client.js';
import {
  acceptFriendRequest,
  rejectFriendRequest,
  removeFriend,
  sendFriendRequest,
} from '../../api/friends.js';
import Button from '../ui/Button.jsx';
import FriendRequestIconActions from './FriendRequestIconActions.jsx';
import RemoveFriendConfirmModal from './RemoveFriendConfirmModal.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import './TrainerFriendActions.css';

export default function TrainerFriendActions({
  targetUserName,
  friendship,
  onUpdated,
  compact = false,
}) {
  const { t } = useI18n();
  const { token, logout } = useAuth();
  const [isWorking, setIsWorking] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);

  const status = friendship?.status ?? 'none';

  if (status === 'self') {
    return null;
  }

  async function runAction(action) {
    setIsWorking(true);
    setError('');
    setMessage('');

    try {
      const result = await action();
      if (result?.autoAccepted) {
        setMessage(t(KEYS.trainerProfile.friendAutoAccepted));
      } else {
        setMessage(t(KEYS.trainerProfile.friendSuccess));
      }
      await onUpdated();
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        logout();
        return;
      }
      setError(err?.message ?? t(KEYS.trainerProfile.friendError));
    } finally {
      setIsWorking(false);
    }
  }

  function handleSend() {
    return runAction(() => sendFriendRequest(token, targetUserName));
  }

  function handleAccept() {
    return runAction(() =>
      acceptFriendRequest(token, {
        requestId: friendship.requestId,
        fromUserName: targetUserName,
      }),
    );
  }

  function handleReject() {
    return runAction(() => rejectFriendRequest(token, friendship.requestId));
  }

  function handleRemove() {
    return runAction(() =>
      removeFriend(token, {
        requestId: friendship.requestId,
        friendUserName: targetUserName,
      }),
    );
  }

  const btnVariant = compact ? 'compact' : 'primary';
  const btnSecondary = compact ? 'compact-secondary' : 'secondary';

  return (
    <>
      {showRemoveConfirm ? (
        <RemoveFriendConfirmModal
          friendName={targetUserName}
          isConfirming={isWorking}
          onCancel={() => !isWorking && setShowRemoveConfirm(false)}
          onConfirm={() => {
            setShowRemoveConfirm(false);
            handleRemove();
          }}
        />
      ) : null}

      <div
        className={`trainer-friend-actions${compact ? ' trainer-friend-actions--compact' : ''}`}
        aria-label={t(KEYS.trainerProfile.friendActionsAria)}
      >
      {status === 'none' ? (
        <Button type="button" variant={btnVariant} onClick={handleSend} disabled={isWorking}>
          {isWorking ? t(KEYS.trainerProfile.working) : t(KEYS.trainerProfile.addFriend)}
        </Button>
      ) : null}

      {status === 'pending_sent' ? (
        <Button type="button" variant={btnSecondary} disabled>
          {t(KEYS.trainerProfile.requestSent)}
        </Button>
      ) : null}

      {status === 'pending_received' ? (
        <FriendRequestIconActions
          disabled={isWorking}
          onAccept={handleAccept}
          onReject={handleReject}
          acceptLabelKey={KEYS.trainerProfile.acceptFriend}
          rejectLabelKey={KEYS.trainerProfile.rejectFriend}
        />
      ) : null}

      {status === 'friends' ? (
        <div className="trainer-friend-actions__row trainer-friend-actions__row--stacked">
          <span className="trainer-friend-actions__badge">{t(KEYS.trainerProfile.alreadyFriends)}</span>
          <Button
            type="button"
            variant={btnSecondary}
            onClick={() => setShowRemoveConfirm(true)}
            disabled={isWorking}
          >
            {isWorking ? t(KEYS.trainerProfile.working) : t(KEYS.trainerProfile.removeFriend)}
          </Button>
        </div>
      ) : null}

      {message ? (
        <p className="trainer-friend-actions__flash trainer-friend-actions__flash--ok" role="status">
          {message}
        </p>
      ) : null}

      {error ? (
        <p className="trainer-friend-actions__flash trainer-friend-actions__flash--error" role="alert">
          {error}
        </p>
      ) : null}
      </div>
    </>
  );
}
