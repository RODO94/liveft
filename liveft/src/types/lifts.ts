export type LiftNames = "clean + jerk" | "snatch" | "squat" | "deadlift";
export type LiftWeight = `${number} kg`;
export type LiftRecord = {
  name: LiftNames;
  weight: LiftWeight;
  date: Date;
  id: string;
  reps?: `${number} reps`;
};

export interface UserLift extends LiftRecord {
  userId: string;
}

export type LiftTargetBase = {
  targetWeight: LiftWeight;
  targetDate?: Date;
  createdAt: Date;
};

export interface LiftTargetTracker extends LiftTargetBase {
  currentWeight: LiftWeight;
  daysLeft: `${number} days`;
  progress: `${number}%`;
}
