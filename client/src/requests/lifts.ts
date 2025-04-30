import axios from "axios";
import { Lift, liftSchema } from "../types/lifts";
import { z } from "zod";

const apiUrl: string = import.meta.env.VITE_API_URL;

type ErrorMessage = {
  type: "zod error" | "API error" | "unknown error";
  message: string;
};

export const getAllLifts = async (): Promise<Lift[] | ErrorMessage> => {
  try {
    const { data } = await axios.get(`${apiUrl}/lifts`);
    liftSchema.array().parse(data);
    return data;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { type: "zod error", message: error.message };
    }
    if (error instanceof Error) {
      return { type: "API error", message: error.message };
    }
    return { type: "unknown error", message: "An unexpected error occurred." };
  }
};
