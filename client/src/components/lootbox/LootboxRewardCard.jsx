import { formatPokemonDisplayName } from '../../utils/pokemon.js';
import './LootboxRewardCard.css';

export default function LootboxRewardCard({ pokemon }) {
  const displayName = formatPokemonDisplayName(pokemon.name);
  const formattedId = String(pokemon.id).padStart(3, '0');

  return (
    <article className="lootbox-reward-card">
      <div className="lootbox-reward-card__visual">
        {pokemon.urlImage ? (
          <img src={pokemon.urlImage} alt="" loading="lazy" />
        ) : (
          <span className="lootbox-reward-card__placeholder" aria-hidden="true" />
        )}
      </div>
      <div className="lootbox-reward-card__body">
        <span className="lootbox-reward-card__id">#{formattedId}</span>
        <h3 className="lootbox-reward-card__name">{displayName}</h3>
      </div>
    </article>
  );
}
