import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import { seedLifts } from "./lifts.js";
import { seedRecords } from "./records.js";
import { seedTargets } from "./targets.js";
import { seedUsers } from "./users.js";

const pool = new pg.Pool({ connectionString: process.env.NETLIFY_DATABASE_URL });
const adapter = new PrismaPg(pool);

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
