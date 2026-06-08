import { FriendshipStatus } from '../../../../generated/prisma';
import * as shared from '../shared_repository';
import * as repository from './repository';
import { formatFriendshipRecord } from '../format';

export async function rejectFriendRequest(userId: number, requestId: number) {
  if (!requestId) {
    throw new Error('requestId is required');
  }

  const row = await shared.findFriendshipById(requestId);

  if (!row) {
    throw new Error('Friend request not found');
  }

  if (row.toUserId !== userId) {
    throw new Error('You can only reject requests sent to you');
  }

  if (row.status !== FriendshipStatus.PENDING) {
    throw new Error('This friend request is no longer pending');
  }

  const rejected = await repository.rejectById(row.id);

  return {
    friendship: formatFriendshipRecord(rejected, userId),
  };
}
