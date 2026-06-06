import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiError } from '../../api/client.js';
import {
  acceptFriendRequest,
  fetchFriendRequests,
  fetchFriends,
  rejectFriendRequest,
  removeFriend,
} from '../../api/friends.js';
import FriendCard from '../../components/friends/FriendCard.jsx';
import FriendRequestIconActions from '../../components/friends/FriendRequestIconActions.jsx';
import FriendTile from '../../components/friends/FriendTile.jsx';
import RemoveFriendConfirmModal from '../../components/friends/RemoveFriendConfirmModal.jsx';
import AppLayout from '../../components/layout/AppLayout.jsx';
import SegmentedControl from '../../components/ui/SegmentedControl.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { ROUTES } from '../../config/nav.js';
import { KEYS } from '../../i18n/keys.js';
import './FriendsPage.css';

const SECTIONS = {
  FRIENDS: 'friends',
  REQUESTS: 'requests',
};

export default function FriendsPage() {
  const { t } = useI18n();
  const { token, logout } = useAuth();
  const [section, setSection] = useState(SECTIONS.FRIENDS);
  const [friends, setFriends] = useState([]);
  const [requests, setRequests] = useState({ received: [], sent: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [workingId, setWorkingId] = useState(null);
  const [removeConfirm, setRemoveConfirm] = useState(null);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    setError('');

    try {
      const [friendsList, requestsList] = await Promise.all([
        fetchFriends(token),
        fetchFriendRequests(token),
      ]);
      setFriends(friendsList);
      setRequests(requestsList);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        logout();
        return;
      }
      setError(err?.message ?? t(KEYS.friends.loadError));
    } finally {
      setIsLoading(false);
    }
  }, [logout, t, token]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  async function runRequestAction(requestId, action) {
    setWorkingId(requestId);
    setError('');
    setSuccess('');

    try {
      await action();
      setSuccess(t(KEYS.friends.actionSuccess));
      await loadData();
      return true;
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        logout();
        return false;
      }
      setError(err?.message ?? t(KEYS.friends.loadError));
      return false;
    } finally {
      setWorkingId(null);
    }
  }

  async function confirmRemoveFriend() {
    if (!removeConfirm) {
      return;
    }

    const { friendshipId } = removeConfirm;
    const ok = await runRequestAction(friendshipId, () =>
      removeFriend(token, { requestId: friendshipId }),
    );

    if (ok) {
      setRemoveConfirm(null);
    }
  }

  return (
    <AppLayout activeNav="friends">
      {removeConfirm ? (
        <RemoveFriendConfirmModal
          friendName={removeConfirm.name}
          isConfirming={workingId === removeConfirm.friendshipId}
          onCancel={() => !workingId && setRemoveConfirm(null)}
          onConfirm={confirmRemoveFriend}
        />
      ) : null}

      <div className="friends-page">
        <p className="friends-page__label">{t(KEYS.friends.pageLabel)}</p>

        <header className="friends-intro">
          <div className="friends-intro__copy">
            <p className="friends-intro__kicker">{t(KEYS.friends.kicker)}</p>
            <h1 className="friends-intro__title">{t(KEYS.friends.title)}</h1>
            <p className="friends-intro__subtitle">{t(KEYS.friends.subtitle)}</p>
          </div>
          <nav className="friends-intro__nav" aria-label={t(KEYS.friends.navAria)}>
            <Link className="friends-intro__link" to={ROUTES.home}>
              {t(KEYS.friends.backToHome)}
            </Link>
          </nav>
        </header>

        <div className="friends-page__tabs-wrap">
          <SegmentedControl
            ariaLabel={t(KEYS.friends.sectionAria)}
            value={section}
            onChange={setSection}
            options={[
              { value: SECTIONS.FRIENDS, label: t(KEYS.friends.tabFriends) },
              { value: SECTIONS.REQUESTS, label: t(KEYS.friends.tabRequests) },
            ]}
          />
        </div>

        {error ? (
          <p className="friends-page__banner friends-page__banner--error" role="alert">
            {error}{' '}
            <button type="button" className="friends-page__retry" onClick={loadData}>
              {t(KEYS.friends.retry)}
            </button>
          </p>
        ) : null}

        {success ? (
          <p className="friends-page__banner friends-page__banner--ok" role="status">
            {success}
          </p>
        ) : null}

        {isLoading ? (
          <p className="friends-page__status">{t(KEYS.common.loading)}</p>
        ) : null}

        {!isLoading && section === SECTIONS.FRIENDS ? (
          <div className="friends-page__panel">
            {friends.length === 0 && !error ? (
              <p className="friends-page__empty">{t(KEYS.friends.listEmpty)}</p>
            ) : friends.length > 0 ? (
              <ul className="friends-page__grid">
                {friends.map((entry) => (
                  <li key={entry.friendshipId} className="friends-page__grid-item">
                    <FriendTile
                      user={entry.user}
                      isRemoving={workingId === entry.friendshipId}
                      onRemove={() =>
                        setRemoveConfirm({
                          friendshipId: entry.friendshipId,
                          name: entry.user.name,
                        })
                      }
                    />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}

        {!isLoading && section === SECTIONS.REQUESTS ? (
          <div className="friends-page__requests">
            <section className="friends-page__request-block friends-page__request-block--received">
              <h2 className="friends-page__request-title">{t(KEYS.friends.receivedTitle)}</h2>
              {requests.received.length === 0 ? (
                <p className="friends-page__empty">{t(KEYS.friends.receivedEmpty)}</p>
              ) : (
                <ul className="friends-page__list">
                  {requests.received.map((entry) => (
                    <li key={entry.friendshipId}>
                      <FriendCard
                        user={entry.user}
                        actions={
                          <FriendRequestIconActions
                            disabled={workingId === entry.friendshipId}
                            onAccept={() =>
                              runRequestAction(entry.friendshipId, () =>
                                acceptFriendRequest(token, {
                                  requestId: entry.friendshipId,
                                }),
                              )
                            }
                            onReject={() =>
                              runRequestAction(entry.friendshipId, () =>
                                rejectFriendRequest(token, entry.friendshipId),
                              )
                            }
                          />
                        }
                      />
                    </li>
                  ))}
                </ul>
              )}
            </section>

            <section className="friends-page__request-block friends-page__request-block--sent">
              <h2 className="friends-page__request-title">{t(KEYS.friends.sentTitle)}</h2>
              {requests.sent.length === 0 ? (
                <p className="friends-page__empty">{t(KEYS.friends.sentEmpty)}</p>
              ) : (
                <ul className="friends-page__list">
                  {requests.sent.map((entry) => (
                    <li key={entry.friendshipId}>
                      <FriendCard
                        user={entry.user}
                        actions={
                          <span className="friends-page__pending">{t(KEYS.friends.pendingSent)}</span>
                        }
                      />
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        ) : null}
      </div>
    </AppLayout>
  );
}
