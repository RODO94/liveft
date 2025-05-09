import { z } from "zod";

export const liftRecordsSchema = z.object({
  id: z.string(),
  lift_id: z.string(),
  reps: z.number().optional(),
  user_id: z.string(),
  is_max: z.boolean(),
  weight: z.number(),
  date: z.string(),
});

export const liftRecordWithLiftInformation = z.object({
  id: z.string(),
  liftId: z.string(),
  reps: z.number().optional(),
  userId: z.string(),
  isMax: z.boolean(),
  weight: z.number(),
  date: z.string(),
  Lift: z
    .object({ name: z.string(), id: z.string(), slug: z.string() })
    .optional(),
});

export type LiftRecord = z.infer<typeof liftRecordsSchema>;
export type LiftRecordFrontend = z.infer<typeof liftRecordWithLiftInformation>;
