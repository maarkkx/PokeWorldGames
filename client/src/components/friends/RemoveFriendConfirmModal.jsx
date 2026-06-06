import ProfileModal from '../profile/ProfileModal.jsx';
import Button from '../ui/Button.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import './RemoveFriendConfirmModal.css';

export default function RemoveFriendConfirmModal({
  friendName,
  onConfirm,
  onCancel,
  isConfirming = false,
}) {
  const { t } = useI18n();

  return (
    <ProfileModal
      title={t(KEYS.friends.removeConfirmTitle)}
      closeLabel={t(KEYS.friends.removeConfirmCancel)}
      onClose={onCancel}
      footer={
        <>
          <Button type="button" variant="compact-secondary" onClick={onCancel} disabled={isConfirming}>
            {t(KEYS.friends.removeConfirmCancel)}
          </Button>
          <Button type="button" variant="compact" onClick={onConfirm} disabled={isConfirming}>
            {isConfirming ? t(KEYS.friends.removing) : t(KEYS.friends.removeConfirmAction)}
          </Button>
        </>
      }
    >
      <p className="remove-friend-confirm__message">
        {t(KEYS.friends.removeConfirmMessage, { name: friendName })}
      </p>
    </ProfileModal>
  );
}
