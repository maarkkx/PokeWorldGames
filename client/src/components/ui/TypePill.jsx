import { formatTypeDisplayName } from '../../utils/pokemon.js';
import './TypePill.css';

export default function TypePill({ typeName, className = '' }) {
  if (!typeName) return null;

  const slug = typeName.toLowerCase().replace(/\s+/g, '-');

  return (
    <span className={`type-pill type-pill--${slug} ${className}`.trim()}>
      {formatTypeDisplayName(typeName)}
    </span>
  );
}
