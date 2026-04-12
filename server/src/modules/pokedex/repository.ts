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