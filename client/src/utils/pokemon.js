export function formatPokemonDisplayName(name) {
  if (!name) return '';

  return name
    .split('-')
    .map((part) => (part ? part.charAt(0).toUpperCase() + part.slice(1) : ''))
    .join(' ');
}

export function formatTypeDisplayName(name) {
  if (!name) return '';

  return name
    .split('-')
    .map((part) => (part ? part.charAt(0).toUpperCase() + part.slice(1) : ''))
    .join(' ');
}

export function deriveNormalImageUrl(shinyUrl) {
  if (!shinyUrl) return shinyUrl;

  return shinyUrl
    .replace(/\/shiny\//g, '/')
    .replace(/front_shiny/g, 'front_default');
}