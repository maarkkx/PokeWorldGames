import prisma from '../../../../prisma/client';

export async function getUserByEmail(email: string) {
	return await prisma.user.findUnique({
		where: { email },
		select: {
			id: true,
			name: true,
			email: true,
			password: true,
			admin: true
		}
	});
}

export async function createPasswordResetRequest(userId: number, tokenHash: string, expiresAt: Date) {
	try {
		const resetRequest = await prisma.passwordResetToken.create({
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

		return resetRequest;
	} catch (error) {
		console.log(error);
		throw error;
	}
}