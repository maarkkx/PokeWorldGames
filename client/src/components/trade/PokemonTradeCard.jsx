import { formatPokemonDisplayName, formatTypeDisplayName } from '../../utils/pokemon.js';
import './PokemonTradeCard.css';

export default function PokemonTradeCard({
  entry,
  selected = false,
  selectedQuantity = 1,
  onToggle,
  onQuantityChange,
  disabled = false,
  quantityBadgeAria,
  decreaseAria,
  increaseAria,
  quantityInputAria,
  typesAria,
}) {
  const { pokemon, quantity: stock } = entry;
  const displayName = formatPokemonDisplayName(pokemon.name);
  const formattedId = String(pokemon.id).padStart(3, '0');
  const types = Array.isArray(pokemon.types) ? pokemon.types : [];

  return (
    <article
      className={`pokemon-trade-card${selected ? ' is-selected' : ''}${disabled ? ' is-disabled' : ''}`}
    >
      <button
        type="button"
        className="pokemon-trade-card__main"
        onClick={onToggle}
        disabled={disabled}
        aria-pressed={selected}
      >
        <div className="pokemon-trade-card__visual">
          {pokemon.urlImage ? (
            <img src={pokemon.urlImage} alt="" loading="lazy" />
          ) : (
            <span className="pokemon-trade-card__placeholder" aria-hidden="true" />
          )}
          <span className="pokemon-trade-card__qty-badge" aria-label={quantityBadgeAria}>
            ×{stock}
          </span>
          {selected ? (
            <span className="pokemon-trade-card__check" aria-hidden="true">
              ✓
            </span>
          ) : null}
        </div>
        <div className="pokemon-trade-card__body">
          <span className="pokemon-trade-card__id">#{formattedId}</span>
          <h3 className="pokemon-trade-card__name">{displayName}</h3>
          {types.length > 0 ? (
            <ul className="pokemon-trade-card__types" aria-label={typesAria}>
              {types.map((typeEntry) => {
                const typeName = typeEntry?.name ?? '';
                const typeSlug = typeName.toLowerCase().replace(/\s+/g, '-');

                return (
                  <li
                    key={typeName}
                    className={`pokemon-trade-card__type pokemon-trade-card__type--${typeSlug}`}
                  >
                    {formatTypeDisplayName(typeName)}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </button>

      {selected ? (
        <div className="pokemon-trade-card__stepper">
          <button
            type="button"
            className="pokemon-trade-card__stepper-btn"
            onClick={() => onQuantityChange(selectedQuantity - 1)}
            disabled={selectedQuantity <= 1}
            aria-label={decreaseAria}
          >
            −
          </button>
          <input
            type="number"
            className="pokemon-trade-card__stepper-input"
            min={1}
            max={stock}
            value={selectedQuantity}
            onChange={(event) => onQuantityChange(Number(event.target.value))}
            aria-label={quantityInputAria}
          />
          <button
            type="button"
            className="pokemon-trade-card__stepper-btn"
            onClick={() => onQuantityChange(selectedQuantity + 1)}
            disabled={selectedQuantity >= stock}
            aria-label={increaseAria}
          >
            +
          </button>
        </div>
      ) : null}
    </article>
  );
}
