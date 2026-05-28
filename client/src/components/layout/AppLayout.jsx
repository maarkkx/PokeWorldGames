import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import './AppLayout.css';

export default function AppLayout({ children, activeNav = 'home' }) {
  return (
    <div className="app-layout">
      <Header />
      <div className="app-layout__body">
        <Sidebar activeItem={activeNav} />
        <div className="app-layout__main">
          <main className="app-layout__content">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
