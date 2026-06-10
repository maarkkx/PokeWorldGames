import prisma from '../../../../prisma/client';
import { FriendshipStatus } from '../../../../generated/prisma';

const userSelect = {
  id: true,
  name: true,
  level: true,
  profilePokemonId: true,
  profileBgColor: true,
} as const;

//solo los amigos aceptados
export async function listAcceptedFriends(userId: number) {
  return prisma.friendship.findMany({
    where: {
      status: FriendshipStatus.ACCEPTED,
      OR: [{ fromUserId: userId }, { toUserId: userId }],
    },
    orderBy: { updatedAt: 'desc' },
    include: {
      fromUser: { select: userSelect },
      toUser: { select: userSelect },
    },
  });
}
