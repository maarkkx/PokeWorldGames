import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { DEFAULT_LOCALE, LOCALE_EN, SUPPORTED_LOCALES } from '../i18n/locales.js';
import { getMessage, interpolate } from '../i18n/translate.js';
import { readLocale, writeLocale } from '../utils/localeStorage.js';

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(() => readLocale());
  const [messages, setMessages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadMessages() {
      setLoading(true);

      try {
        const response = await fetch(`/i18n/${locale}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load locale ${locale}`);
        }

        const data = await response.json();
        if (!cancelled) {
          setMessages(data);
        }
      } catch {
        if (!cancelled && locale !== LOCALE_EN) {
          const fallback = await fetch(`/i18n/${LOCALE_EN}.json`);
          if (fallback.ok && !cancelled) {
            setMessages(await fallback.json());
          }
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadMessages();

    return () => {
      cancelled = true;
    };
  }, [locale]);

  const setLanguage = useCallback((nextLocale) => {
    if (!SUPPORTED_LOCALES.includes(nextLocale)) return;
    writeLocale(nextLocale);
    setLocale(nextLocale);
  }, []);

  const t = useCallback(
    (key, params) => {
      const template = getMessage(messages, key);
      if (template == null) return key;
      return interpolate(template, params);
    },
    [messages],
  );

  const value = useMemo(
    () => ({
      locale,
      loading,
      setLanguage,
      t,
    }),
    [locale, loading, setLanguage, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }

  return context;
}
