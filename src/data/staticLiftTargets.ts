import dayjs from "dayjs";
import { UserLiftTarget } from "../types/lifts";
import { lifts } from "./staticLiftData";

export const roryLiftTargets: UserLiftTarget[] = [
  {
    liftId: lifts[0].id,
    targetId: "rorytarget1",
    targetWeight: 160,
    targetDate: dayjs("2025-10-01").toString(),
    createdAt: dayjs("2024-10-01").toString(),
    userId: "rory",
  },
  {
    liftId: lifts[1].id,
    targetId: "rorytarget2",
    targetWeight: 185,
    targetDate: dayjs("2025-10-01").toString(),
    createdAt: dayjs("2024-10-01").toString(),
    userId: "rory",
  },
];

export const sallaLiftTargets: UserLiftTarget[] = [
  {
    liftId: lifts[0].id,
    targetId: "sallatarget1",
    targetWeight: 200,
    targetDate: dayjs("2025-06-01").toString(),
    createdAt: dayjs("2024-10-01").toString(),
    userId: "salla",
  },
  {
    liftId: lifts[1].id,
    targetId: "sallatarget2",
    targetWeight: 140,
    targetDate: dayjs("2025-09-01").toString(),
    createdAt: dayjs("2024-10-01").toString(),
    userId: "salla",
  },
];
