import { FriendshipStatus } from '../../../../generated/prisma';
import * as shared from '../shared_repository';
import * as repository from './repository';
import { formatFriendshipRecord } from '../format';

export async function rejectFriendRequest(userId: number, requestId: number) {
  //comprobar si la solicitud existe
  if (!requestId) {
    throw new Error('requestId is required');
  }

  const row = await shared.findFriendshipById(requestId);

  if (!row) {
    throw new Error('Friend request not found');
  }

  //comprobar que te la hayan enviado a ti
  if (row.toUserId !== userId) {
    throw new Error('You can only reject requests sent to you');
  }

  //comprobar que su estado sea PENDING
  if (row.status !== FriendshipStatus.PENDING) {
    throw new Error('This friend request is no longer pending');
  }

  const rejected = await repository.rejectById(row.id);

  return {
    friendship: formatFriendshipRecord(rejected, userId),
  };
}
