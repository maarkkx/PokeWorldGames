import prisma from '../../../../prisma/client';

const DEFAULT_LIMIT = 10;

export async function searchUsersByNamePrefix(
  query: string,
  limit = DEFAULT_LIMIT,
  excludeUserId?: number
) {
  return prisma.user.findMany({
    where: {
      name: {
        startsWith: query,
        mode: 'insensitive',
      },
      ...(excludeUserId != null ? { id: { not: excludeUserId } } : {}),
    },
    select: {
      id: true,
      name: true,
    },
    take: limit,
    orderBy: {
      name: 'asc',
    },
  });
}
