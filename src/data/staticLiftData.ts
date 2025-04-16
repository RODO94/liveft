import { LiftNames, UserLift } from "../types/lifts";
import { roryProfile, sallaProfile } from "./staticUserData";

export const roryLifts: Record<LiftNames, UserLift[]> = {
  ["clean + jerk"]: [
    {
      name: "clean + jerk",
      weight: 100,
      date: new Date("2025-1-13"),
      id: "rory1",
      userId: roryProfile.id,
      reps: "8 reps",
    },
    {
      name: "clean + jerk",
      weight: 120,
      date: new Date("2025-02-21"),
      id: "rory2",
      userId: roryProfile.id,
      reps: "2 reps",
    },
  ],
  ["snatch"]: [
    {
      name: "snatch",
      weight: 120,
      date: new Date("2024-10-01"),
      id: "rory3",
      userId: roryProfile.id,
      reps: "2 reps",
    },
    {
      name: "snatch",
      weight: 80,
      date: new Date("2025-01-05"),
      id: "rory4",
      userId: roryProfile.id,
      reps: "8 reps",
    },
    {
      name: "snatch",
      weight: 140,
      date: new Date("2024-11-01"),
      id: "rory5",
      userId: roryProfile.id,
      reps: "2 reps",
    },
  ],
  deadlift: [],
  squat: [],
};

export const sallaLifts: Record<LiftNames, UserLift[]> = {
  "clean + jerk": [
    {
      name: "clean + jerk",
      weight: 150,
      date: new Date("2025-1-13"),
      id: "salla1",
      userId: sallaProfile.id,
      reps: "8 reps",
    },
    {
      name: "clean + jerk",
      weight: 180,
      date: new Date("2025-02-21"),
      id: "salla2",
      userId: sallaProfile.id,
      reps: "2 reps",
    },
  ],
  snatch: [
    {
      name: "snatch",
      weight: 60,
      date: new Date("2024-10-01"),
      id: "salla3",
      userId: sallaProfile.id,
      reps: "2 reps",
    },
    {
      name: "snatch",
      weight: 80,
      date: new Date("2025-01-05"),
      id: "salla4",
      userId: sallaProfile.id,
      reps: "8 reps",
    },
    {
      name: "snatch",
      weight: 120,
      date: new Date("2024-11-01"),
      id: "salla5",
      userId: sallaProfile.id,
      reps: "15 reps",
    },
  ],
  deadlift: [],
  squat: [],
};
