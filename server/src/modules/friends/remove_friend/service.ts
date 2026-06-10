import { FriendshipStatus } from '../../../../generated/prisma';
import * as shared from '../shared_repository';
import * as repository from './repository';

export async function removeFriend(
  userId: number,
  payload: { requestId?: number; friendUserName?: string }
) {
  const { requestId, friendUserName } = payload;

  let row = null;
  
  //comprobar que la relacion existe
  if (requestId) {
    row = await shared.findFriendshipById(requestId);

  } else if (friendUserName?.trim()) {
    const friend = await shared.findUserByName(friendUserName.trim());

    if (!friend) {
      throw new Error('User does not exist');
    }

    row = await shared.findFriendshipBetween(userId, friend.id);

  } else {
    throw new Error('requestId or friendUserName is required');
  }

  if (!row) {
    throw new Error('Friendship not found');
  }

  if (row.status !== FriendshipStatus.ACCEPTED) {
    throw new Error('You can only remove accepted friendships');
  }

  if (row.fromUserId !== userId && row.toUserId !== userId) {
    throw new Error('You are not part of this friendship');
  }

  await repository.deleteFriendship(row.id);

  return { removed: true, friendshipId: row.id };
}
