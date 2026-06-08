export const FRIENDSHIP_UI_STATUS = {
  NONE: 'none',
  PENDING_SENT: 'pending_sent',
  PENDING_RECEIVED: 'pending_received',
  FRIENDS: 'friends',
  SELF: 'self',
} as const;

export type FriendshipUiStatus =
  (typeof FRIENDSHIP_UI_STATUS)[keyof typeof FRIENDSHIP_UI_STATUS];

export const FRIENDSHIP_DIRECTION = {
  SENT: 'sent',
  RECEIVED: 'received',
} as const;
