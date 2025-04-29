import { seedLifts } from "./lifts.js";
import { seedRecords } from "./records.js";
import { seedTargets } from "./targets.js";
import { seedUsers } from "./users.js";

const runSeeds = async () => {
  try {
    await seedUsers();
    await seedLifts();
    await seedRecords();
    await seedTargets();
  } catch (error) {
    console.error("Error running seeds:", error);
  }
};

runSeeds();
