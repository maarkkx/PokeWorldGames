import { useI18n } from '../../context/I18nContext.jsx';
import { KEYS } from '../../i18n/keys.js';
import './PokeballOpenAnimation.css';

export default function PokeballOpenAnimation({ phase }) {
  const { t } = useI18n();
  const isOpening = phase === 'opening';
  const isOpen = phase === 'reveal';

  return (
    <div
      className={`pokeball-open${isOpening ? ' pokeball-open--shaking' : ''}${isOpen ? ' pokeball-open--opened' : ''}`}
      aria-hidden={phase === 'reveal'}
    >
      <div className="pokeball-open__glow" />
      <div className="pokeball-open__ball">
        <div className="pokeball-open__top" />
        <div className="pokeball-open__band" />
        <div className="pokeball-open__bottom" />
        <div className="pokeball-open__button" />
      </div>
      <p className="pokeball-open__hint">
        {isOpening ? t(KEYS.lootbox.openingHint) : t(KEYS.lootbox.idleHint)}
      </p>
    </div>
  );
}
