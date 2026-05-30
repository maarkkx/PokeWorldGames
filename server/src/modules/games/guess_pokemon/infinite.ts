export const INFINITE_MARKER_MAX_ATTEMPTS = 4;

export const INFINITE_LIVES = 4;

export const INFINITE_BASE_XP_PER_CORRECT = 50;

export function isInfiniteGame(maxAttempts: number): boolean {
  return maxAttempts === INFINITE_MARKER_MAX_ATTEMPTS;
}

export function getInfiniteMultiplier(streak: number): number {
  const tier = Math.floor(streak / 10);
  return 1 + 0.1 * tier;
}

//lastGuess guarda la racha actual como string cuando el modo es infinito
export function getStreakFromGame(lastGuess: string | null): number {
  if (!lastGuess) return 0;
  const parsed = parseInt(lastGuess, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function applyInfiniteMilestone(
  pendingXp: number,
  oldStreak: number,
  newStreak: number,
): number {
  const oldTier = Math.floor(oldStreak / 10);
  const newTier = Math.floor(newStreak / 10);
  if (newTier > oldTier) {
    const oldMult = 1 + 0.1 * oldTier;
    const newMult = 1 + 0.1 * newTier;
    return Math.floor(pendingXp * (newMult / oldMult));
  }
  return pendingXp;
}
