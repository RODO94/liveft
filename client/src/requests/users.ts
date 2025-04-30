import axios from "axios";
import { apiUrl, errorResponse } from "./utils";
import { UserBase, userSchema } from "../types/users";
import { Result } from "../types/request";

export const getUsers = async (): Result<UserBase[]> => {
  try {
    const { data } = await axios.get(`${apiUrl}/users/`);
    userSchema.array().parse(data);
    return { success: true, data };
  } catch (error) {
    return { success: false, error: errorResponse(error) };
  }
};
