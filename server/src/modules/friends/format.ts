import { FriendshipStatus } from '../../../generated/prisma';
import { formatProfileAppearance } from '../profile/format';
import {
  FRIENDSHIP_DIRECTION,
  FRIENDSHIP_UI_STATUS,
  FriendshipUiStatus,
} from './constants';

type FriendshipRow = {
  id: number;
  fromUserId: number;
  toUserId: number;
  status: FriendshipStatus;
};

//datos que recibe el frontend para enseñar el perfil de un amigo
export function formatFriendUser(user: {
  id: number;
  name: string;
  level: number;
  profilePokemonId: number;
  profileBgColor: string;
}) {
  return {
    id: user.id,
    name: user.name,
    level: user.level,
    profile: formatProfileAppearance(user.profilePokemonId, user.profileBgColor),
  };
}

//para poder saber que boton de la ui mostrar (enivar solicitud, aceptar, etc)
export function resolveFriendshipForViewer(
  viewerId: number,
  profileUserId: number,
  row: FriendshipRow | null
): {
  status: FriendshipUiStatus;
  requestId: number | null;
  direction: 'sent' | 'received' | null;
} {
  if (viewerId === profileUserId) {
    //no puedes enviartela a ti mismo
    return {
      status: FRIENDSHIP_UI_STATUS.SELF,
      requestId: null,
      direction: null,
    };
  }

  if (!row) {
    return {
      status: FRIENDSHIP_UI_STATUS.NONE,
      requestId: null,
      direction: null,
    };
  }

  if (row.status === FriendshipStatus.ACCEPTED) {
    return {
      status: FRIENDSHIP_UI_STATUS.FRIENDS,
      requestId: row.id,
      direction: null,
    };
  }

  if (row.status === FriendshipStatus.PENDING) {
    if (row.fromUserId === viewerId) {
      return {
        status: FRIENDSHIP_UI_STATUS.PENDING_SENT,
        requestId: row.id,
        direction: FRIENDSHIP_DIRECTION.SENT,
      };
    }

    return {
      status: FRIENDSHIP_UI_STATUS.PENDING_RECEIVED,
      requestId: row.id,
      direction: FRIENDSHIP_DIRECTION.RECEIVED,
    };
  }


  return {
    status: FRIENDSHIP_UI_STATUS.NONE,
    requestId: null,
    direction: null,
  };
}

//lista de amigos
export function formatFriendshipRecord(
  row: FriendshipRow,
  viewerId: number
) {
  return {
    friendshipId: row.id,
    status: row.status,
    direction:
      row.fromUserId === viewerId
        ? FRIENDSHIP_DIRECTION.SENT
        : FRIENDSHIP_DIRECTION.RECEIVED,
    fromUserId: row.fromUserId,
    toUserId: row.toUserId,
  };
}
