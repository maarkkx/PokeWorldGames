import { useState } from 'react';
import { readSidebarCollapsed, writeSidebarCollapsed } from '../../utils/sidebarStorage.js';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import './AppLayout.css';

export default function AppLayout({ children, activeNav = 'home' }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => readSidebarCollapsed());

  function toggleSidebar() {
    setSidebarCollapsed((prev) => {
      const next = !prev;
      writeSidebarCollapsed(next);
      return next;
    });
  }

  return (
    <div
      className={`app-layout ${sidebarCollapsed ? 'app-layout--sidebar-collapsed' : ''}`.trim()}
    >
      <Header />
      <div className="app-layout__body">
        <Sidebar
          activeItem={activeNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={toggleSidebar}
        />
        <div className="app-layout__main">
          <main className="app-layout__content">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
