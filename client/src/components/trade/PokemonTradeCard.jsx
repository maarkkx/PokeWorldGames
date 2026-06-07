import TypePill from '../ui/TypePill.jsx';
import { formatPokemonDisplayName } from '../../utils/pokemon.js';
import './PokemonTradeCard.css';

export default function PokemonTradeCard({
  entry,
  selected = false,
  selectedQuantity = 1,
  onToggle,
  onQuantityChange,
  disabled = false,
  readOnly = false,
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

  const cardClassName = [
    'pokemon-trade-card',
    selected ? 'is-selected' : '',
    disabled ? 'is-disabled' : '',
    readOnly ? 'pokemon-trade-card--readonly' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const mainContent = (
    <>
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
          <ul
            className="pokemon-trade-card__types"
            aria-label={types.length > 0 ? typesAria : undefined}
          >
            {types.map((typeEntry) => {
              const typeName = typeEntry?.name ?? '';

              return (
                <li key={typeName}>
                  <TypePill typeName={typeName} />
                </li>
              );
            })}
          </ul>
        </div>
    </>
  );

  return (
    <article className={cardClassName}>
      {readOnly ? (
        <div className="pokemon-trade-card__main">{mainContent}</div>
      ) : (
        <button
          type="button"
          className="pokemon-trade-card__main"
          onClick={onToggle}
          disabled={disabled}
          aria-pressed={selected}
        >
          {mainContent}
        </button>
      )}

      {!readOnly && selected ? (
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
