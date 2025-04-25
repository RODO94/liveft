import { z } from "zod";

export const liftSchema = z.object({
  name: z.string(),
  slug: z.string(),
});
