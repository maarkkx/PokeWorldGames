export function formatPokemonDisplayName(name) {
  if (!name) return '';

  return name
    .split('-')
    .map((part) => (part ? part.charAt(0).toUpperCase() + part.slice(1) : ''))
    .join(' ');
}