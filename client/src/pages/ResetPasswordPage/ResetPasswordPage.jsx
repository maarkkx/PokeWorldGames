import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { resetPasswordWithToken } from '../../api/auth.js';
import { ROUTES } from '../../config/nav.js';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { mapAuthErrorMessage } from '../../utils/authErrors.js';
import { validateResetPasswordForm } from '../../utils/validation.js';
import LanguageSwitcher from '../../components/layout/LanguageSwitcher.jsx';
import BrandLogo from '../../components/ui/BrandLogo.jsx';
import Button from '../../components/ui/Button.jsx';
import TextField from '../../components/ui/TextField.jsx';
import '../AuthPage.css';

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? '';
  const { t } = useI18n();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const tokenMissing = !token;
  const displayError = error || (tokenMissing ? t(KEYS.auth.resetTokenMissing) : '');

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    const validationErrorKey = validateResetPasswordForm({ newPassword, confirmPassword });
    if (validationErrorKey) {
      setError(t(validationErrorKey));
      return;
    }

    setSubmitting(true);

    try {
      await resetPasswordWithToken(token, newPassword);
      navigate(ROUTES.login, { state: { messageKey: KEYS.auth.resetPasswordSuccess } });
    } catch (submitError) {
      setError(
        mapAuthErrorMessage(submitError, t, KEYS) ?? t(KEYS.auth.resetPasswordFailed),
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-page__lang">
        <LanguageSwitcher variant="auth" />
      </div>

      <div className="auth-page__card">
        <div className="auth-page__brand">
          <BrandLogo variant="auth" />
          <p className="auth-page__subtitle">{t(KEYS.auth.resetPasswordSubtitle)}</p>
        </div>

        <form className="auth-page__form" onSubmit={handleSubmit}>
          <TextField
            id="reset-password-new"
            label={t(KEYS.auth.password)}
            type="password"
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            placeholder={t(KEYS.auth.passwordPlaceholder)}
            autoComplete="new-password"
            required
            disabled={tokenMissing}
          />
          <TextField
            id="reset-password-confirm"
            label={t(KEYS.auth.confirmPassword)}
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder={t(KEYS.auth.passwordPlaceholder)}
            autoComplete="new-password"
            required
            disabled={tokenMissing}
          />

          {displayError ? <p className="auth-page__error">{displayError}</p> : null}

          <Button type="submit" className="auth-page__submit" disabled={submitting || tokenMissing}>
            {submitting ? t(KEYS.auth.resettingPassword) : t(KEYS.auth.resetPassword)}
          </Button>
        </form>

        <p className="auth-page__switch">
          <Link to={ROUTES.login}>{t(KEYS.auth.backToSignIn)}</Link>
        </p>
      </div>
    </div>
  );
}
