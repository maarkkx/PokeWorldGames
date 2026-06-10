//condicioness
export const CONDITION_TYPE = {
  TYPE: 'type',
  GENERATION: 'generation',
  LEGENDARY: 'legendary',
  MYTH: 'myth',
} as const;

export type ConditionType = (typeof CONDITION_TYPE)[keyof typeof CONDITION_TYPE];

//casillas
export const GRID_SIZE = 3;
export const CELL_COUNT = GRID_SIZE * GRID_SIZE;

//Cada condicion tiene que tener minimo 3 pokemons elegibles
export const MIN_POKEMON_PER_CONDITION = 3;

export const MIN_POKEMON_PER_INTERSECTION = 1;

export const MAX_PUZZLE_GENERATION_ATTEMPTS = 120;

export const MAX_LIVES = CELL_COUNT;

//+50 de experiencia por cada casilla completada y 100 extras al completar 9/9
export const XP_PER_CORRECT_CELL = 50;
export const COMPLETION_BONUS_XP = 100;
export const TOTAL_WIN_XP = XP_PER_CORRECT_CELL * CELL_COUNT + COMPLETION_BONUS_XP;

export function calculatePokedokuXp(correctCount: number): number {
  const base = correctCount * XP_PER_CORRECT_CELL;
  const bonus = correctCount === CELL_COUNT ? COMPLETION_BONUS_XP : 0;
  return base + bonus;
}
