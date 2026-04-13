import prisma from '../../../../prisma/client';

export async function getUserDetails(id : number) {
  return await prisma.user.findFirst({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      level: true,
      xp: true,
      lootboxes: true
    }
  })
}