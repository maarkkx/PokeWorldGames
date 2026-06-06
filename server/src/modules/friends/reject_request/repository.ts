import prisma from '../../../../prisma/client';
import { FriendshipStatus } from '../../../../generated/prisma';

export async function rejectById(id: number) {
  return prisma.friendship.update({
    where: { id },
    data: { status: FriendshipStatus.REJECTED },
  });
}
