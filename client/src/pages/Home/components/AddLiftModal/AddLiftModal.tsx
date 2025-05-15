import { useState } from "react";
import LiftAutocomplete from "./LiftInput/LiftAutocomplete";
import { Lift, LiftRecord } from "../../../../types/lifts";
import { SetStateFunction } from "../../../../types/utils";
import InputLabel from "@mui/material/InputLabel";
import { addLiftToDatabase, checkMaxWeight } from "./utils";
import { addNewLiftRecord } from "../../../../requests/liftRecords";
import { checkLiftExits } from "../../../../requests/lifts";
import { slugify } from "../../../../utils";
import LiftModalBase from "../../../../ui/components/LiftModal/LiftModalBase";
import LiftModalHeader from "../../../../ui/components/LiftModal/LiftModalHeader";
import LiftModalActions from "../../../../ui/components/LiftModal/LiftModalActions";
import TextInput from "../../../../ui/components/TextInput";
import { useLiftStore } from "../../../../store/liftStore";

export interface LiftInformationState
  extends Lift,
    Pick<LiftRecord, "weight" | "reps"> {}

const emptyLiftInformation: LiftInformationState = {
  id: "",
  name: "",
  slug: "",
  weight: 0,
  reps: 0,
};

export default function AddLiftModal({
  open,
  handleClose,
  lifts,
}: {
  open: boolean;
  handleClose: SetStateFunction<boolean>;
  lifts: LiftRecord[] | null;
}) {
  const [liftInformation, setLiftInformation] =
    useState<LiftInformationState>(emptyLiftInformation);

  const { fetchUsersLifts } = useLiftStore();

  const userId = window.sessionStorage.getItem("userId");

  if (!userId) return;

  const handleSubmit = async () => {
    // TODO: Add error handling
    if (!liftInformation) return;

    const { id, weight, reps, name } = liftInformation;

    if (!id || !weight) return;

    const doesNameExist = await checkLiftExits(slugify(name));
    const liftId = doesNameExist ? id : await addLiftToDatabase(name, id);
    if (!liftId) return;

    const { isMax } = checkMaxWeight(id, userId, weight, lifts);

    const newLiftToAdd: Pick<LiftRecord, "weight" | "date" | "reps" | "isMax"> =
      {
        weight: weight,
        date: new Date().toLocaleDateString("en-GB"),
        reps: reps || undefined,
        isMax: isMax,
      };

    await addNewLiftRecord(userId, liftId, newLiftToAdd);
    await fetchUsersLifts();
    resetAndCloseDialog();
  };

  const resetAndCloseDialog = () => {
    setLiftInformation(emptyLiftInformation);
    handleClose(false);
  };

  return (
    <>
      <LiftModalBase open={open} handleClose={handleClose}>
        <LiftModalHeader
          title='Add a new lift'
          subtitle='Fill in details of your lift'
        >
          <InputLabel htmlFor='lift-name' color='secondary'>
            Lift name
            <LiftAutocomplete
              value={liftInformation}
              setValue={setLiftInformation}
            />
          </InputLabel>
          <TextInput
            value={liftInformation?.weight}
            name='weight'
            onChange={(e) =>
              setLiftInformation({
                ...liftInformation,
                weight: Number(e.target.value),
              })
            }
            label="Weight lifted in 'kg'"
          />
          <TextInput
            name='reps'
            value={liftInformation?.reps || 0}
            onChange={(e) =>
              setLiftInformation({
                ...liftInformation,
                reps: Number(e.target.value),
              })
            }
            label='Number of reps'
          />
        </LiftModalHeader>
        <LiftModalActions
          actions={{ add: handleSubmit, cancel: () => handleClose(false) }}
        />
      </LiftModalBase>
    </>
  );
}
