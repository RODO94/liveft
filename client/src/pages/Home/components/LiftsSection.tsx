import { MemoizedLiftRecord } from "./LiftRecord";
import Typography from "@mui/material/Typography";
import { LiftRecord } from "../../../types/lifts";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import AddLiftModal from "./AddLiftModal/AddLiftModal";
import { ColouredButton } from "../../../ui/components/ColouredButton";
import { getUserLiftRecords } from "../../../requests/liftRecords";

export const LiftsSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [numberOfLiftsShown, setNumberOfLiftsShown] = useState(300);
  const [lifts, setLifts] = useState<LiftRecord[] | null>(null);
  const userId = window.sessionStorage.getItem("userId");

  useEffect(() => {
    const getLifts = async () => {
      if (userId) {
        const response = await getUserLiftRecords(userId);
        if (response.success) {
          const userLiftRecords = response.data.filter(
            (lift) => lift.userId === userId
          );
          setLifts(userLiftRecords);
        }
        if (!response.success) {
          console.error(response.error);
        }
      }
    };
    if (!lifts) getLifts();
  }, [userId, lifts]);

  return (
    <Box display={"flex"} flexDirection="column" gap={3} width="100%">
      <Typography variant="h1">Lifts</Typography>
      <Box display={"flex"} flexDirection="column" gap={1}>
        {lifts &&
          lifts.map((lift, index) => {
            if (numberOfLiftsShown <= index) return null;
            if (!lift.isMax) return null;
            return <MemoizedLiftRecord key={lift.id} lift={lift} />;
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
        />
      </Box>
    </Box>
  );
};
