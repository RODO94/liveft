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
  liftName: string;
  liftSlug: string;
  weight: number;
  date: string;
  reps?: number;
  userId: UserBase["id"];
  isMax: boolean;
}

export const LiftRecordShape = z.object({
  id: z.string(),
  liftId: z.string(),
  liftName: z.string(),
  liftSlug: z.string(),
  weight: z.number().positive(),
  date: z.string(),
  reps: z.number().optional(),
  userId: z.string(),
  isMax: z.boolean().optional(),
});

export const AddLiftShape = LiftRecordShape.omit({
  liftName: true,
  liftSlug: true,
  id: true,
  liftId: true,
  userId: true,
});

export type AllUserLifts = Record<LiftNames, LiftRecord[]>;

export type LiftTargetBase = {
  liftId: Lift["id"];
  id: string;
  weight: number;
  date?: string;
  createdAt: string;
  status?: string;
};

export interface UserLiftTarget extends LiftTargetBase {
  userId: string;
}

export const LiftTargetShape = z.object({
  id: z.string(),
  userId: z.string(),
  liftId: z.string(),
  weight: z.number().positive(),
  date: z.string(),
  createdAt: z.string(),
  status: z.string().optional(),
});

export interface LiftTargetTracker extends LiftTargetBase {
  currentWeight: number;
  daysLeft: `${number} days`;
  progress: `${number}%`;
}
