import prisma from '../../../../prisma/client';

export async function getUserPokemons(name: string) {
  const user = await prisma.user.findFirst({
    where: { name },
    select: {
      id: true
    }
  });

  if (!user) {
    throw new Error('User does not exist');
  }

  const userPokemons = await prisma.userPokemon.findMany({
    where: {
      userId: user.id
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
  });

  return userPokemons.map((item) => item.pokemon);
}