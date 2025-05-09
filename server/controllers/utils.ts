import { z } from "zod";
import { prisma } from "../database.js";

export const parseUUID = (userId: string, liftId: string) => {
  z.string().parse(userId);
  z.string().parse(liftId);
};

export const updateMaxRecord = async (userId: string, liftId: string) => {
  try {
    const getAllRelevantLiftRecords = await prisma.liftRecords.findMany({
      where: { user_id: userId, lift_id: liftId },
    });

    if (getAllRelevantLiftRecords.length < 2) return true;

    const [maxLift, secondMaxLift] = getAllRelevantLiftRecords
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 2);

    await prisma.liftRecords.update({
      where: { id: maxLift.id },
      data: { is_max: false },
    });

    await prisma.liftRecords.update({
      where: { id: secondMaxLift.id },
      data: { is_max: true },
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
