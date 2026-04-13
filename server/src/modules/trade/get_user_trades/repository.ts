import prisma from '../../../../prisma/client';

//get ofertas de un usuario
export async function getUserTrades(userId: number) {
  return prisma.trade.findMany({
    where: {
      OR: [
        { fromUserId: userId },
        { toUserId: userId }
      ]
    },
    include: {
      fromUser: {
        select: {
          id: true,
          name: true
        }
      },
      toUser: {
        select: {
          id: true,
          name: true
        }
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
              urlImage: true
            }
          }
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
}