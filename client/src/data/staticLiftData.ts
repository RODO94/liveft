import dayjs from "dayjs";
import { AllUserLifts } from "../types/lifts";
import { roryProfile, sallaProfile } from "./staticUserData";

export const roryLifts: AllUserLifts = {
  ["clean + jerk"]: [
    {
      name: "clean + jerk",
      weight: 100,
      date: dayjs("2025-01-13", "YYYY-MM-DD").toString(),
      id: "rory1",
      userId: roryProfile.id,
      reps: 8,
    },
    {
      name: "clean + jerk",
      weight: 120,
      date: dayjs("2025-02-21").toString(),
      id: "rory2",
      userId: roryProfile.id,
      reps: 2,
    },
  ],
  ["snatch"]: [
    {
      name: "snatch",
      weight: 120,
      date: dayjs("2024-11-01").toString(),
      id: "rory3",
      userId: roryProfile.id,
      reps: 2,
    },
    {
      name: "snatch",
      weight: 80,
      date: dayjs("2025-01-05").toString(),
      id: "rory4",
      userId: roryProfile.id,
      reps: 8,
    },
    {
      name: "snatch",
      weight: 140,
      date: dayjs("2024-11-01").toString(),
      id: "rory5",
      userId: roryProfile.id,
      reps: 2,
    },
  ],
};

export const sallaLifts: AllUserLifts = {
  "clean + jerk": [
    {
      name: "clean + jerk",
      weight: 150,
      date: new Date("2025-01-13").toLocaleDateString("en-GB"),
      id: "salla1",
      userId: sallaProfile.id,
      reps: 8,
    },
    {
      name: "clean + jerk",
      weight: 180,
      date: new Date("2025-02-21").toLocaleDateString("en-GB"),
      id: "salla2",
      userId: sallaProfile.id,
      reps: 2,
    },
  ],
  snatch: [
    {
      name: "snatch",
      weight: 60,
      date: new Date("2024-10-01").toLocaleDateString("en-GB"),
      id: "salla3",
      userId: sallaProfile.id,
      reps: 2,
    },
    {
      name: "snatch",
      weight: 80,
      date: new Date("2025-01-05").toLocaleDateString("en-GB"),
      id: "salla4",
      userId: sallaProfile.id,
      reps: 2,
    },
    {
      name: "snatch",
      weight: 120,
      date: new Date("2024-11-01").toLocaleDateString("en-GB"),
      id: "salla5",
      userId: sallaProfile.id,
      reps: 15,
    },
  ],
};
