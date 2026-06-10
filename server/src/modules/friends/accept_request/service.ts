import { FriendshipStatus } from '../../../../generated/prisma';
import * as shared from '../shared_repository';
import * as repository from './repository';
import { formatFriendshipRecord } from '../format';

export async function acceptFriendRequest(
  userId: number,
  payload: { requestId?: number; fromUserName?: string }
) {
  const { requestId, fromUserName } = payload;

  let row = null;

  //comprobar que la solicitud existe
  if (requestId) {
    row = await shared.findFriendshipById(requestId);

  } else if (fromUserName?.trim()) {
    const fromUser = await shared.findUserByName(fromUserName.trim());

    if (!fromUser) {
      throw new Error('User does not exist');
    }

    row = await shared.findDirectedFriendship(fromUser.id, userId);

  } else {
    throw new Error('requestId or fromUserName is required');
  }


  if (!row) {
    throw new Error('Friend request not found');
  }

  //comprobar que la solicitud te la han enviado a ti
  if (row.toUserId !== userId) {
    throw new Error('You can only accept requests sent to you');
  }

  //comprobar si el estado es PENDING
  if (row.status !== FriendshipStatus.PENDING) {
    throw new Error('This friend request is no longer pending');
  }

  const accepted = await repository.acceptById(row.id);

  return {
    friendship: formatFriendshipRecord(accepted, userId),
  };
}
