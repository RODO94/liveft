import { z } from "zod";

export const liftTargetSchema = z.object({
  id: z.string(),
  weight: z.number(),
  date: z.string(),
  created_at: z.string(),
  lift_id: z.string(),
  user_id: z.string(),
  status: z.string().optional(),
});

export type MappedLiftTarget = {
  id: string;
  weight: number;
  date: string;
  createdAt: string;
  liftId: string;
  userId: string;
  status: string;
};

export type LiftTarget = z.infer<typeof liftTargetSchema>;
