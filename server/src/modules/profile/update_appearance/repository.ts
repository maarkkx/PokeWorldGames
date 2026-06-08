import prisma from '../../../../prisma/client';

export async function updateAppearance(
  userId: number,
  profilePokemonId: number,
  profileBgColor: string
) {
  return prisma.user.update({
    where: { id: userId },
    data: {
      profilePokemonId,
      profileBgColor,
    },
    select: {
      profilePokemonId: true,
      profileBgColor: true,
    },
  });
}
