import prisma from '../../../../prisma/client';

const XP_PER_LEVEL = 1000;

export async function addXP(userId: number, xpGained: number) {
  //get del user
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });
  if (!user) {
    throw new Error('User not found');
  }

  //sumar experiencia
  const newXP = user.xp + xpGained;

  //niveles
  const oldLevel = user.level; //antiguo nivel del usuario
  const newLevel = Math.floor(newXP / XP_PER_LEVEL) + 1; //miramos el nivel total del usuario

  //comprobamos si ha subido de nivel
  const levelsGained = newLevel - oldLevel;
  const lootboxesEarned = levelsGained > 0 ? levelsGained : 0; //damos 1 lootox por cada nivel subido

  //update de los datos del usuario
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      xp: newXP,
      level: newLevel,
      lootboxes: user.lootboxes + lootboxesEarned
    }
  });

  return {
    newXP,
    newLevel,
    levelsGained,
    lootboxesEarned,
    user: updatedUser
  };
}