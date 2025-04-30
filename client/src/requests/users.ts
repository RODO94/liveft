import axios from "axios";
import { apiUrl, errorResponse } from "./utils";
import { z } from "zod";
import { UserBase, userSchema } from "../types/users";

export const getUserRecord = async (userId: string) => {
  try {
    z.enum(["salla", "rory"]).parse(userId);
    const { data } = await axios.get(`${apiUrl}/user/${userId}`);
    const parsedUser: UserBase = userSchema.parse(data);
    return parsedUser;
  } catch (error) {
    return errorResponse(error);
  }
};
