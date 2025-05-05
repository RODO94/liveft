import { z } from "zod";

export const parseUUID = (userId: string, liftId: string) => {
  z.string().parse(userId);
  z.string().parse(liftId);
};
