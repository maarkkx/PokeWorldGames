import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '../i18n/locales.js';

const LOCALE_KEY = 'pwg-locale';

export function readLocale() {
  try {
    const stored = localStorage.getItem(LOCALE_KEY);
    if (stored && SUPPORTED_LOCALES.includes(stored)) {
      return stored;
    }
  } catch {

  }

  const browser = navigator.language?.toLowerCase() ?? '';
  if (browser.startsWith('es')) {
    return 'es-ES';
  }

  return DEFAULT_LOCALE;
}

export function writeLocale(locale) {
  localStorage.setItem(LOCALE_KEY, locale);
}
