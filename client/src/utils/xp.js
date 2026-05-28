export const XP_PER_LEVEL = 1000;

export function getLevelProgress(xp) {
  const currentXp = xp % XP_PER_LEVEL;
  return {
    levelXp: currentXp,
    progress: currentXp / XP_PER_LEVEL,
  };
}
