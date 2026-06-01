import prisma from '../../../prisma/client';

//ver las lootboxes que tiene un usuario
export async function userLootboxes(id: number) {
  try {
    return prisma.user.findUnique({
      where: { id },
      select: {
        lootboxes: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
}

function buildExcludeFilter(excludeIds: number[]) {
  if (excludeIds.length === 0) {
    return {};
  }

  return {
    id: {
      notIn: excludeIds,
    },
  };
}

async function pickRandomPokemon(where: object) {
  const total = await prisma.pokemon.count({ where });

  if (total === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * total);

  const pokemons = await prisma.pokemon.findMany({
    where,
    skip: randomIndex,
    take: 1,
    select: {
      id: true,
      name: true,
      urlImage: true,
    },
  });

  return pokemons[0] ?? null;
}

export async function getRandomPokemonExcluding(excludeIds: number[]) {
  return pickRandomPokemon(buildExcludeFilter(excludeIds));
}

export async function getRandomLegendaryOrMythicExcluding(excludeIds: number[]) {
  return pickRandomPokemon({
    ...buildExcludeFilter(excludeIds),
    OR: [{ legendary: true }, { myth: true }],
  });
}

//guardar pokemon a usuario y si ya lo tiene + el pokemon
export async function savePokemonToUser(userId: number, pokemonId: number) {
  return await prisma.userPokemon.upsert({
    where: {
      userId_pokemonId: {
        userId,
        pokemonId,
      },
    },
    create: {
      userId,
      pokemonId,
      quantity: 1,
    },
    update: {
      quantity: {
        increment: 1,
      },
    },
  });
}

//borrar lootbox
export async function removeOneLootbox(userId: number) {
  return await prisma.user.updateMany({
    where: {
      id: userId,
      lootboxes: {
        gt: 0,
      },
    },
    data: {
      lootboxes: {
        decrement: 1,
      },
    },
  });
}
