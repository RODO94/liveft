import { z } from "zod";

export const userSchema = z.object({
  id: z.enum(["rory", "salla"]),
  name: z.enum(["Rory", "Salla"]),
});

export type UserBase = z.infer<typeof userSchema>;
