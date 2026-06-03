import prisma from '../../../../prisma/client';

export async function getUserDetails(id: number) {
  return prisma.user.findFirst({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      level: true,
      xp: true,
      lootboxes: true,
      profilePokemonId: true,
      profileBgColor: true,
      pinnedPokemons: {
        orderBy: { slot: 'asc' },
        select: {
          slot: true,
          pokemon: {
            select: {
              id: true,
              name: true,
              urlImage: true,
            },
          },
        },
      },
    },
  });
}