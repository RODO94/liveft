import axios from "axios";
import { apiUrl, errorResponse } from "./utils";
import { z } from "zod";
import { LiftRecord, LiftRecordShape as LiftRecordShape } from "../types/lifts";
import {
  InsertSuccess,
  InsertSuccessResponse,
  Result,
  UpdateReponse,
  UpdateSuccessResponse,
} from "../types/request";
import { userSchema } from "../types/users";

export const getUserLiftRecords = async (
  userId: string
): Result<LiftRecord[]> => {
  try {
    userSchema.pick({ id: true }).parse(userId);
    const { data } = await axios.get(`${apiUrl}/lift-records/user/${userId}`);
    LiftRecordShape.array().parse(data);
    return data;
  } catch (error) {
    return errorResponse(error);
  }
};

export const getLiftRecordById = async (
  recordId: string
): Result<LiftRecord> => {
  try {
    z.string().uuid().parse(recordId);
    const { data } = await axios.get(`${apiUrl}/lift-records/${recordId}`);
    LiftRecordShape.parse(data);
    return data;
  } catch (error) {
    return errorResponse(error);
  }
};

export const addNewLiftRecord = async (
  userId: string,
  liftId: string,
  record: LiftRecord
): Result<InsertSuccess> => {
  try {
    userSchema.pick({ id: true }).parse(userId);
    z.string().uuid().parse(liftId);

    LiftRecordShape.parse(record);

    const { data } = await axios.post(
      `${apiUrl}/lift-records/user/${userId}/lift/${liftId}`,
      record
    );

    InsertSuccessResponse.parse(data);
    return data;
  } catch (error) {
    return errorResponse(error);
  }
};

export const updateLiftRecord = async (
  recordId: string,
  updatedRecord: Partial<LiftRecord>
): Result<UpdateReponse<LiftRecord>> => {
  try {
    z.string().uuid().parse(recordId);

    const partialLiftRecord = LiftRecordShape.partial();
    partialLiftRecord.parse(updatedRecord);

    const { data } = await axios.put(
      `${apiUrl}/lift-records/record/${recordId}`,
      updatedRecord
    );

    UpdateSuccessResponse.parse(data);

    return data;
  } catch (error) {
    return errorResponse(error);
  }
};

export const deleteLiftRecord = async (
  recordId: string
): Result<{ message: string; id: string }> => {
  try {
    z.string().uuid().parse(recordId);
    const { data } = await axios.delete(
      `${apiUrl}/lift-records/record/${recordId}`
    );
    z.object({ message: z.string(), id: z.string() }).parse(data);

    return data;
  } catch (error) {
    return errorResponse(error);
  }
};
