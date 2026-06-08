import prisma from '../../../../prisma/client';
import { FriendshipStatus } from '../../../../generated/prisma';

export async function acceptById(id: number) {
  return prisma.friendship.update({
    where: { id },
    data: { status: FriendshipStatus.ACCEPTED },
  });
}
