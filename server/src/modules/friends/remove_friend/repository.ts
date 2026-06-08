import prisma from '../../../../prisma/client';

export async function deleteFriendship(id: number) {
  return prisma.friendship.delete({ where: { id } });
}
