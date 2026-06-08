import { GameStatus, Prisma } from '../../../../generated/prisma';
import prisma from '../../../../prisma/client';
import type { GeneratedPuzzle } from './puzzle_generator';
import {
  buildPokemonWhereForCondition,
  buildPokemonWhereForConditions,
  type PuzzleCondition,
} from './puzzle_generator';

const cellInclude = {
  answerPokemon: {
    select: {
      id: true,
      name: true,
      urlImage: true,
    },
  },
} satisfies Prisma.PokedokuGameCellInclude;

export type GameWithCells = Prisma.PokedokuGameGetPayload<{
  include: {
    cells: {
      include: typeof cellInclude;
    };
  };
}>;

export async function getActiveGameByUserId(userId: number) {
  return prisma.pokedokuGame.findFirst({
    where: {
      userId,
      status: GameStatus.ACTIVE,
    },
    orderBy: {
      startedAt: 'desc',
    },
  });
}

export async function getGameWithCellsByGameId(gameId: string): Promise<GameWithCells | null> {
  return prisma.pokedokuGame.findUnique({
    where: { gameId },
    include: {
      cells: {
        include: cellInclude,
        orderBy: { position: 'asc' },
      },
    },
  });
}

export async function createGameWithCells(userId: number, puzzle: GeneratedPuzzle) {
  return prisma.$transaction(async (tx) => {
    const game = await tx.pokedokuGame.create({
      data: {
        userId,
        status: GameStatus.ACTIVE,
      },
    });

    await tx.pokedokuGameCell.createMany({
      data: puzzle.cells.map((cell) => ({
        gameInternalId: game.id,
        position: cell.position,
        rowConditionType: cell.rowConditionType,
        rowConditionValue: cell.rowConditionValue,
        columnConditionType: cell.columnConditionType,
        columnConditionValue: cell.columnConditionValue,
      })),
    });

    return tx.pokedokuGame.findUniqueOrThrow({
      where: { id: game.id },
      include: {
        cells: {
          include: cellInclude,
          orderBy: { position: 'asc' },
        },
      },
    });
  });
}

export async function getCellByGameAndPosition(gameInternalId: number, position: number) {
  return prisma.pokedokuGameCell.findUnique({
    where: {
      gameInternalId_position: {
        gameInternalId,
        position,
      },
    },
    include: cellInclude,
  });
}

export async function getUsedPokemonIds(gameInternalId: number): Promise<number[]> {
  const cells = await prisma.pokedokuGameCell.findMany({
    where: {
      gameInternalId,
      answerPokemonId: { not: null },
    },
    select: {
      answerPokemonId: true,
    },
  });

  return cells
    .map((cell) => cell.answerPokemonId)
    .filter((pokemonId): pokemonId is number => pokemonId != null);
}

export async function updateCellAnswer(
  cellId: number,
  data: {
    answerPokemonId: number;
    isCorrect: boolean;
    answeredAt: Date;
  },
) {
  return prisma.pokedokuGameCell.update({
    where: { id: cellId },
    data,
    include: cellInclude,
  });
}

export async function updateGameStatus(
  gameId: string,
  data: {
    status: GameStatus;
    xpEarned?: number;
  },
) {
  return prisma.pokedokuGame.update({
    where: { gameId },
    data,
  });
}

export async function countCorrectCells(gameInternalId: number) {
  return prisma.pokedokuGameCell.count({
    where: {
      gameInternalId,
      answerPokemonId: { not: null },
      isCorrect: true,
    },
  });
}

export async function countAnsweredCells(gameInternalId: number) {
  return prisma.pokedokuGameCell.count({
    where: {
      gameInternalId,
      answerPokemonId: { not: null },
    },
  });
}

export async function countWrongCells(gameInternalId: number) {
  return prisma.pokedokuGameCell.count({
    where: {
      gameInternalId,
      answerPokemonId: { not: null },
      isCorrect: false,
    },
  });
}

export async function searchPokemonByName(query: string, excludeIds: number[], limit = 8) {
  return prisma.pokemon.findMany({
    where: {
      AND: [
        {
          name: {
            contains: query,
            mode: 'insensitive',
          },
        },
        excludeIds.length > 0
          ? {
              id: {
                notIn: excludeIds,
              },
            }
          : {},
      ],
    },
    select: {
      id: true,
      name: true,
      urlImage: true,
    },
    take: limit,
    orderBy: {
      name: 'asc',
    },
  });
}

export async function getPokemonById(pokemonId: number) {
  return prisma.pokemon.findUnique({
    where: { id: pokemonId },
    select: {
      id: true,
      name: true,
      urlImage: true,
    },
  });
}

export { buildPokemonWhereForCondition, buildPokemonWhereForConditions };
