import { z } from "zod";
import { UserBase } from "./users";

export type LiftNames = string;

export interface Lift {
  id: string;
  name: LiftNames;
  slug: string;
}

export const liftSchema: z.ZodType<Lift> = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
});

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
  liftId: Lift["id"];
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
