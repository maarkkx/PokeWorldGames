import prisma from '../../../prisma/client';
import { FriendshipStatus } from '../../../generated/prisma';

export async function findUserByName(name: string) {
  return prisma.user.findFirst({
    where: {
      name: {
        equals: name,
        mode: 'insensitive',
      },
    },
    select: { id: true, name: true },
  });
}

export async function findFriendshipBetween(userAId: number, userBId: number) {
  return prisma.friendship.findFirst({
    where: {
      OR: [
        { fromUserId: userAId, toUserId: userBId },
        { fromUserId: userBId, toUserId: userAId },
      ],
    },
  });
}

export async function findDirectedFriendship(fromUserId: number, toUserId: number) {
  return prisma.friendship.findUnique({
    where: {
      fromUserId_toUserId: { fromUserId, toUserId },
    },
  });
}

export async function findFriendshipById(id: number) {
  return prisma.friendship.findUnique({ where: { id } });
}

export { FriendshipStatus };
