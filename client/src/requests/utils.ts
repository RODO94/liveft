import { z } from "zod";
import { ErrorMessage } from "../types/request";

export const apiUrl: string = import.meta.env.VITE_API_URL;

export const errorResponse = (error: unknown): ErrorMessage => {
  if (error instanceof z.ZodError) {
    return { type: "zod error", message: error.message };
  }
  if (error instanceof Error) {
    return { type: "API error", message: error.message };
  }
  return { type: "unknown error", message: "An unexpected error occurred." };
};
