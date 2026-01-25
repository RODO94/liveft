import { seedPrisma } from "./index.js";

export const seedUsers = async () => {
  await seedPrisma.users.deleteMany();
  await seedPrisma.users.createMany({
    data: [
      { name: "Salla", id: "salla", created_at: Date.now().toString() },
      { name: "Rory", id: "rory", created_at: Date.now().toString() },
    ],
  });
};
