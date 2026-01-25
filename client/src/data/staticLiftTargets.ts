import dayjs from "dayjs";
import { UserLiftTarget } from "../types/lifts";
import { lifts } from "./staticLiftData";

export const roryLiftTargets: UserLiftTarget[] = [
  {
    liftId: lifts[0].id,
    id: "rorytarget1",
    weight: 160,
    date: dayjs("2025-10-01").toString(),
    createdAt: dayjs("2024-10-01").toString(),
    userId: "rory",
  },
  {
    liftId: lifts[1].id,
    id: "rorytarget2",
    weight: 185,
    date: dayjs("2025-10-01").toString(),
    createdAt: dayjs("2024-10-01").toString(),
    userId: "rory",
  },
];

export const sallaLiftTargets: UserLiftTarget[] = [
  {
    liftId: lifts[0].id,
    id: "sallatarget1",
    weight: 200,
    date: dayjs("2025-06-01").toString(),
    createdAt: dayjs("2024-10-01").toString(),
    userId: "salla",
  },
  {
    liftId: lifts[1].id,
    id: "sallatarget2",
    weight: 140,
    date: dayjs("2025-09-01").toString(),
    createdAt: dayjs("2024-10-01").toString(),
    userId: "salla",
  },
];
