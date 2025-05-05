import { z } from "zod";

export const liftSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
});

export type LiftType = z.infer<typeof liftSchema>;
