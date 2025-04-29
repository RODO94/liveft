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

export type LiftTarget = z.infer<typeof liftTargetSchema>;
