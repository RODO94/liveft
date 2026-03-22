import "dotenv/config";
import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { seedLifts } from "./lifts.js";
import { seedRecords } from "./records.js";
import { seedTargets } from "./targets.js";
import { seedUsers } from "./users.js";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

export const seedPrisma = new PrismaClient({ adapter });

const runSeeds = async () => {
  await seedPrisma.$connect();
  try {
    await seedUsers();
    await seedLifts();
    await seedRecords();
    await seedTargets();
  } catch (error) {
    console.error("Error running seeds:", error);
  } finally {
    await seedPrisma.$disconnect();
  }
};

runSeeds();
