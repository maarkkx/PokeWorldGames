import { FriendshipStatus } from '../../../../generated/prisma';
import * as shared from '../shared_repository';
import * as repository from './repository';
import { formatFriendshipRecord } from '../format';

export async function sendFriendRequest(fromUserId: number, toUserName: string) {
  const trimmed = toUserName?.trim() ?? '';

  if (!trimmed) {
    throw new Error('The target user is required');
  }

  const toUser = await shared.findUserByName(trimmed);

  if (!toUser) {
    throw new Error('User does not exist');
  }

  if (toUser.id === fromUserId) {
    throw new Error('You cannot send a friend request to yourself');
  }

  const existing = await shared.findFriendshipBetween(fromUserId, toUser.id);

  if (existing?.status === FriendshipStatus.ACCEPTED) {
    throw new Error('You are already friends with this user');
  }

  if (existing?.status === FriendshipStatus.PENDING) {
    if (existing.fromUserId === fromUserId) {
      throw new Error('Friend request already sent');
    }

    // Cross-request: they already sent to me — auto-accept
    const accepted = await repository.updateFriendshipStatus(
      existing.id,
      FriendshipStatus.ACCEPTED
    );

    return {
      friendship: formatFriendshipRecord(accepted, fromUserId),
      autoAccepted: true,
    };
  }

  const directed = await shared.findDirectedFriendship(fromUserId, toUser.id);

  if (directed?.status === FriendshipStatus.REJECTED) {
    const resent = await repository.upsertResendRequest(fromUserId, toUser.id);
    return {
      friendship: formatFriendshipRecord(resent, fromUserId),
      autoAccepted: false,
    };
  }

  const created = await repository.createFriendRequest(fromUserId, toUser.id);

  return {
    friendship: formatFriendshipRecord(created, fromUserId),
    autoAccepted: false,
  };
}
