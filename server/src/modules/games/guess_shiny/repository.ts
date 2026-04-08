import prisma from '../../../../prisma/client';
import { GameStatus } from '../../../../generated/prisma';

//get de la url del pokemon 
export const getPokemonById = async (pokemonId: number) => {
  return prisma.pokemon.findUnique({
    where: { id: pokemonId },
    select: {
      id: true,
			name: true,
      urlShinyImage: true
    }
  });
};

//generar un pokemon random
export async function getRandomShinyPokemon() {
	const total = await prisma.pokemon.count();
	const randomIndex = Math.floor(Math.random() * total);

	const pokemon = await prisma.pokemon.findMany({
		skip: randomIndex,
		take: 1,
		select: {
			id: true,
			name: true,
			urlShinyImage: true,
		},
	});

	return pokemon[0];
}

//crear partida
export async function createShinyGame(userId: number, pokemonId: number, correctPosition: number) {
	const game = await prisma.guessShinyGame.create({
		data: {
			userId,
			pokemonId,
			status: GameStatus.ACTIVE,
			correctPosition
		},
	});

	return game;
}

//get de partida por gameid
export async function getShinyGameById(gameId: string) {
	return prisma.guessShinyGame.findUnique({
		where: { gameId },
	});
}

//update partida
export async function updateShinyGame(
	gameId: string,
	data: {
		status?: GameStatus;
		lastGuess?: string;
		xpEarned?: number;
	}
) {
	return prisma.guessShinyGame.update({
		where: { gameId },
		data,
	});
}

//comprobar si el usuario tiene alguna partida en curso
export async function getActiveShinyGameByUserId(userId: number) {
	return prisma.guessShinyGame.findFirst({
		where: {
			userId,
			status: 'ACTIVE',
		},
		orderBy: { startedAt: 'desc' },
	});
}

export async function getGameIdByUserId(userId: number) {
	return prisma.guessShinyGame.findFirst({
    where: {
      userId,
      status: 'ACTIVE'
    },
    select: {
      userId: true,
      gameId: true,
    }
  })
}