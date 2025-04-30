import { z } from "zod";
import { userSchema } from "../types/users";
import axios from "axios";
import { apiUrl, errorResponse } from "./utils";
import {
  InsertSuccess,
  InsertSuccessResponse,
  Result,
  UpdateReponse,
  UpdateSuccessResponse,
} from "../types/request";
import { LiftTargetBase, LiftTargetShape } from "../types/lifts";

export const getTargetById = async (
  userId: string,
  liftId: string
): Result<LiftTargetBase> => {
  try {
    userSchema.pick({ id: true }).parse(userId);
    z.string().uuid().parse(liftId);

    const { data } = await axios.get(
      `${apiUrl}/lift-targets/user/${userId}/lift${liftId}`
    );

    LiftTargetShape.parse(data);

    return { success: true, data };
  } catch (error) {
    return { success: false, error: errorResponse(error) };
  }
};

export const addNewTarget = async (
  userId: string,
  liftId: string,
  newTarget: LiftTargetBase
): Result<InsertSuccess> => {
  try {
    userSchema.pick({ id: true }).parse(userId);
    z.string().uuid().parse(liftId);
    LiftTargetShape.parse(newTarget);

    const { data } = await axios.post(
      `${apiUrl}/lift-targets/user/${userId}/lift/${liftId}`,
      newTarget
    );

    InsertSuccessResponse.parse(data);

    return { success: true, data };
  } catch (error) {
    return { success: false, error: errorResponse(error) };
  }
};

export const updateTarget = async (
  targetId: string,
  updatedTarget: LiftTargetBase
): Result<UpdateReponse<LiftTargetBase>> => {
  try {
    z.string().uuid().parse(targetId);
    const partialTargetShape = LiftTargetShape.partial();
    partialTargetShape.parse(updatedTarget);

    const { data } = await axios.put(
      `${apiUrl}/lift-targets/target/${targetId}`,
      updatedTarget
    );
    UpdateSuccessResponse.parse(data);
    return { success: true, data };
  } catch (error) {
    return { success: false, error: errorResponse(error) };
  }
};
