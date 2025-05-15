import { MemoizedLiftRecord } from "./LiftRecord";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import AddLiftModal from "./AddLiftModal/AddLiftModal";
import { ColouredButton } from "../../../ui/components/ColouredButton";
import { useLiftStore } from "../../../store/liftStore";
import { LiftRecord } from "../../../types/lifts";

export const LiftsSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [numberOfLiftsShown, setNumberOfLiftsShown] = useState(300);
  const { usersLifts } = useLiftStore();
  return (
    <Box display={"flex"} flexDirection='column' gap={3} width='100%'>
      <Typography variant='h1'>Lifts</Typography>
      <Box display={"flex"} flexDirection='column' gap={1}>
        {usersLifts &&
          usersLifts.map((lift: LiftRecord, index: number) => {
            if (numberOfLiftsShown <= index) return null;
            if (!lift.isMax) return null;
            return <MemoizedLiftRecord key={lift.id} lift={lift} />;
          })}
        <Box display={"flex"} gap={1} flexDirection='row' width='100%'>
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
          lifts={usersLifts}
        />
      </Box>
    </Box>
  );
};
