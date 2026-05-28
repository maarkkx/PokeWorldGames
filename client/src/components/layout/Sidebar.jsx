import { NavLink } from 'react-router-dom';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { NAV_ITEMS } from '../../config/nav.js';
import './Sidebar.css';

export default function Sidebar({ activeItem = 'home' }) {
  const { t } = useI18n();

  return (
    <aside className="sidebar">
      <nav className="sidebar__nav" aria-label={t(KEYS.nav.mainAria)}>
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === activeItem;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === '/'}
              className={`sidebar__item ${isActive ? 'sidebar__item--active' : ''}`.trim()}
              aria-current={isActive ? 'page' : undefined}
            >
              <img src={item.icon} alt="" className="sidebar__icon" />
              <span>{t(item.labelKey)}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
