import prisma from '../../../../prisma/client';

const pinnedSelect = {
  slot: true,
  pokemon: {
    select: {
      id: true,
      name: true,
      urlImage: true,
    },
  },
} as const;

export async function replacePinnedPokemons(
  userId: number,
  entries: { slot: number; pokemonId: number }[]
) {
  return prisma.$transaction(async (tx) => {
    await tx.userPinnedPokemon.deleteMany({
      where: { userId },
    });

    if (entries.length > 0) {
      await tx.userPinnedPokemon.createMany({
        data: entries.map((entry) => ({
          userId,
          slot: entry.slot,
          pokemonId: entry.pokemonId,
        })),
      });
    }

    return tx.userPinnedPokemon.findMany({
      where: { userId },
      orderBy: { slot: 'asc' },
      select: pinnedSelect,
    });
  });
}

export async function countOwnedPokemon(userId: number, pokemonIds: number[]) {
  if (pokemonIds.length === 0) {
    return 0;
  }

  return prisma.userPokemon.count({
    where: {
      userId,
      pokemonId: { in: pokemonIds },
      quantity: { gte: 1 },
    },
  });
}

export async function countExistingPokemon(pokemonIds: number[]) {
  if (pokemonIds.length === 0) {
    return 0;
  }

  return prisma.pokemon.count({
    where: {
      id: { in: pokemonIds },
    },
  });
}
