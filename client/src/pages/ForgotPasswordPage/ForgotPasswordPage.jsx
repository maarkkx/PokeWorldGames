import { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgetPassword } from '../../api/auth.js';
import { ROUTES } from '../../config/nav.js';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { mapAuthErrorMessage } from '../../utils/authErrors.js';
import { validateForgotPasswordForm } from '../../utils/validation.js';
import LanguageSwitcher from '../../components/layout/LanguageSwitcher.jsx';
import BrandLogo from '../../components/ui/BrandLogo.jsx';
import Button from '../../components/ui/Button.jsx';
import TextField from '../../components/ui/TextField.jsx';
import '../AuthPage.css';

export default function ForgotPasswordPage() {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSuccess(false);

    const validationErrorKey = validateForgotPasswordForm({ email });
    if (validationErrorKey) {
      setError(t(validationErrorKey));
      return;
    }

    setSubmitting(true);

    try {
      await forgetPassword(email);
      setSuccess(true);
    } catch (submitError) {
      setError(
        mapAuthErrorMessage(submitError, t, KEYS) ?? t(KEYS.auth.forgotPasswordFailed),
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
          <p className="auth-page__subtitle">{t(KEYS.auth.forgotPasswordSubtitle)}</p>
        </div>

        <form className="auth-page__form" onSubmit={handleSubmit}>
          <p className="auth-page__hint">{t(KEYS.auth.forgotPasswordHint)}</p>

          <TextField
            id="forgot-password-email"
            label={t(KEYS.auth.email)}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={t(KEYS.auth.emailPlaceholder)}
            autoComplete="email"
            required
            disabled={success}
          />

          {success ? <p className="auth-page__success">{t(KEYS.auth.resetLinkSent)}</p> : null}
          {error ? <p className="auth-page__error">{error}</p> : null}

          <Button type="submit" className="auth-page__submit" disabled={submitting || success}>
            {submitting ? t(KEYS.auth.sendingResetLink) : t(KEYS.auth.sendResetLink)}
          </Button>
        </form>

        <p className="auth-page__switch">
          <Link to={ROUTES.login}>{t(KEYS.auth.backToSignIn)}</Link>
        </p>
      </div>
    </div>
  );
}
