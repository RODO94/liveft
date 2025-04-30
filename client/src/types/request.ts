import { z } from "zod";

export type ErrorMessage = {
  type: "zod error" | "API error" | "unknown error";
  message: string;
};

export const successfulInsertResponseSchema = z.object({
  id: z.string(),
  message: z.string(),
});

export type SuccessfulInsertResponse = z.infer<
  typeof successfulInsertResponseSchema
>;
