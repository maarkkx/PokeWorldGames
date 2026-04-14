import * as repository from './repository';

export async function acceptTrade(tradeId: string, userId: number) {
  //comprobaciones
  if (!tradeId) {
    throw new Error('Trade ID is required');
  }

  if (!userId) {
    throw new Error('User ID is required');
  }

  const trade = await repository.acceptTrade(tradeId, userId);

  return {
    tradeId: trade.tradeId,
    status: trade.status,
    createdAt: trade.createdAt,
    updatedAt: trade.updatedAt,
    fromUser: trade.fromUser,
    toUser: trade.toUser,
    offeredPokemons: trade.items.filter(
      (item) => item.ownerUserId === trade.fromUserId
    ),
    requestedPokemons: trade.items.filter(
      (item) => item.ownerUserId === trade.toUserId
    ),
  };
}