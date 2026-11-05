import { prisma } from '../connection/prisma.connection';
import { UserCreateInput, UserUpdateInput } from '../generated/prisma/models';

interface AuthLoginInput {
  email: string;
  password: string;
}

export async function AuthRegisterService({
  email,
  password,
}: UserCreateInput) {
  const findUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (findUser) throw new Error('Email already registered');

  return await prisma.user.create({
    data: {
      email,
      password,
    },
  });
}

export async function AuthLoginService({ email, password }: AuthLoginInput) {
  const findUser = await prisma.user.findUnique({
    where: {
      email,
      password,
    },
  });

  if (!findUser) throw new Error('Email or password does not match');

  return findUser;
}
