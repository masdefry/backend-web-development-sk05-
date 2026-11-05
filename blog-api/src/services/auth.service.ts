import { prisma } from '../connection/prisma.connection';
import { UserCreateInput } from '../generated/prisma/models';

export async function AuthRegisterService({
  email,
  password,
}: UserCreateInput) {
  return await prisma.user.create({
    data: {
      email,
      password,
    },
  });
}
