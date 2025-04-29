import { z } from "zod";

export const parseUUID = (userId: string, liftId: string) => {
  z.string().uuid().parse(userId);
  z.string().uuid().parse(liftId);
};
