import prisma from "../config/prisma";

export const createUser = async (name: string, email: string) => {
  return prisma.user.create({
    data: {
      name,
      email,
    },
  });
};

export const getUsers = async () => {
  return prisma.user.findMany();
};

export const getUser = async (id: any) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
};

export const updateUser = async (id: any, name: string) => {
  return prisma.user.update({
    where: {
      id,
    },

    data: {
      name,
    },
  });
};

export const deleteUser = async (id: any) => {
  return prisma.user.delete({
    where: {
      id,
    },
  });
};
