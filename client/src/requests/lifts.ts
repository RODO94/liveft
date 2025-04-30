import axios from "axios";
import { Lift, liftSchema } from "../types/lifts";
import {
  ErrorMessage,
  SuccessfulInsertResponse,
  successfulInsertResponseSchema,
} from "../types/request";
import { apiUrl, errorResponse } from "./utils";

export const getAllLifts = async (): Promise<Lift[] | ErrorMessage> => {
  try {
    const { data } = await axios.get(`${apiUrl}/lifts`);
    liftSchema.array().parse(data);
    return data;
  } catch (error) {
    return errorResponse(error);
  }
};

export const addNewLift = async (newLift: Lift) => {
  try {
    const parsedLift = liftSchema.optional().parse(newLift);
    const { data } = await axios.post(`${apiUrl}/lifts`, parsedLift);
    const parsedData: SuccessfulInsertResponse = data.parse(
      successfulInsertResponseSchema
    );
    return parsedData;
  } catch (error) {
    return errorResponse(error);
  }
};
