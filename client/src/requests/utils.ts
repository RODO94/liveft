import { z } from "zod";
import { ErrorMessage } from "../types/request";
import { AxiosError } from "axios";

export const apiUrl: string = import.meta.env.VITE_API_URL;

export const errorResponse = (error: unknown): ErrorMessage => {
  if (error instanceof z.ZodError) {
    return { status: "zod", type: "zod error", message: error.message };
  }
  if (error instanceof AxiosError) {
    return { status: error.status, type: "API error", message: error.message };
  }
  return {
    status: 500,
    type: "unknown error",
    message: "An unexpected error occurred.",
  };
};
