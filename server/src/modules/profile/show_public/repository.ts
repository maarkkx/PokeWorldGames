import prisma from '../../../../prisma/client';

export async function getPublicProfileByName(name: string) {
  return prisma.user.findFirst({
    where: {
      name: {
        equals: name,
        mode: 'insensitive',
      },
    },
    select: {
      id: true,
      name: true,
      level: true,
      xp: true,
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
