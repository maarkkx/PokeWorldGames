import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import GoogleSignInButton from '../../components/auth/GoogleSignInButton.jsx';
import { KEYS } from '../../i18n/keys.js';
import { mapAuthErrorMessage } from '../../utils/authErrors.js';
import { validateLoginForm } from '../../utils/validation.js';
import LanguageSwitcher from '../../components/layout/LanguageSwitcher.jsx';
import BrandLogo from '../../components/ui/BrandLogo.jsx';
import Button from '../../components/ui/Button.jsx';
import TextField from '../../components/ui/TextField.jsx';
import '../AuthPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, googleRedirectError, clearGoogleRedirectError } = useAuth();
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!googleRedirectError) {
      return;
    }

    setError(mapAuthErrorMessage(googleRedirectError, t, KEYS));
    clearGoogleRedirectError();
  }, [googleRedirectError, clearGoogleRedirectError, t]);

  const successMessageKey = location.state?.messageKey;
  const successMessage = successMessageKey ? t(successMessageKey) : null;

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    const validationErrorKey = validateLoginForm({ email, password });
    if (validationErrorKey) {
      setError(t(validationErrorKey));
      return;
    }

    setSubmitting(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (submitError) {
      setError(mapAuthErrorMessage(submitError, t, KEYS) ?? t(KEYS.auth.signInFailed));
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
          <p className="auth-page__subtitle">{t(KEYS.auth.signInSubtitle)}</p>
        </div>

        <form className="auth-page__form" onSubmit={handleSubmit}>
          {successMessage ? <p className="auth-page__success">{successMessage}</p> : null}

          <TextField
            id="login-email"
            label={t(KEYS.auth.email)}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={t(KEYS.auth.emailPlaceholder)}
            autoComplete="email"
            required
          />
          <TextField
            id="login-password"
            label={t(KEYS.auth.password)}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder={t(KEYS.auth.passwordPlaceholder)}
            autoComplete="current-password"
            required
          />

          {error ? <p className="auth-page__error">{error}</p> : null}

          <Button type="submit" className="auth-page__submit" disabled={submitting}>
            {submitting ? t(KEYS.auth.signingIn) : t(KEYS.auth.signIn)}
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
          {t(KEYS.auth.noAccount)}{' '}
          <Link to="/register">{t(KEYS.auth.signUpLink)}</Link>
        </p>
      </div>
    </div>
  );
}
