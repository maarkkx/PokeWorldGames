import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { LOCALE_EN, LOCALE_ES } from '../../i18n/locales.js';
import './Footer.css';

export default function Footer() {
  const { t, locale } = useI18n();
  const comingSoon = t(KEYS.common.comingSoon);
  const currentLanguage =
    locale === LOCALE_ES ? t(KEYS.common.languageEs) : t(KEYS.common.languageEn);

  return (
    <footer className="app-footer">
      <div className="app-footer__top">
        <div className="app-footer__brand">
          <p className="app-footer__title">{t(KEYS.common.brand)}</p>
          <p className="app-footer__tagline">{t(KEYS.footer.tagline)}</p>

          <div className="app-footer__social" aria-label={t(KEYS.footer.socialAria)}>
            <button type="button" className="app-footer__social-btn" disabled title={comingSoon}>
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none">
                <path
                  d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 6v6l4 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button type="button" className="app-footer__social-btn" disabled title={comingSoon}>
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none">
                <path
                  d="M4 6h16v12H4z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="m4 7 8 6 8-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button type="button" className="app-footer__social-btn" disabled title={comingSoon}>
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="none">
                <path
                  d="M15 8a3 3 0 1 0-6 0c0 3.5 6 4 6 8a3 3 0 1 1-6 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="app-footer__cols" aria-label={t(KEYS.footer.quickLinks)}>
          <div className="app-footer__col">
            <p className="app-footer__col-title">{t(KEYS.footer.quickLinks)}</p>
            <button type="button" className="app-footer__link" disabled title={comingSoon}>
              {t(KEYS.footer.dashboard)}
            </button>
            <button type="button" className="app-footer__link" disabled title={comingSoon}>
              {t(KEYS.footer.gameModes)}
            </button>
            <button type="button" className="app-footer__link" disabled title={comingSoon}>
              {t(KEYS.footer.marketplace)}
            </button>
            <button type="button" className="app-footer__link" disabled title={comingSoon}>
              {t(KEYS.footer.globalRankings)}
            </button>
          </div>

          <div className="app-footer__col">
            <p className="app-footer__col-title">{t(KEYS.footer.support)}</p>
            <button type="button" className="app-footer__link" disabled title={comingSoon}>
              {t(KEYS.footer.helpCenter)}
            </button>
            <button type="button" className="app-footer__link" disabled title={comingSoon}>
              {t(KEYS.footer.gameRules)}
            </button>
            <button type="button" className="app-footer__link" disabled title={comingSoon}>
              {t(KEYS.footer.tradeSafety)}
            </button>
            <button type="button" className="app-footer__link" disabled title={comingSoon}>
              {t(KEYS.footer.bugReport)}
            </button>
          </div>

          <div className="app-footer__col">
            <p className="app-footer__col-title">{t(KEYS.footer.legal)}</p>
            <button type="button" className="app-footer__link" disabled title={comingSoon}>
              {t(KEYS.footer.privacyPolicy)}
            </button>
            <button type="button" className="app-footer__link" disabled title={comingSoon}>
              {t(KEYS.footer.termsOfService)}
            </button>
            <button type="button" className="app-footer__link" disabled title={comingSoon}>
              {t(KEYS.footer.cookiePolicy)}
            </button>
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
