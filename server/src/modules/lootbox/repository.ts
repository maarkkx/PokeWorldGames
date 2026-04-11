import prisma from '../../../prisma/client';
type RandomPokemon = {
  id: number
  url_image: string | null
}

//ver las lootboxes que tiene un usuario
export async function userLootboxes(id: number) {
  try {
    return prisma.user.findUnique({
      where: { id },
      select: {
        lootboxes: true
      }
    })
  } catch(error) {
    console.log(error)
  }
}

//get 3 pokemons random
export const getRandomPokemons = async () => {
  const pokemons = await prisma.$queryRaw<RandomPokemon[]>`
    SELECT id, url_image
    FROM "pokemon"
    ORDER BY RANDOM()
    LIMIT 3
  `

  return pokemons
}

//guardar pokemon a usuario y si ya lo tiene + el pokemon
export async function savePokemonToUser(userId :number, pokemonId : number) {
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
        gt: 0
      }
    },
    data: {
      lootboxes: {
        decrement: 1
      }
    }
  })
}