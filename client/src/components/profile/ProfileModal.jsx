import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ProfileModal.css';

export default function ProfileModal({ title, onClose, children, footer, closeLabel = 'Close' }) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className="profile-modal" role="presentation" onMouseDown={onClose}>
      <div
        className="profile-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="profile-modal__head">
          <h2 id="profile-modal-title" className="profile-modal__title">
            {title}
          </h2>
          <button
            type="button"
            className="profile-modal__close"
            onClick={onClose}
            aria-label={closeLabel}
          >
            ×
          </button>
        </header>
        <div className="profile-modal__body">{children}</div>
        {footer ? <footer className="profile-modal__foot">{footer}</footer> : null}
      </div>
    </div>,
    document.body,
  );
}
