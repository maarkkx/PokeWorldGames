import prisma from '../../../prisma/client';

const rankingUserSelect = {
  id: true,
  name: true,
  level: true,
  xp: true,
  profilePokemonId: true,
  profileBgColor: true,
} as const;

//top 10 jguadores con mas lvl
export async function top10LvlPlayers() {
  return await prisma.user.findMany({
    orderBy: {
      level: 'desc'
    }, 
    take: 10,
    select: rankingUserSelect,
  })
}

//10 jugadores con mas pokemons
export async function getTop10UsersByTotalPokemons() {
  const ranking = await prisma.userPokemon.groupBy({
    by: ['userId'],
    _sum: {
      quantity: true
    },
    orderBy: {
      _sum: {
        quantity: 'desc'
      }
    },
    take: 10
  })

  const users = await prisma.user.findMany({
    where: {
      id: {
        in: ranking.map((r) => r.userId)
      }
    },
    select: rankingUserSelect,
  })

  const usersMap = new Map(users.map((user) => [user.id, user]))

  return ranking.map((r) => ({
    ...usersMap.get(r.userId),
    totalPokemons: r._sum.quantity ?? 0
  }))
}

//Top 10 jugadores con mas pokemons unicos
export async function getTop10UsersByUniquePokemons() {
  const ranking = await prisma.userPokemon.groupBy({
    by: ['userId'],
    _count: {
      userId: true
    },
    orderBy: {
      _count: {
        userId: 'desc'
      }
    },
    take: 10
  })

  const users = await prisma.user.findMany({
    where: {
      id: {
        in: ranking.map((r) => r.userId)
      }
    },
    select: rankingUserSelect,
  })

  const usersMap = new Map(users.map((user) => [user.id, user]))

  return ranking.map((r) => ({
    ...usersMap.get(r.userId),
    uniquePokemons: r._count.userId
  }))
}