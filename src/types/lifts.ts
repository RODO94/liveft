export type LiftNames = string;
export type LiftRecord = {
  name: LiftNames;
  weight: number;
  date: string;
  id: string;
  reps?: number;
};

export interface UserLift extends LiftRecord {
  userId: string;
}

export type AllUserLifts = Record<LiftNames, UserLift[]>;

export type LiftTargetBase = {
  liftName: LiftNames | (string & {});
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
