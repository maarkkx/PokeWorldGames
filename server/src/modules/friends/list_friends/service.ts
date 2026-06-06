import * as repository from './repository';
import { formatFriendUser } from '../format';

export async function listFriends(userId: number) {
  const rows = await repository.listAcceptedFriends(userId);

  const friends = rows.map((row) => {
    const other =
      row.fromUserId === userId ? row.toUser : row.fromUser;

    return {
      friendshipId: row.id,
      user: formatFriendUser(other),
    };
  });

  return { friends };
}
