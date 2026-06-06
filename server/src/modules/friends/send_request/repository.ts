import prisma from '../../../../prisma/client';
import { FriendshipStatus } from '../../../../generated/prisma';

export async function createFriendRequest(fromUserId: number, toUserId: number) {
  return prisma.friendship.create({
    data: {
      fromUserId,
      toUserId,
      status: FriendshipStatus.PENDING,
    },
  });
}

export async function updateFriendshipStatus(
  id: number,
  status: FriendshipStatus
) {
  return prisma.friendship.update({
    where: { id },
    data: { status },
  });
}

export async function upsertResendRequest(fromUserId: number, toUserId: number) {
  return prisma.friendship.upsert({
    where: {
      fromUserId_toUserId: { fromUserId, toUserId },
    },
    create: {
      fromUserId,
      toUserId,
      status: FriendshipStatus.PENDING,
    },
    update: {
      status: FriendshipStatus.PENDING,
    },
  });
}
