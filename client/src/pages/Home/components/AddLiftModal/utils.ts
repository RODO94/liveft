import { addNewLift } from "../../../../requests/lifts";
import { Lift, LiftRecord } from "../../../../types/lifts";
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

export const addLiftToDatabase = async (liftName: string, liftId: string) => {
  const newLift: Lift = { id: liftId, name: liftName, slug: slugify(liftName) };
  const response = await addNewLift(newLift);
  if (!response.success) {
    console.error(response.error);
    return null;
  }

  return response.data.id;
};
