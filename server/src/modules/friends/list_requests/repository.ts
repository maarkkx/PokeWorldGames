import prisma from '../../../../prisma/client';
import { FriendshipStatus } from '../../../../generated/prisma';

const userSelect = {
  id: true,
  name: true,
  level: true,
  profilePokemonId: true,
  profileBgColor: true,
} as const;

//listas de solicitudes PENDING enviadas y recibidas
export async function listPendingForUser(userId: number) {
  const [received, sent] = await Promise.all([
    prisma.friendship.findMany({
      where: {
        toUserId: userId,
        status: FriendshipStatus.PENDING,
      },
      orderBy: { createdAt: 'desc' },
      include: { fromUser: { select: userSelect } },
    }),
    prisma.friendship.findMany({
      where: {
        fromUserId: userId,
        status: FriendshipStatus.PENDING,
      },
      orderBy: { createdAt: 'desc' },
      include: { toUser: { select: userSelect } },
    }),
  ]);

  return { received, sent };
}
