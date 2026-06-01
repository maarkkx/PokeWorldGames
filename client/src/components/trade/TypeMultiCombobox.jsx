import { useEffect, useId, useRef, useState } from 'react';
import TypePill from '../ui/TypePill.jsx';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import { formatTypeDisplayName } from '../../utils/pokemon.js';
import {
  POKEMON_TYPES,
  filterTypeList,
  normalizeTypeName,
} from '../../utils/pokemonTypes.js';
import './TypeMultiCombobox.css';

export default function TypeMultiCombobox({
  selectedTypes,
  onChange,
  maxTypes = POKEMON_TYPES.length,
}) {
  const { t } = useI18n();
  const listId = useId();
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredTypes = filterTypeList(POKEMON_TYPES, query).filter(
    (typeName) => !selectedTypes.includes(typeName),
  );

  const atMax = selectedTypes.length >= maxTypes;

  useEffect(() => {
    function handlePointerDown(event) {
      if (!wrapperRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  function addType(typeName) {
    const normalized = normalizeTypeName(typeName);
    if (!normalized || selectedTypes.includes(normalized) || atMax) {
      return;
    }

    onChange([...selectedTypes, normalized]);
    setQuery('');
    inputRef.current?.focus();
  }

  function removeType(typeName) {
    onChange(selectedTypes.filter((value) => value !== typeName));
  }

  function clearAll() {
    onChange([]);
    setQuery('');
  }

  function handleInputKeyDown(event) {
    if (event.key === 'Escape') {
      setIsOpen(false);
      return;
    }

    if (event.key === 'Enter' && filteredTypes.length > 0 && !atMax) {
      event.preventDefault();
      addType(filteredTypes[0]);
    }

    if (event.key === 'Backspace' && !query && selectedTypes.length > 0) {
      removeType(selectedTypes[selectedTypes.length - 1]);
    }
  }

  return (
    <div className="type-multi-combobox" ref={wrapperRef}>
      <span className="type-multi-combobox__label">{t(KEYS.trade.filterType)}</span>

      <div
        className={`type-multi-combobox__control${isOpen ? ' is-open' : ''}`}
        onClick={() => inputRef.current?.focus()}
      >
        {selectedTypes.map((typeName) => (
          <span key={typeName} className="type-multi-combobox__chip">
            <TypePill typeName={typeName} />
            <button
              type="button"
              className="type-multi-combobox__chip-remove"
              onClick={(event) => {
                event.stopPropagation();
                removeType(typeName);
              }}
              aria-label={t(KEYS.trade.removeType, {
                type: formatTypeDisplayName(typeName),
              })}
            >
              ×
            </button>
          </span>
        ))}

        {!atMax ? (
          <input
            ref={inputRef}
            type="text"
            className="type-multi-combobox__input"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleInputKeyDown}
            placeholder={
              selectedTypes.length === 0
                ? t(KEYS.trade.typeSearchPlaceholder)
                : t(KEYS.trade.typeSearchMorePlaceholder)
            }
            aria-label={t(KEYS.trade.typeSearchAria)}
            aria-autocomplete="list"
            aria-controls={isOpen ? listId : undefined}
            aria-expanded={isOpen}
          />
        ) : (
          <span className="type-multi-combobox__max-hint" role="status">
            {t(KEYS.trade.typeMaxSelected, { max: maxTypes })}
          </span>
        )}
      </div>

      {selectedTypes.length > 0 ? (
        <button type="button" className="type-multi-combobox__clear" onClick={clearAll}>
          {t(KEYS.trade.filterTypeAll)}
        </button>
      ) : null}

      {isOpen && !atMax ? (
        <ul
          id={listId}
          className="type-multi-combobox__list"
          role="listbox"
          aria-label={t(KEYS.trade.typeListAria)}
        >
          {filteredTypes.length === 0 ? (
            <li className="type-multi-combobox__empty" role="option" aria-disabled="true">
              {t(KEYS.trade.typeSearchNoResults)}
            </li>
          ) : (
            filteredTypes.map((typeName) => (
              <li key={typeName} role="option">
                <button
                  type="button"
                  className="type-multi-combobox__option"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => addType(typeName)}
                >
                  <TypePill typeName={typeName} />
                </button>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  );
}
