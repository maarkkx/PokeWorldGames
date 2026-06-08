import type { Prisma } from '../../../../generated/prisma';
import prisma from '../../../../prisma/client';
import {
  CELL_COUNT,
  CONDITION_TYPE,
  GRID_SIZE,
  MAX_PUZZLE_GENERATION_ATTEMPTS,
  MIN_POKEMON_PER_CONDITION,
  MIN_POKEMON_PER_INTERSECTION,
} from './constants';

export type PuzzleCondition = {
  type: string;
  value: string;
};

export type GeneratedPuzzle = {
  rows: PuzzleCondition[];
  columns: PuzzleCondition[];
  cells: Array<{
    position: number;
    rowConditionType: string;
    rowConditionValue: string;
    columnConditionType: string;
    columnConditionValue: string;
  }>;
};

export function buildPokemonWhereForCondition(
  condition: PuzzleCondition,
): Prisma.PokemonWhereInput {
  switch (condition.type) {
    case CONDITION_TYPE.TYPE:
      return {
        types: {
          some: {
            type: {
              name: condition.value,
            },
          },
        },
      };

    case CONDITION_TYPE.GENERATION: {
      const generation = Number.parseInt(condition.value, 10);
      if (!Number.isFinite(generation)) {
        throw new Error('Invalid generation condition');
      }
      return { generation };
    }

    case CONDITION_TYPE.LEGENDARY:
      return { legendary: condition.value === 'true' };

    case CONDITION_TYPE.MYTH:
      return { myth: condition.value === 'true' };

    default:
      throw new Error('Invalid condition type');
  }
}

export function buildPokemonWhereForConditions(
  row: PuzzleCondition,
  column: PuzzleCondition,
): Prisma.PokemonWhereInput {
  return {
    AND: [buildPokemonWhereForCondition(row), buildPokemonWhereForCondition(column)],
  };
}

export async function countPokemonMatchingConditions(
  row: PuzzleCondition,
  column: PuzzleCondition,
): Promise<number> {
  return prisma.pokemon.count({
    where: buildPokemonWhereForConditions(row, column),
  });
}

export async function pokemonMatchesCellConditions(
  pokemonId: number,
  row: PuzzleCondition,
  column: PuzzleCondition,
): Promise<boolean> {
  const count = await prisma.pokemon.count({
    where: {
      id: pokemonId,
      ...buildPokemonWhereForConditions(row, column),
    },
  });

  return count > 0;
}

function conditionKey(condition: PuzzleCondition): string {
  return `${condition.type}:${condition.value}`;
}

function pickRandomUnique<T>(items: T[], count: number): T[] {
  const pool = [...items];
  const picked: T[] = [];

  for (let index = 0; index < count && pool.length > 0; index += 1) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(randomIndex, 1)[0]);
  }

  return picked;
}

async function buildConditionPool(): Promise<PuzzleCondition[]> {
  const conditions: PuzzleCondition[] = [];

  const types = await prisma.type.findMany({
    select: { name: true },
    orderBy: { name: 'asc' },
  });

  for (const type of types) {
    const count = await prisma.pokemon.count({
      where: buildPokemonWhereForCondition({
        type: CONDITION_TYPE.TYPE,
        value: type.name,
      }),
    });

    if (count >= MIN_POKEMON_PER_CONDITION) {
      conditions.push({ type: CONDITION_TYPE.TYPE, value: type.name });
    }
  }

  for (let generation = 1; generation <= 9; generation += 1) {
    const count = await prisma.pokemon.count({
      where: { generation },
    });

    if (count >= MIN_POKEMON_PER_CONDITION) {
      conditions.push({
        type: CONDITION_TYPE.GENERATION,
        value: String(generation),
      });
    }
  }

  for (const value of ['true', 'false'] as const) {
    const legendaryCount = await prisma.pokemon.count({
      where: { legendary: value === 'true' },
    });

    if (legendaryCount >= MIN_POKEMON_PER_CONDITION) {
      conditions.push({ type: CONDITION_TYPE.LEGENDARY, value });
    }

    const mythCount = await prisma.pokemon.count({
      where: { myth: value === 'true' },
    });

    if (mythCount >= MIN_POKEMON_PER_CONDITION) {
      conditions.push({ type: CONDITION_TYPE.MYTH, value });
    }
  }

  return conditions;
}

function buildCellsFromConditions(
  rows: PuzzleCondition[],
  columns: PuzzleCondition[],
): GeneratedPuzzle['cells'] {
  const cells: GeneratedPuzzle['cells'] = [];

  for (let rowIndex = 0; rowIndex < GRID_SIZE; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < GRID_SIZE; columnIndex += 1) {
      const row = rows[rowIndex];
      const column = columns[columnIndex];

      cells.push({
        position: rowIndex * GRID_SIZE + columnIndex + 1,
        rowConditionType: row.type,
        rowConditionValue: row.value,
        columnConditionType: column.type,
        columnConditionValue: column.value,
      });
    }
  }

  return cells;
}

async function isValidPuzzle(rows: PuzzleCondition[], columns: PuzzleCondition[]): Promise<boolean> {
  for (const row of rows) {
    for (const column of columns) {
      const count = await countPokemonMatchingConditions(row, column);
      if (count < MIN_POKEMON_PER_INTERSECTION) {
        return false;
      }
    }
  }

  return true;
}

export async function generatePuzzle(): Promise<GeneratedPuzzle> {
  const pool = await buildConditionPool();

  if (pool.length < CELL_COUNT) {
    throw new Error('Not enough conditions to generate a puzzle');
  }

  for (let attempt = 0; attempt < MAX_PUZZLE_GENERATION_ATTEMPTS; attempt += 1) {
    const picked = pickRandomUnique(pool, CELL_COUNT);
    if (picked.length < CELL_COUNT) {
      continue;
    }

    const rows = picked.slice(0, GRID_SIZE);
    const columns = picked.slice(GRID_SIZE, CELL_COUNT);

    const uniqueKeys = new Set([...rows, ...columns].map(conditionKey));
    if (uniqueKeys.size < CELL_COUNT) {
      continue;
    }

    if (!(await isValidPuzzle(rows, columns))) {
      continue;
    }

    return {
      rows,
      columns,
      cells: buildCellsFromConditions(rows, columns),
    };
  }

  throw new Error('Error generating puzzle');
}
