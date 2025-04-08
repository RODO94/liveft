import { UserLiftTarget } from "../types/lifts";

export const roryLiftTargets: UserLiftTarget[] = [
  {
    liftName: "clean + jerk",
    targetId: "rorytarget1",
    targetWeight: "160 kg",
    targetDate: new Date("2025-10-01"),
    createdAt: new Date("2024-10-01"),
    userId: "rory",
  },
  {
    liftName: "snatch",
    targetId: "rorytarget2",
    targetWeight: "185 kg",
    targetDate: new Date("2025-10-01"),
    createdAt: new Date("2024-10-01"),
    userId: "rory",
  },
];

export const sallaLiftTargets: UserLiftTarget[] = [
  {
    liftName: "clean + jerk",
    targetId: "sallatarget1",
    targetWeight: "200 kg",
    targetDate: new Date("2025-06-01"),
    createdAt: new Date("2024-10-01"),
    userId: "salla",
  },
  {
    liftName: "snatch",
    targetId: "sallatarget2",
    targetWeight: "140 kg",
    targetDate: new Date("2025-09-01"),
    createdAt: new Date("2024-10-01"),
    userId: "salla",
  },
];
