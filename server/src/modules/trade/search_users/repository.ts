import prisma from '../../../../prisma/client';

const DEFAULT_LIMIT = 10;

export async function searchUsersByName(query: string, limit = DEFAULT_LIMIT) {
  return prisma.user.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive',
      },
    },
    select: {
      name: true,
    },
    take: limit,
    orderBy: {
      name: 'asc',
    },
  });
}
