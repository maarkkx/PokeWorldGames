import * as expManager from '../experience_manager/manager';
import { CELL_COUNT, TOTAL_WIN_XP } from './constants';
import { generatePuzzle, pokemonMatchesCellConditions, type PuzzleCondition } from './puzzle_generator';
import * as repository from './repository';
import type { GameWithCells } from './repository';

type ConditionDTO = {
  type: string;
  value: string;
};

type CellDTO = {
  position: number;
  answered: boolean;
  correct?: boolean;
  pokemon: {
    id: number;
    name: string;
    urlImage: string | null;
  } | null;
};

function extractRowsFromCells(cells: GameWithCells['cells']): ConditionDTO[] {
  return [1, 4, 7].map((position) => {
    const cell = cells.find((entry) => entry.position === position);
    if (!cell) {
      throw new Error('Invalid puzzle cells');
    }

    return {
      type: cell.rowConditionType,
      value: cell.rowConditionValue,
    };
  });
}

function extractColumnsFromCells(cells: GameWithCells['cells']): ConditionDTO[] {
  return [1, 2, 3].map((position) => {
    const cell = cells.find((entry) => entry.position === position);
    if (!cell) {
      throw new Error('Invalid puzzle cells');
    }

    return {
      type: cell.columnConditionType,
      value: cell.columnConditionValue,
    };
  });
}

function mapCellToDTO(cell: GameWithCells['cells'][number]): CellDTO {
  const answered = cell.answerPokemonId != null;

  return {
    position: cell.position,
    answered,
    ...(answered ? { correct: cell.isCorrect ?? false } : {}),
    pokemon: cell.answerPokemon
      ? {
          id: cell.answerPokemon.id,
          name: cell.answerPokemon.name,
          urlImage: cell.answerPokemon.urlImage,
        }
      : null,
  };
}

function buildGamePayload(game: GameWithCells) {
  const usedPokemonIds = game.cells
    .map((cell) => cell.answerPokemonId)
    .filter((pokemonId): pokemonId is number => pokemonId != null);

  return {
    gameId: game.gameId,
    status: game.status,
    rows: extractRowsFromCells(game.cells),
    columns: extractColumnsFromCells(game.cells),
    cells: game.cells.map(mapCellToDTO),
    usedPokemonIds,
  };
}

function getCellConditions(cell: GameWithCells['cells'][number]): {
  row: PuzzleCondition;
  column: PuzzleCondition;
} {
  return {
    row: {
      type: cell.rowConditionType,
      value: cell.rowConditionValue,
    },
    column: {
      type: cell.columnConditionType,
      value: cell.columnConditionValue,
    },
  };
}

export async function startGame(userId: number): Promise<object> {
  try {
    const activeGame = await repository.getActiveGameByUserId(userId);
    if (activeGame) {
      throw new Error('You already have an active game');
    }

    const puzzle = await generatePuzzle();
    const game = await repository.createGameWithCells(userId, puzzle);

    return buildGamePayload(game);
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : error,
    };
  }
}

export async function resumeGame(userId: number): Promise<object> {
  try {
    const activeGame = await repository.getActiveGameByUserId(userId);
    if (!activeGame) {
      return { message: 'There is no active game' };
    }

    const game = await repository.getGameWithCellsByGameId(activeGame.gameId);
    if (!game) {
      throw new Error('Game not found');
    }

    return buildGamePayload(game);
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : error,
    };
  }
}

export async function searchPokemonForCell(
  userId: number,
  gameId: string,
  position: number,
  query: string,
): Promise<object> {
  try {
    const trimmed = query?.trim();

    if (!trimmed || trimmed.length < 2) {
      return { names: [] };
    }

    if (!Number.isInteger(position) || position < 1 || position > CELL_COUNT) {
      throw new Error('Invalid cell position');
    }

    const game = await repository.getGameWithCellsByGameId(gameId);
    if (!game) {
      throw new Error('Game not found');
    }

    if (game.userId !== userId) {
      throw new Error('Not your game');
    }

    if (game.status !== 'ACTIVE') {
      throw new Error('Game already finished');
    }

    const cell = game.cells.find((entry) => entry.position === position);
    if (!cell) {
      throw new Error('Cell not found');
    }

    if (cell.answerPokemonId != null) {
      throw new Error('Cell already answered');
    }

    const { row, column } = getCellConditions(cell);
    const excludeIds = await repository.getUsedPokemonIds(game.id);
    const results = await repository.searchPokemonForCell(row, column, trimmed, excludeIds, 8);

    return {
      names: results.map((pokemon) => pokemon.name),
      pokemons: results,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : error,
    };
  }
}

export async function submitAnswer(
  userId: number,
  gameId: string,
  position: number,
  pokemonId: number,
): Promise<object> {
  try {
    if (!Number.isInteger(position) || position < 1 || position > CELL_COUNT) {
      throw new Error('Invalid cell position');
    }

    if (!Number.isInteger(pokemonId) || pokemonId < 1) {
      throw new Error('Invalid pokemon id');
    }

    const game = await repository.getGameWithCellsByGameId(gameId);
    if (!game) {
      throw new Error('Game not found');
    }

    if (game.userId !== userId) {
      throw new Error('Not your game');
    }

    if (game.status !== 'ACTIVE') {
      return { message: 'Game already finished', status: game.status };
    }

    const cell = game.cells.find((entry) => entry.position === position);
    if (!cell) {
      throw new Error('Cell not found');
    }

    if (cell.answerPokemonId != null) {
      throw new Error('Cell already answered');
    }

    const usedPokemonIds = await repository.getUsedPokemonIds(game.id);
    if (usedPokemonIds.includes(pokemonId)) {
      throw new Error('Pokemon already used in this game');
    }

    const pokemon = await repository.getPokemonById(pokemonId);
    if (!pokemon) {
      throw new Error('Pokemon not found');
    }

    const { row, column } = getCellConditions(cell);
    const isCorrect = await pokemonMatchesCellConditions(pokemonId, row, column);
    const answeredAt = new Date();

    await repository.updateCellAnswer(cell.id, {
      answerPokemonId: pokemonId,
      isCorrect,
      answeredAt,
    });

    if (!isCorrect) {
      await repository.updateGameStatus(gameId, {
        status: 'LOST',
        xpEarned: 0,
      });

      return {
        message: 'Incorrect answer',
        position,
        status: 'LOST',
        xpEarned: 0,
        correct: false,
        pokemon,
      };
    }

    const correctCount = await repository.countAnsweredCells(game.id);

    if (correctCount >= CELL_COUNT) {
      await repository.updateGameStatus(gameId, {
        status: 'WON',
        xpEarned: TOTAL_WIN_XP,
      });
      await expManager.addXP(userId, TOTAL_WIN_XP);

      return {
        message: 'Correct!',
        position,
        status: 'WON',
        xpEarned: TOTAL_WIN_XP,
        correct: true,
        pokemon,
      };
    }

    return {
      message: 'Correct!',
      position,
      status: 'ACTIVE',
      xpEarned: 0,
      correct: true,
      pokemon,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : error,
    };
  }
}
