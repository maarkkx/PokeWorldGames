import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nProvider } from './context/I18nContext.jsx';
import App from './App.jsx';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>,
);
