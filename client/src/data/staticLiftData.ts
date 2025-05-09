import dayjs from "dayjs";
import { Lift, LiftRecord } from "../types/lifts";
import { userProfiles } from "./staticUserData";
import { capitalize } from "@mui/material/utils";

const [salla, rory] = userProfiles;

export const lifts: Lift[] = [
  {
    id: "1",
    name: "clean + jerk",
    slug: "clean-jerk",
  },
  { id: "2", name: "snatch", slug: "snatch" },
  { id: "3", name: "squat", slug: "squat" },
  { id: "4", name: "deadlift", slug: "deadlift" },
  { id: "5", name: "bench press", slug: "bench-press" },
];

export const getLiftName = (liftId: LiftRecord["liftId"]) => {
  const targetLift = lifts.find((lift) => lift.id === liftId);
  if (targetLift)
    return { name: capitalize(targetLift.name), slug: targetLift.slug };

  return false;
};

const [cleanAndJerk, , squat, deadlift, benchPress] = lifts;

export const liftRecordsTable: LiftRecord[] = [
  {
    id: "1",
    liftId: cleanAndJerk.id,
    weight: 120,
    date: dayjs(Date.now()).toString(),
    userId: rory.id,
    isMax: true,
  },
  {
    id: "2",
    liftId: cleanAndJerk.id,
    weight: 100,
    date: dayjs("2025-01-13", "YYYY-MM-DD").toString(),
    userId: rory.id,
    isMax: false,
  },
  {
    id: "3",
    liftId: cleanAndJerk.id,
    weight: 110,
    date: dayjs("2025-02-21").toString(),
    userId: rory.id,
    isMax: false,
  },
  {
    id: "4",
    liftId: squat.id,
    weight: 100,
    date: dayjs("2024-11-01").toString(),
    userId: rory.id,
    isMax: false,
  },
  {
    id: "5",
    liftId: squat.id,
    weight: 140,
    date: dayjs("2025-01-05").toString(),
    userId: rory.id,
    isMax: true,
  },
  {
    id: "6",
    liftId: squat.id,
    weight: 110,
    date: dayjs("2024-11-01").toString(),
    userId: rory.id,
    isMax: false,
  },
  {
    id: "7",
    liftId: deadlift.id,
    weight: 180,
    date: dayjs("2025-03-01").toString(),
    userId: rory.id,
    isMax: true,
  },
  {
    id: "8",
    liftId: deadlift.id,
    weight: 100,
    date: dayjs("2025-03-15").toString(),
    userId: rory.id,
    isMax: false,
  },
  {
    id: "9",
    liftId: deadlift.id,
    weight: 90,
    date: dayjs("2025-04-03").toString(),
    userId: rory.id,
    isMax: false,
  },
  {
    id: "10",
    liftId: benchPress.id,
    weight: 65,
    date: dayjs("2024-12-15").toString(),
    userId: rory.id,
    isMax: false,
  },
  {
    id: "11",
    liftId: benchPress.id,
    weight: 80,
    date: dayjs("2024-12-17").toString(),
    userId: rory.id,
    isMax: false,
  },
  {
    id: "12",
    liftId: benchPress.id,
    weight: 100,
    date: dayjs("2025-04-10").toString(),
    userId: rory.id,
    isMax: true,
  },
  {
    id: "13",
    liftId: cleanAndJerk.id,
    weight: 120,
    date: dayjs(Date.now()).toString(),
    userId: salla.id,
    isMax: true,
  },
  {
    id: "14",
    liftId: cleanAndJerk.id,
    weight: 100,
    date: dayjs("2025-01-13", "YYYY-MM-DD").toString(),
    userId: salla.id,
    isMax: false,
  },
  {
    id: "15",
    liftId: cleanAndJerk.id,
    weight: 110,
    date: dayjs("2025-02-21").toString(),
    userId: salla.id,
    isMax: false,
  },
  {
    id: "16",
    liftId: squat.id,
    weight: 100,
    date: dayjs("2024-11-01").toString(),
    userId: salla.id,
    isMax: false,
  },
  {
    id: "17",
    liftId: squat.id,
    weight: 140,
    date: dayjs("2025-01-05").toString(),
    userId: salla.id,
    isMax: true,
  },
  {
    id: "18",
    liftId: squat.id,
    weight: 110,
    date: dayjs("2024-11-01").toString(),
    userId: salla.id,
    isMax: false,
  },
  {
    id: "19",
    liftId: deadlift.id,
    weight: 180,
    date: dayjs("2025-03-01").toString(),
    userId: salla.id,
    isMax: true,
  },
  {
    id: "20",
    liftId: deadlift.id,
    weight: 100,
    date: dayjs("2025-03-15").toString(),
    userId: salla.id,
    isMax: false,
  },
  {
    id: "21",
    liftId: deadlift.id,
    weight: 90,
    date: dayjs("2025-04-03").toString(),
    userId: salla.id,
    isMax: false,
  },
  {
    id: "22",
    liftId: benchPress.id,
    weight: 65,
    date: dayjs("2024-12-15").toString(),
    userId: salla.id,
    isMax: false,
  },
  {
    id: "23",
    liftId: benchPress.id,
    weight: 80,
    date: dayjs("2024-12-17").toString(),
    userId: salla.id,
    isMax: false,
  },
  {
    id: "24",
    liftId: benchPress.id,
    weight: 100,
    date: dayjs("2025-04-10").toString(),
    userId: salla.id,
    isMax: true,
  },
];
