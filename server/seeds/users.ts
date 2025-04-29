import { prisma } from "../database.js";

export const seedUsers = async () => {
  await prisma.users.deleteMany({});
  await prisma.users.createMany({
    data: [
      { name: "Salla", id: "salla", created_at: Date.now().toString() },
      { name: "Rory", id: "rory", created_at: Date.now().toString() },
    ],
  });
};
