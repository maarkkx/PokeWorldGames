import prisma from '../../../../prisma/client';

//cambiar el estado a reject
export async function rejectTrade(tradeId: string, userId: number) {
  const trade = await prisma.trade.findUnique({
    where: { tradeId },
    include: {
      fromUser: {
        select: {
          id: true,
          name: true,
        },
      },
      toUser: {
        select: {
          id: true,
          name: true,
        },
      },
      items: {
        select: {
          id: true,
          ownerUserId: true,
          quantity: true,
          pokemon: {
            select: {
              id: true,
              name: true,
              urlImage: true,
            },
          },
        },
      },
    },
  });

  if (!trade) {
    throw new Error('Trade not found');
  }

  if (trade.toUserId !== userId) {
    throw new Error('You cannot reject this trade');
  }

  if (trade.status !== 'PENDING') {
    throw new Error('Trade is no longer pending');
  }

  return prisma.trade.update({
    where: { id: trade.id },
    data: {
      status: 'REJECTED',
    },
    include: {
      fromUser: {
        select: {
          id: true,
          name: true,
        },
      },
      toUser: {
        select: {
          id: true,
          name: true,
        },
      },
      items: {
        select: {
          id: true,
          ownerUserId: true,
          quantity: true,
          pokemon: {
            select: {
              id: true,
              name: true,
              urlImage: true,
            },
          },
        },
      },
    },
  });
}