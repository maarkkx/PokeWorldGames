import prisma from '../../../../prisma/client';

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
    select: { id: true, name: true, email: true, password: true, admin: true },
  });
}

export async function createPasswordResetRequest(
  userId: number,
  tokenHash: string,
  expiresAt: Date
) {
  return await prisma.passwordResetToken.create({
    data: {
      userId,
      tokenHash,
      expiresAt,
    },
    select: {
      id: true,
      userId: true,
      tokenHash: true,
      expiresAt: true,
      usedAt: true,
      createdAt: true,
    },
  });
}

export async function getValidPasswordResetToken(tokenHash: string) {
  return await prisma.passwordResetToken.findFirst({
    where: {
      tokenHash,
      usedAt: null,
      expiresAt: {
        gt: new Date(),
      },
    },
    select: {
      id: true,
      userId: true,
      expiresAt: true,
    },
  });
}

export async function resetUserPassword(
  userId: number,
  tokenId: number,
  newPasswordHash: string
) {
  return await prisma.$transaction(async (tx) => {
    await tx.user.update({
      where: { id: userId },
      data: { password: newPasswordHash },
    });

    await tx.passwordResetToken.update({
      where: { id: tokenId },
      data: { usedAt: new Date() },
    });

    await tx.passwordResetToken.updateMany({
      where: {
        userId,
        usedAt: null,
        id: { not: tokenId },
      },
      data: {
        usedAt: new Date(),
      },
    });
  });
}