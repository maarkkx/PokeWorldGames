import { NavLink } from 'react-router-dom';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { NAV_ITEMS } from '../../config/nav.js';
import './Sidebar.css';

export default function Sidebar({ activeItem = 'home', collapsed = false, onToggleCollapse }) {
  const { t } = useI18n();
  const toggleLabel = collapsed ? t(KEYS.nav.expandSidebar) : t(KEYS.nav.collapseSidebar);

  return (
    <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`.trim()}>
      <button
        type="button"
        className="sidebar__toggle"
        onClick={onToggleCollapse}
        aria-label={toggleLabel}
        aria-expanded={!collapsed}
      >
        <svg
          className="sidebar__toggle-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="none"
        >
          <path
            d="M15 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <nav className="sidebar__nav" aria-label={t(KEYS.nav.mainAria)}>
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === activeItem;
          const label = t(item.labelKey);

          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === '/'}
              className={`sidebar__item ${isActive ? 'sidebar__item--active' : ''}`.trim()}
              aria-current={isActive ? 'page' : undefined}
              title={collapsed ? label : undefined}
            >
              <img src={item.icon} alt="" className="sidebar__icon" />
              <span className="sidebar__label">{label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
