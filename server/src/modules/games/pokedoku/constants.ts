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

/** Awarded once when the grid is completed (50 × 9 + 100). */
export const XP_PER_CORRECT_CELL = 50;
export const COMPLETION_BONUS_XP = 100;
export const TOTAL_WIN_XP = XP_PER_CORRECT_CELL * CELL_COUNT + COMPLETION_BONUS_XP;

/**
 * v1 rule: one incorrect cell answer ends the run immediately (LOST).
 * There is no per-cell retry; matching row AND column conditions is required.
 */
