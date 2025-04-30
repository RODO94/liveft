import { z } from "zod";

export type UserBase = {
  id: string;
  name: "Rory" | "Salla";
};

export const userSchema = z.object({
  id: z.enum(["rory", "salla"]),
  name: z.enum(["Rory", "Salla"]),
});
