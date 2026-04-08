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

export async function changePassword(id: number, passwordHash: string) {
	return prisma.user.update({
		where: { id },
		data: {
			password: passwordHash
		}
	});
}

export async function getPasswordHash(id: number) {
	return prisma.user.findUnique({
		where: { id },
		select: {
			password: true,
		}
	})
}