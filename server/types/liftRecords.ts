import { z } from "zod";

export const liftRecordsSchema = z.object({
  id: z.string().uuid(),
  lift_id: z.string(),
  reps: z.number().optional(),
  user_id: z.string(),
  is_max: z.boolean(),
  weight: z.number(),
  date: z.string(),
});

export type LiftRecord = z.infer<typeof liftRecordsSchema>;
