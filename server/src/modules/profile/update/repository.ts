import prisma from '../../../../prisma/client';

//get username para comprobar que no se repita
export async function getUsername(user : string) {
  return await prisma.user.findFirst({
    where: {name: user},
    select: {
      id: true,
    }
  })
}

//actualizar usuario
export async function updateUsername(id: number, user: string) {
  return await prisma.user.update({
    where: { id },
    data: {
      name: user,
    },
    select: {
      id: true,
      name: true,
    }
  })
}

//get del hash de la contraseña
export async function getPassword(id : number) {
  return await prisma.user.findFirst({
    where: { id },
    select: {
      password: true
    }
  })
}

//update de la contraseña
export async function updatePassword(id : number, hashedPassword : string) {
  return await prisma.user.update({
    where: { id },
    data: {
      password: hashedPassword,
    }
  })
}