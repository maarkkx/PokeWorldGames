import prisma from '../../../../prisma/client';

const userSelect = {
  id: true,
  name: true,
  email: true,
  password: true,
  googleId: true,
  authProvider: true,
  admin: true,
} as const;

export async function getUserByGoogleId(googleId: string) {
  return prisma.user.findUnique({
    where: { googleId },
    select: userSelect,
  });
}

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email },
    select: userSelect,
  });
}

export async function usernameExists(name: string) {
  const user = await prisma.user.findFirst({
    where: { name },
    select: { id: true },
  });

  return Boolean(user);
}

export async function linkGoogleAccount(userId: number, googleId: string) {
  return prisma.user.update({
    where: { id: userId },
    data: { googleId },
    select: userSelect,
  });
}

export async function createGoogleUser(data: {
  name: string;
  email: string;
  googleId: string;
}) {
  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      googleId: data.googleId,
      authProvider: 'google',
      password: null,
    },
    select: userSelect,
  });
}
