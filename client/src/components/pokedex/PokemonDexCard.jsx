import TypePill from '../ui/TypePill.jsx';
import { formatPokemonDisplayName } from '../../utils/pokemon.js';
import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import './PokemonDexCard.css';

export default function PokemonDexCard({ pokemon, caught }) {
  const { t } = useI18n();
  const displayName = formatPokemonDisplayName(pokemon.name);
  const formattedId = String(pokemon.id).padStart(3, '0');
  const types = Array.isArray(pokemon.types) ? pokemon.types : [];

  return (
    <article
      className={`pokemon-dex-card${caught ? '' : ' is-uncaught'}`}
      aria-label={
        caught
          ? t(KEYS.pokedex.cardCaughtAria, { name: displayName })
          : t(KEYS.pokedex.cardUncaughtAria, { name: displayName })
      }
    >
      <div className="pokemon-dex-card__visual">
        {pokemon.urlImage ? (
          <img src={pokemon.urlImage} alt="" loading="lazy" decoding="async" />
        ) : (
          <span className="pokemon-dex-card__placeholder" aria-hidden="true" />
        )}
      </div>
      <div className="pokemon-dex-card__body">
        <span className="pokemon-dex-card__id">#{formattedId}</span>
        <h3 className="pokemon-dex-card__name">{displayName}</h3>
        <ul
          className="pokemon-dex-card__types"
          aria-label={types.length > 0 ? t(KEYS.pokedex.typesAria) : undefined}
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
    </article>
  );
}
