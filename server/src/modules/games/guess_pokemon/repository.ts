import prisma from '../../../../prisma/client';
import { GameStatus } from '../../../../generated/prisma';

export const getPokemonNameById = async (pokemonId: number) => {
  return prisma.pokemon.findUnique({
    where: { id: pokemonId },
    select: {
      id: true,
      name: true
    }
  });
};

export const getRandomPokemon = async () => {
  const total = await prisma.pokemon.count(); //contar todos los pokemons de la bd

  const randomIndex = Math.floor(Math.random() * total); //escoger un pokemon aleatorio

  const pokemon = await prisma.pokemon.findMany({
    skip: randomIndex,
    take: 1,
    select: {
      id: true,
      name: true,
      urlImage: true,
      hp: true,
      atk: true,
      def: true,
      spAtk: true,
      spDef: true,
      speed: true,
      types: { 
        select: {
          type: { 
            select: { name: true }
          }
        }
      }
    }
  });

  return pokemon[0];
};

export const createGame = async (userId: number, pokemonId: number, maxAttempts: number) => {
  const game = await prisma.guessPokemonGame.create({
    data: {
      userId,
      pokemonId,
      maxAttempts,
      remainingAttempts: maxAttempts,
      status: GameStatus.ACTIVE
    }
  });

  return game;
};

// Obtener partida por gameId
export const getGameById = async (gameId: string) => {
  return prisma.guessPokemonGame.findUnique({
    where: { gameId }
  });
};

// Actualizar la partida después de una respuesta
export const updateGame = async (gameId: string,
  data: {
    remainingAttempts?: number;
    lastGuess?: string;
    status?: GameStatus;
    xpEarned?: number;
    lootboxesEarned?: number;
  }
) => {
  return prisma.guessPokemonGame.update({
    where: { gameId },
    data
  });
};

//mirar si tiene una partida activa
export const getActiveGameByUserId = async (userId: number) => {
  return prisma.guessPokemonGame.findFirst({
    where: {
      userId,
      status: 'ACTIVE', // solo partidas activas
    },
    orderBy: {
      startedAt: 'desc', // opcional: la más reciente si hay varias (aunque no debería)
    },
  });
};