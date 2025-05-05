import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useState } from "react";
import LiftAutocomplete from "./LiftInput/LiftAutocomplete";
import { Lift, LiftRecord } from "../../../../types/lifts";
import { SetStateFunction } from "../../../../types/utils";
import { StyledTextField } from "../../../../ui/components/StyledTextField";
import InputLabel from "@mui/material/InputLabel";
import { addLiftToDatabase, checkMaxWeight } from "./utils";
import { addNewLiftRecord } from "../../../../requests/liftRecords";
import { checkLiftExits } from "../../../../requests/lifts";
import { slugify } from "../../../../utils";

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
    resetAndCloseDialog();
  };

  const resetAndCloseDialog = () => {
    setLiftInformation(emptyLiftInformation);
    handleClose(false);
  };

  return (
    <>
      <Dialog
        aria-hidden={!open}
        open={open}
        onClose={() => handleClose(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle variant="h2" color="black">
          Add a new lift
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <DialogContentText variant="body2">
            Fill in details of your lift
          </DialogContentText>
          <InputLabel htmlFor="lift-name" color="secondary">
            Lift name
            <LiftAutocomplete
              value={liftInformation}
              setValue={setLiftInformation}
            />
          </InputLabel>
          <InputLabel
            htmlFor="weight"
            id="weight-label"
            color="secondary"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            Weight lifted in 'kg'
            <StyledTextField
              aria-describedby="weight-label"
              autoFocus
              autoComplete="off"
              value={!liftInformation?.weight ? "" : liftInformation?.weight}
              onChange={(e) =>
                setLiftInformation({
                  ...liftInformation,
                  weight: Number(e.target.value),
                })
              }
              required
              id="weight"
              name="weight"
              type="text"
              fullWidth
              color="secondary"
            />
          </InputLabel>
          <InputLabel
            htmlFor="reps"
            id="rep"
            color="secondary"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            Number of reps
            <StyledTextField
              autoFocus
              value={!liftInformation?.reps ? "" : liftInformation?.reps}
              aria-describedby="reps-label"
              onChange={(e) =>
                setLiftInformation({
                  ...liftInformation,
                  reps: Number(e.target.value),
                })
              }
              id="reps"
              name="reps"
              type="text"
              fullWidth
              color="secondary"
            />
          </InputLabel>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Add lift
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
