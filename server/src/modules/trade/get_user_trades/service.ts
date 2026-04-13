import * as repository from './repository';

export async function getUserTrades(userId: number) {
  if (!userId) {
    throw new Error('The user ID is required');
  }

  const trades = await repository.getUserTrades(userId);

  return trades.map((trade) => {
    const isSender = trade.fromUserId === userId;

    return {
      tradeId: trade.tradeId,
      status: trade.status,
      createdAt: trade.createdAt,
      updatedAt: trade.updatedAt,
      type: isSender ? 'sent' : 'received',
      otherUser: isSender ? trade.toUser : trade.fromUser,
      offeredPokemons: trade.items.filter((item) => item.ownerUserId === trade.fromUserId),
      requestedPokemons: trade.items.filter((item) => item.ownerUserId === trade.toUserId)
    };
  });
}