import prisma from '../../../../prisma/client';

export async function createUser(name: string, email: string, password: string) {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
        level: true,
        xp: true,
        lootboxes: true,
        admin: true,
      }
    })
    return user;
  } catch (error) {
    console.log(error)
  }
}

export async function checkUserExists(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
      }
    });

    return !!user; 
  } catch (error) {
    console.log(error);
    throw error;
  }
}