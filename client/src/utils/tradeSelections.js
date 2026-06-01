export function createEmptySelections() {
  return new Map();
}

export function toggleSelection(selections, entry, quantity = 1) {
  const pokemonId = entry.pokemon.id;
  const next = new Map(selections);

  if (next.has(pokemonId)) {
    next.delete(pokemonId);
    return next;
  }

  next.set(pokemonId, {
    pokemonId,
    quantity: Math.min(Math.max(1, quantity), entry.quantity),
    maxQuantity: entry.quantity,
    pokemon: entry.pokemon,
  });

  return next;
}

export function setSelectionQuantity(selections, pokemonId, quantity) {
  const current = selections.get(pokemonId);
  if (!current) return selections;

  const next = new Map(selections);
  const clamped = Math.min(Math.max(1, quantity), current.maxQuantity);

  next.set(pokemonId, { ...current, quantity: clamped });
  return next;
}

export function selectionsToPayload(selections) {
  return Array.from(selections.values()).map(({ pokemonId, quantity }) => ({
    pokemonId,
    quantity,
  }));
}

export function filterInventoryByName(inventory, query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return inventory;

  return inventory.filter((entry) =>
    entry.pokemon?.name?.toLowerCase().includes(normalized),
  );
}
