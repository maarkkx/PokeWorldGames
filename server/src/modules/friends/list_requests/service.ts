import * as repository from './repository';
import { formatFriendUser, formatFriendshipRecord } from '../format';

export async function listFriendRequests(userId: number) {
  const { received, sent } = await repository.listPendingForUser(userId);

  return {
    received: received.map((row) => ({
      ...formatFriendshipRecord(row, userId),
      user: formatFriendUser(row.fromUser),
    })),
    sent: sent.map((row) => ({
      ...formatFriendshipRecord(row, userId),
      user: formatFriendUser(row.toUser),
    })),
  };
}
