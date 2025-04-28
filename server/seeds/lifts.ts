import { prisma } from "../database.js";

export const seedLifts = async () => {
  await prisma.lifts.deleteMany({});
  await prisma.lifts.createMany({
    data: [
      {
        id: "1",
        name: "clean + jerk",
        slug: "clean-jerk",
      },
      { id: "2", name: "snatch", slug: "snatch" },
      { id: "3", name: "squat", slug: "squat" },
      { id: "4", name: "deadlift", slug: "deadlift" },
      { id: "5", name: "bench press", slug: "bench-press" },
    ],
  });
};
