import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiError } from '../../api/client.js';
import { searchUsers } from '../../api/profile.js';
import { ROUTES } from '../../config/nav.js';
import { useAuth } from '../../context/AuthContext.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import './HeaderUserSearch.css';

const MIN_QUERY_LENGTH = 2;
const SEARCH_DEBOUNCE_MS = 300;

export default function HeaderUserSearch() {
  const { t } = useI18n();
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const listId = useId();
  const inputId = useId();
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [statusMessage, setStatusMessage] = useState('');

  const goToTrainer = useCallback(
    (name) => {
      const trimmed = name?.trim();
      if (!trimmed) {
        return;
      }

      setQuery('');
      setSuggestions([]);
      setIsOpen(false);
      setActiveIndex(-1);
      navigate(ROUTES.trainerProfile(trimmed));
    },
    [navigate],
  );

  useEffect(() => {
    const trimmed = query.trim();

    if (trimmed.length < MIN_QUERY_LENGTH) {
      setSuggestions([]);
      setIsLoading(false);
      setStatusMessage('');
      setActiveIndex(-1);
      return undefined;
    }

    let cancelled = false;
    const timeoutId = window.setTimeout(async () => {
      setIsLoading(true);
      setStatusMessage('');

      try {
        const users = await searchUsers(token, trimmed);
        if (cancelled) {
          return;
        }

        setSuggestions(users);
        setIsOpen(true);
        setActiveIndex(users.length > 0 ? 0 : -1);

        if (users.length === 0) {
          setStatusMessage(t(KEYS.header.search.noResults));
        }
      } catch (err) {
        if (cancelled) {
          return;
        }

        if (err instanceof ApiError && err.status === 401) {
          logout();
          return;
        }

        setSuggestions([]);
        setStatusMessage(t(KEYS.trainerProfile.loadError));
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }, SEARCH_DEBOUNCE_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [query, token, logout, t]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!wrapperRef.current?.contains(event.target)) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  const showList = isOpen && query.trim().length >= MIN_QUERY_LENGTH && !isLoading;
  const hasSuggestions = suggestions.length > 0;

  function handleKeyDown(event) {
    if (!showList) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setActiveIndex(-1);
      }
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!hasSuggestions) {
        return;
      }
      setActiveIndex((current) => (current + 1) % suggestions.length);
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!hasSuggestions) {
        return;
      }
      setActiveIndex((current) =>
        current <= 0 ? suggestions.length - 1 : current - 1,
      );
      return;
    }

    if (event.key === 'Enter') {
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        event.preventDefault();
        goToTrainer(suggestions[activeIndex].name);
      }
      return;
    }

    if (event.key === 'Escape') {
      setIsOpen(false);
      setActiveIndex(-1);
      inputRef.current?.blur();
    }
  }

  return (
    <div className="header-user-search" ref={wrapperRef}>
      <label className="header-user-search__label visually-hidden" htmlFor={inputId}>
        {t(KEYS.header.search.label)}
      </label>
      <div className="header-user-search__field">
        <svg
          className="header-user-search__icon"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path
            d="M16.5 16.5L21 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <input
          ref={inputRef}
          id={inputId}
          className="header-user-search__input"
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setIsOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => {
            if (query.trim().length >= MIN_QUERY_LENGTH) {
              setIsOpen(true);
            }
          }}
          onKeyDown={handleKeyDown}
          placeholder={t(KEYS.header.search.placeholder)}
          autoComplete="off"
          aria-label={t(KEYS.header.search.aria)}
          aria-autocomplete="list"
          aria-controls={showList && hasSuggestions ? listId : undefined}
          aria-expanded={showList && hasSuggestions}
          aria-activedescendant={
            showList && activeIndex >= 0 ? `${listId}-option-${activeIndex}` : undefined
          }
        />

        {isLoading ? (
          <span className="header-user-search__status" role="status">
            {t(KEYS.header.search.searching)}
          </span>
        ) : null}

        {showList && hasSuggestions ? (
          <ul
            id={listId}
            className="header-user-search__suggestions"
            role="listbox"
            aria-label={t(KEYS.header.search.suggestionsAria)}
          >
            {suggestions.map((user, index) => (
              <li
                key={user.id ?? user.name}
                id={`${listId}-option-${index}`}
                role="option"
                aria-selected={index === activeIndex}
              >
                <button
                  type="button"
                  className={`header-user-search__suggestion${
                    index === activeIndex ? ' is-active' : ''
                  }`}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => goToTrainer(user.name)}
                >
                  {user.name}
                </button>
              </li>
            ))}
          </ul>
        ) : null}

        {showList && !isLoading && !hasSuggestions && statusMessage ? (
          <p className="header-user-search__empty" role="status">
            {statusMessage}
          </p>
        ) : null}
      </div>
    </div>
  );
}
