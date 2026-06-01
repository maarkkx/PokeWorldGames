import { useEffect, useId, useRef, useState } from 'react';
import { searchTradeUsers } from '../../api/trade.js';
import Button from '../ui/Button.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { regexUser } from '../../utils/validation.js';
import './TradeUserSearch.css';

const MIN_QUERY_LENGTH = 2;
const SEARCH_DEBOUNCE_MS = 300;

export default function TradeUserSearch({
  value,
  onChange,
  onSubmit,
  disabled = false,
  error = '',
  currentUsername = '',
}) {
  const { t } = useI18n();
  const listId = useId();
  const wrapperRef = useRef(null);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const trimmed = value.trim();

    if (trimmed.length < MIN_QUERY_LENGTH) {
      setSuggestions([]);
      setIsLoadingSuggestions(false);
      return undefined;
    }

    let cancelled = false;
    const timeoutId = window.setTimeout(async () => {
      setIsLoadingSuggestions(true);

      try {
        const users = await searchTradeUsers(trimmed);
        if (!cancelled) {
          const filtered = users.filter(
            (name) => name.toLowerCase() !== currentUsername?.toLowerCase(),
          );
          setSuggestions(filtered);
          setIsOpen(true);
        }
      } catch {
        if (!cancelled) {
          setSuggestions([]);
        }
      } finally {
        if (!cancelled) {
          setIsLoadingSuggestions(false);
        }
      }
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [value, currentUsername]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!wrapperRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  function handleSelectSuggestion(name) {
    onChange(name);
    setSuggestions([]);
    setIsOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsOpen(false);
    onSubmit(event);
  }

  const showSuggestions = isOpen && suggestions.length > 0 && !disabled;

  return (
    <form className="trade-user-search" onSubmit={handleSubmit} ref={wrapperRef}>
      <div className="trade-user-search__field">
        <label className="trade-user-search__label" htmlFor="trade-target-user">
          {t(KEYS.trade.targetUserLabel)}
        </label>
        <input
          id="trade-target-user"
          className="trade-user-search__input"
          type="text"
          value={value}
          onChange={(event) => {
            onChange(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => {
            if (suggestions.length > 0) {
              setIsOpen(true);
            }
          }}
          placeholder={t(KEYS.trade.targetUserPlaceholder)}
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls={showSuggestions ? listId : undefined}
          aria-expanded={showSuggestions}
          disabled={disabled}
          required
        />

        {isLoadingSuggestions ? (
          <span className="trade-user-search__hint" role="status">
            {t(KEYS.trade.searchingSuggestions)}
          </span>
        ) : null}

        {showSuggestions ? (
          <ul
            id={listId}
            className="trade-user-search__suggestions"
            role="listbox"
            aria-label={t(KEYS.trade.userSuggestionsAria)}
          >
            {suggestions.map((name) => (
              <li key={name} role="option">
                <button
                  type="button"
                  className="trade-user-search__suggestion"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => handleSelectSuggestion(name)}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <Button
        type="submit"
        variant="primary-sm"
        className="trade-user-search__submit"
        disabled={disabled || !regexUser.test(value.trim())}
      >
        {disabled ? t(KEYS.trade.searchingUser) : t(KEYS.trade.searchUser)}
      </Button>

      {error ? (
        <p className="trade-user-search__error" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
