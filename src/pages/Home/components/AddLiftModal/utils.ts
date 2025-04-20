import { lifts } from "../../../../data/staticLiftData";
import { LiftRecord } from "../../../../types/lifts";
import { UserBase } from "../../../../types/users";
import { slugify } from "../../../../utils";

export const checkMaxWeight = (
  liftId: LiftRecord["liftId"],
  userId: UserBase["id"],
  weight: number,
  lifts: LiftRecord[] | null
) => {
  if (!lifts) return { isMax: true };
  const maxLift = lifts.find(
    (lift) => lift.liftId === liftId && lift.userId === userId && lift.isMax
  );

  if (!maxLift) return { isMax: true };

  if (maxLift.weight < weight) {
    const updatedLiftRecords = lifts.map((lift) =>
      lift.id === maxLift.id ? { ...maxLift, isMax: false } : lift
    );
    return { updatedLiftRecords, isMax: true };
  }
  return { isMax: false };
};

export const addNewLift = (liftName: string) => {
  const liftId = `${Math.random().toPrecision(4)}`;
  lifts.push({
    id: liftId,
    name: liftName,
    slug: slugify(liftName),
  });

  return liftId;
};
