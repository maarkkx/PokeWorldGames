import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { LOCALE_EN, LOCALE_ES } from '../../i18n/locales.js';
import './LanguageSwitcher.css';

export default function LanguageSwitcher({ variant = 'header' }) {
  const { locale, setLanguage, t } = useI18n();

  return (
    <div
      className={`lang-switcher lang-switcher--${variant}`}
      role="group"
      aria-label={t(KEYS.common.switchLanguage)}
    >
      <button
        type="button"
        className={`lang-switcher__btn ${locale === LOCALE_ES ? 'lang-switcher__btn--active' : ''}`}
        onClick={() => setLanguage(LOCALE_ES)}
        aria-pressed={locale === LOCALE_ES}
      >
        {t(KEYS.common.languageEs)}
      </button>
      <button
        type="button"
        className={`lang-switcher__btn ${locale === LOCALE_EN ? 'lang-switcher__btn--active' : ''}`}
        onClick={() => setLanguage(LOCALE_EN)}
        aria-pressed={locale === LOCALE_EN}
      >
        {t(KEYS.common.languageEn)}
      </button>
    </div>
  );
}
