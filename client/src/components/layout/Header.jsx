import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { ROUTES } from '../../config/nav.js';
import { getLevelProgress } from '../../utils/xp.js';
import BrandLogo from '../ui/BrandLogo.jsx';
import ProgressBar from '../ui/ProgressBar.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import HeaderUserSearch from './HeaderUserSearch.jsx';
import './Header.css';

export default function Header() {
  const { user, logout } = useAuth();
  const { t } = useI18n();
  const { progress } = getLevelProgress(user?.xp ?? 0);
  const displayName = user?.name ?? t(KEYS.common.userFallback);
  const level = user?.level ?? 1;

  return (
    <header className="app-header">
      <div className="app-header__inner">
        <BrandLogo variant="header" to={ROUTES.home} className="app-header__brand" />

        <HeaderUserSearch />

        <div className="app-header__end">
          <LanguageSwitcher />

          <div className="app-header__trainer">
            <Link
              to={ROUTES.profile}
              className="app-header__trainer-link"
              aria-label={t(KEYS.nav.profile)}
            >
              <div className="app-header__trainer-main">
                <div className="app-header__trainer-row">
                  <span className="app-header__name">{displayName}</span>
                  <span className="app-header__level">{t(KEYS.header.level, { level })}</span>
                </div>
                <ProgressBar progress={progress} size="sm" className="app-header__progress" />
              </div>
            </Link>

            <button type="button" className="app-header__logout" onClick={logout}>
              {t(KEYS.common.logout)}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
