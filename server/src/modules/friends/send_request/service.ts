import { FriendshipStatus } from '../../../../generated/prisma';
import * as shared from '../shared_repository';
import * as repository from './repository';
import { formatFriendshipRecord } from '../format';

export async function sendFriendRequest(fromUserId: number, toUserName: string) {
  const trimmed = toUserName?.trim() ?? '';

  if (!trimmed) {
    throw new Error('The target user is required');
  }

  //buscar que el usuario exista
  const toUser = await shared.findUserByName(trimmed);

  if (!toUser) {
    throw new Error('User does not exist');
  }

  //comprobar que no te envies a ti mismo la solicitud
  if (toUser.id === fromUserId) {
    throw new Error('You cannot send a friend request to yourself');
  }

  //comprobar si la amistad ya existe
  const existing = await shared.findFriendshipBetween(fromUserId, toUser.id);

  if (existing?.status === FriendshipStatus.ACCEPTED) {
    throw new Error('You are already friends with this user');
  }

  //comprobar si ya se ha enviado una solicitud antes o ya esta aceptada
  if (existing?.status === FriendshipStatus.PENDING) {
    if (existing.fromUserId === fromUserId) {
      throw new Error('Friend request already sent');
    }

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

  //Comprobar si ya existe una solicitud que fue rechazada, en caso de ser rechazada volver a enviar la solicitud
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
