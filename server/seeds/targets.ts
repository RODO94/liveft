import { prisma } from "../database.js";

export const seedTargets = async () => {
  await prisma.liftTargets.deleteMany({});
  await prisma.liftTargets.createMany({
    data: [
      {
        lift_id: "1",
        id: "rorytarget1",
        weight: 160,
        date: "2025-10-01",
        created_at: "2024-10-01",
        user_id: "rory",
      },
      {
        lift_id: "2",
        id: "rorytarget2",
        weight: 185,
        date: "2025-10-01",
        created_at: "2024-10-01",
        user_id: "rory",
      },
      {
        lift_id: "1",
        id: "sallatarget1",
        weight: 200,
        date: "2025-06-01",
        created_at: "2024-10-01",
        user_id: "salla",
      },
      {
        lift_id: "2",
        id: "sallatarget2",
        weight: 140,
        date: "2025-09-01",
        created_at: "2024-10-01",
        user_id: "salla",
      },
    ],
  });
};
