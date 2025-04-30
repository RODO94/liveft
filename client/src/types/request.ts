import { z } from "zod";

export type ErrorMessage = {
  type: "zod error" | "API error" | "unknown error";
  message: string;
};

export const InsertSuccessResponse = z.object({
  id: z.string(),
  message: z.string(),
});

export type InsertSuccess = z.infer<typeof InsertSuccessResponse>;
export type UpdateReponse<T> = { message: string; data: T };

export const UpdateSuccessResponse = z.object({
  message: z.string(),
  data: z.any(),
});

export type Result<T> = Promise<T | ErrorMessage>;
