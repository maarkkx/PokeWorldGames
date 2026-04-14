import prisma from '../../../../prisma/client';

export async function getUserPokemons(name: string) {
  const user = await prisma.user.findFirst({
    where: { name },
    select: { id: true },
  });

  if (!user) {
    throw new Error('User does not exist');
  }

  return prisma.userPokemon.findMany({
    where: { userId: user.id },
    select: {
      quantity: true,
      pokemon: {
        select: {
          id: true,
          name: true,
          urlImage: true,
        },
      },
    },
  });
}