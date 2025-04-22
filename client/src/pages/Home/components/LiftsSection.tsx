import { MemoizedLiftRecord } from "./LiftRecord";
import Typography from "@mui/material/Typography";
import { AllUserLifts, LiftNames } from "../../../types/lifts";
import { roryLifts } from "../../../data/staticLiftData";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import AddLiftModal from "./AddLiftModal/AddLiftModal";
import { ColouredButton } from "../../../ui/components/ColouredButton";

export const LiftsSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [numberOfLiftsShown, setNumberOfLiftsShown] = useState(3);
  const [lifts, setLifts] = useState<AllUserLifts | null>(null);

  useEffect(() => {
    if (!lifts) {
      setLifts(roryLifts);
    }
  }, [lifts]);

  return (
    <Box display={"flex"} flexDirection="column" gap={3} width="100%">
      <Typography variant="h1">Lifts</Typography>
      <Box display={"flex"} flexDirection="column" gap={1}>
        {lifts &&
          Object.keys(lifts).map((liftName, index) => {
            if (numberOfLiftsShown <= index) return null;
            if (lifts[liftName as LiftNames].length === 0) return null;
            return (
              <MemoizedLiftRecord
                key={liftName}
                lifts={lifts[liftName as LiftNames]}
              />
            );
          })}
        <Box display={"flex"} gap={1} flexDirection="row" width="100%">
          <ColouredButton
            fullWidth
            onClick={() => setNumberOfLiftsShown(numberOfLiftsShown + 3)}
          >
            ...see more
          </ColouredButton>
          <ColouredButton fullWidth onClick={() => setOpenModal(true)}>
            + add lift
          </ColouredButton>
        </Box>
        <AddLiftModal
          open={openModal}
          handleClose={setOpenModal}
          lifts={lifts}
          setLifts={setLifts}
        />
      </Box>
    </Box>
  );
};
