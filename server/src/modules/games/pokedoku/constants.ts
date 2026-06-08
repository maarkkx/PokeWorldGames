export const CONDITION_TYPE = {
  TYPE: 'type',
  GENERATION: 'generation',
  LEGENDARY: 'legendary',
  MYTH: 'myth',
} as const;

export type ConditionType = (typeof CONDITION_TYPE)[keyof typeof CONDITION_TYPE];

export const GRID_SIZE = 3;
export const CELL_COUNT = GRID_SIZE * GRID_SIZE;

/** Minimum Pokémon in DB for a condition to be eligible in puzzle generation. */
export const MIN_POKEMON_PER_CONDITION = 3;

/** Minimum valid Pokémon at each row/column intersection. */
export const MIN_POKEMON_PER_INTERSECTION = 1;

export const MAX_PUZZLE_GENERATION_ATTEMPTS = 120;

export const MAX_LIVES = CELL_COUNT;

/** Awarded per correct cell; +100 bonus only on a perfect 9/9 grid. */
export const XP_PER_CORRECT_CELL = 50;
export const COMPLETION_BONUS_XP = 100;
export const TOTAL_WIN_XP = XP_PER_CORRECT_CELL * CELL_COUNT + COMPLETION_BONUS_XP;

export function calculatePokedokuXp(correctCount: number): number {
  const base = correctCount * XP_PER_CORRECT_CELL;
  const bonus = correctCount === CELL_COUNT ? COMPLETION_BONUS_XP : 0;
  return base + bonus;
}

/**
 * One attempt per cell. Wrong answers lock the cell and cost one life.
 * The run continues until all 9 cells are filled; XP depends on correct cells.
 */
