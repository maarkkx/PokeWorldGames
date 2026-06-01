import { useState } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../../components/layout/AppLayout.jsx';
import TradeList from '../../components/trade/TradeList.jsx';
import TradeWizard from '../../components/trade/TradeWizard.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { ROUTES } from '../../config/nav.js';
import './TradePage.css';

const SECTIONS = {
  LIST: 'list',
  CREATE: 'create',
};

export default function TradePage() {
  const { t } = useI18n();
  const [section, setSection] = useState(SECTIONS.LIST);
  const [wizardKey, setWizardKey] = useState(0);
  const [createSuccess, setCreateSuccess] = useState('');

  function handleTradeCreated() {
    setCreateSuccess(t(KEYS.trade.createSuccess));
    setSection(SECTIONS.LIST);
    setWizardKey((value) => value + 1);
  }

  return (
    <AppLayout activeNav="trade">
      <div className="trade-page">
        <p className="trade-page__label">{t(KEYS.trade.pageLabel)}</p>

        <header className="trade-intro">
          <div className="trade-intro__copy">
            <p className="trade-intro__kicker">{t(KEYS.trade.kicker)}</p>
            <h1 className="trade-intro__title">{t(KEYS.trade.title)}</h1>
            <p className="trade-intro__subtitle">{t(KEYS.trade.subtitle)}</p>
          </div>
          <nav className="trade-intro__nav" aria-label={t(KEYS.trade.navAria)}>
            <Link className="trade-intro__link" to={ROUTES.home}>
              {t(KEYS.trade.backToHome)}
            </Link>
          </nav>
        </header>

        <div className="trade-page__tabs" role="tablist" aria-label={t(KEYS.trade.sectionAria)}>
          <button
            type="button"
            role="tab"
            aria-selected={section === SECTIONS.LIST}
            className={`trade-page__tab${section === SECTIONS.LIST ? ' is-active' : ''}`}
            onClick={() => {
              setSection(SECTIONS.LIST);
              setCreateSuccess('');
            }}
          >
            {t(KEYS.trade.tabList)}
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={section === SECTIONS.CREATE}
            className={`trade-page__tab${section === SECTIONS.CREATE ? ' is-active' : ''}`}
            onClick={() => {
              setSection(SECTIONS.CREATE);
              setCreateSuccess('');
            }}
          >
            {t(KEYS.trade.tabCreate)}
          </button>
        </div>

        {createSuccess && section === SECTIONS.LIST ? (
          <p className="trade-page__success" role="status">
            {createSuccess}
          </p>
        ) : null}

        <div className="trade-page__content">
          {section === SECTIONS.LIST ? (
            <TradeList key={wizardKey} />
          ) : (
            <TradeWizard key={wizardKey} onTradeCreated={handleTradeCreated} />
          )}
        </div>
      </div>
    </AppLayout>
  );
}
