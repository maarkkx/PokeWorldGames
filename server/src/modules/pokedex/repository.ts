import prisma from '../../../prisma/client';

export async function getUserPokemons(userId: number) {
  const userPokemons = await prisma.userPokemon.findMany({
    where: {
      userId
    },
    select: {
      pokemon: {
        select: {
          id: true,
          name: true,
          urlImage: true
        }
      }
    }
  })

  return userPokemons.map((item) => item.pokemon)
}

export async function getCatalog() {
  return prisma.pokemon.findMany({
    where: {
      id: { gte: 1, lte: 1025 },
    },
    orderBy: { id: 'asc' },
    select: {
      id: true,
      name: true,
      urlImage: true,
      types: {
        select: {
          type: {
            select: { name: true },
          },
        },
      },
    },
  });
}