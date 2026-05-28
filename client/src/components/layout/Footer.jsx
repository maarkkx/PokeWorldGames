import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { LOCALE_EN, LOCALE_ES } from '../../i18n/locales.js';
import './Footer.css';

function FooterLinkItem({ children }) {
  return <span className="app-footer__link">{children}</span>;
}

export default function Footer() {
  const { t, locale } = useI18n();
  const currentLanguage =
    locale === LOCALE_ES ? t(KEYS.common.languageEs) : t(KEYS.common.languageEn);

  return (
    <footer className="app-footer">
      <div className="app-footer__top">
        <div className="app-footer__brand">
          <p className="app-footer__title">{t(KEYS.common.brand)}</p>
          <p className="app-footer__tagline">{t(KEYS.footer.tagline)}</p>
        </div>

        <div className="app-footer__cols" aria-label={t(KEYS.footer.quickLinks)}>
          <div className="app-footer__col">
            <p className="app-footer__col-title">{t(KEYS.footer.quickLinks)}</p>
            <FooterLinkItem>{t(KEYS.footer.dashboard)}</FooterLinkItem>
            <FooterLinkItem>{t(KEYS.footer.gameModes)}</FooterLinkItem>
            <FooterLinkItem>{t(KEYS.footer.marketplace)}</FooterLinkItem>
            <FooterLinkItem>{t(KEYS.footer.globalRankings)}</FooterLinkItem>
          </div>

          <div className="app-footer__col">
            <p className="app-footer__col-title">{t(KEYS.footer.support)}</p>
            <FooterLinkItem>{t(KEYS.footer.helpCenter)}</FooterLinkItem>
            <FooterLinkItem>{t(KEYS.footer.gameRules)}</FooterLinkItem>
            <FooterLinkItem>{t(KEYS.footer.tradeSafety)}</FooterLinkItem>
            <FooterLinkItem>{t(KEYS.footer.bugReport)}</FooterLinkItem>
          </div>

          <div className="app-footer__col">
            <p className="app-footer__col-title">{t(KEYS.footer.legal)}</p>
            <FooterLinkItem>{t(KEYS.footer.privacyPolicy)}</FooterLinkItem>
            <FooterLinkItem>{t(KEYS.footer.termsOfService)}</FooterLinkItem>
            <FooterLinkItem>{t(KEYS.footer.cookiePolicy)}</FooterLinkItem>
          </div>
        </div>
      </div>

      <div className="app-footer__bottom" aria-label={t(KEYS.footer.statusAria)}>
        <p className="app-footer__copyright">{t(KEYS.footer.copyright)}</p>
        <div className="app-footer__bottom-right">
          <span className="app-footer__lang">
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none">
              <path
                d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M2 12h20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 2c3 3 3 17 0 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 2c-3 3-3 17 0 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            {currentLanguage}
          </span>
        </div>
      </div>
    </footer>
  );
}
