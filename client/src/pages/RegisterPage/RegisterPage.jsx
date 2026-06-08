import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../api/auth.js';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import GoogleSignInButton from '../../components/auth/GoogleSignInButton.jsx';
import { KEYS } from '../../i18n/keys.js';
import { mapAuthErrorMessage } from '../../utils/authErrors.js';
import { validateRegisterForm } from '../../utils/validation.js';
import LanguageSwitcher from '../../components/layout/LanguageSwitcher.jsx';
import BrandLogo from '../../components/ui/BrandLogo.jsx';
import Button from '../../components/ui/Button.jsx';
import TextField from '../../components/ui/TextField.jsx';
import '../AuthPage.css';

export default function RegisterPage() {
  const navigate = useNavigate();
  const { googleRedirectError, clearGoogleRedirectError } = useAuth();
  const { t } = useI18n();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!googleRedirectError) {
      return;
    }

    setError(mapAuthErrorMessage(googleRedirectError, t, KEYS));
    clearGoogleRedirectError();
  }, [googleRedirectError, clearGoogleRedirectError, t]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    const validationErrorKey = validateRegisterForm({ name, email, password, confirmPassword });
    if (validationErrorKey) {
      setError(t(validationErrorKey));
      return;
    }

    setSubmitting(true);

    try {
      await register({ name, email, password, confirmPassword });
      navigate('/login', { state: { messageKey: KEYS.auth.registerSuccess } });
    } catch (submitError) {
      setError(submitError.message ?? t(KEYS.auth.registerFailed));
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
          <p className="auth-page__subtitle">{t(KEYS.auth.registerSubtitle)}</p>
        </div>

        <form className="auth-page__form" onSubmit={handleSubmit}>
          <TextField
            id="register-name"
            label={t(KEYS.auth.username)}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t(KEYS.auth.usernamePlaceholder)}
            autoComplete="username"
            required
          />
          <TextField
            id="register-email"
            label={t(KEYS.auth.email)}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={t(KEYS.auth.emailPlaceholder)}
            autoComplete="email"
            required
          />
          <TextField
            id="register-password"
            label={t(KEYS.auth.password)}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder={t(KEYS.auth.passwordPlaceholder)}
            autoComplete="new-password"
            required
          />
          <TextField
            id="register-confirm-password"
            label={t(KEYS.auth.confirmPassword)}
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            placeholder={t(KEYS.auth.passwordPlaceholder)}
            autoComplete="new-password"
            required
          />

          {error ? <p className="auth-page__error">{error}</p> : null}

          <Button type="submit" className="auth-page__submit" disabled={submitting}>
            {submitting ? t(KEYS.auth.creatingAccount) : t(KEYS.auth.signUp)}
          </Button>
        </form>

        <div className="auth-page__divider" role="presentation">
          <span>{t(KEYS.auth.orContinueWith)}</span>
        </div>

        <GoogleSignInButton
          disabled={submitting}
          onSuccess={() => navigate('/')}
          onError={(message) => setError(message)}
        />

        <p className="auth-page__switch">
          {t(KEYS.auth.hasAccount)}{' '}
          <Link to="/login">{t(KEYS.auth.signInLink)}</Link>
        </p>
      </div>
    </div>
  );
}
