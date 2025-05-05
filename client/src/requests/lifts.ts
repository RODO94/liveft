import axios from "axios";
import { Lift, liftSchema } from "../types/lifts";
import { InsertSuccess, InsertSuccessResponse, Result } from "../types/request";
import { apiUrl, errorResponse } from "./utils";

export const getAllLifts = async (): Result<Lift[]> => {
  try {
    const { data } = await axios.get(`${apiUrl}/lifts`);
    liftSchema.array().parse(data);
    return { success: true, data };
  } catch (error) {
    return { success: false, error: errorResponse(error) };
  }
};

export const checkLiftExits = async (liftSlug: string) => {
  const response = await getAllLifts();
  if (!response.success) return false;
  return Boolean(response.data.find((lift) => lift.slug === liftSlug));
};

export const addNewLift = async (
  newLift: Omit<Lift, "id">
): Result<InsertSuccess> => {
  try {
    const parsedLift = liftSchema.optional().parse(newLift);
    const { data } = await axios.post(`${apiUrl}/lifts`, parsedLift);
    InsertSuccessResponse.parse(data);
    return { success: true, data };
  } catch (error) {
    return { success: false, error: errorResponse(error) };
  }
};
