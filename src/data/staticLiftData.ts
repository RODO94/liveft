import dayjs from "dayjs";
import { Lift, LiftRecord } from "../types/lifts";
import { userProfiles } from "./staticUserData";

/**
 * Lift data wise we need to alter how we do this, which may affect different bits
 * The records we have now use a string key of the lift name, but
 * this duplicates the [lift].name field and
 * it doesn't give us something unique to refer to
 *
 * Why do we need something unique?
 * The current route is using liftId as the main query param
 * But this doesn't actually exist because the lift name is the query param
 * Because I can separate out the objects in this form as if each
 * user has it's own DB table, I fear this is too simplistic and not
 * really intuitive from a full stack point of view because
 * its not a relational data structure, I would more likely want
 * to refer to a table of lifts, liftRecords, then a table of users
 * Each lift then gets a unique ID, a liftID, and a userID which we can use
 * to connect them
 *
 */

const [salla, rory] = userProfiles;

export const [cleanAndJerk, snatch, squat, deadlift, benchPress]: Lift[] = [
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
