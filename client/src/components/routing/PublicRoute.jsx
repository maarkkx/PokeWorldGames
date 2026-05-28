import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';

export default function PublicRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const { t, loading: i18nLoading } = useI18n();

  if (loading || i18nLoading) {
    return <div className="route-loading">{t(KEYS.common.loading)}</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
