import { UserBase } from "./users";

export type LiftNames = string;

export interface Lift {
  id: string;
  name: LiftNames;
  slug: string;
  // hasTarget?: boolean;
}

export interface LiftRecord {
  id: string;
  liftId: Lift["id"];
  weight: number;
  date: string;
  reps?: number;
  userId: UserBase["id"];
  isMax: boolean;
}

export type AllUserLifts = Record<LiftNames, LiftRecord[]>;

export type LiftTargetBase = {
  liftName: LiftNames;
  targetId: string;
  targetWeight: number;
  targetDate?: string;
  createdAt: string;
};

export interface UserLiftTarget extends LiftTargetBase {
  userId: string;
}

export interface LiftTargetTracker extends LiftTargetBase {
  currentWeight: number;
  daysLeft: `${number} days`;
  progress: `${number}%`;
}
