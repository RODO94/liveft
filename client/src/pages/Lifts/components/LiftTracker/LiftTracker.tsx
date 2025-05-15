import { useParams } from "@tanstack/react-router";
import { LiftRecord, UserLiftTarget } from "../../../../types/lifts";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { getTargetById } from "../../../../requests/liftTargets";
import LiftProgressChart from "./components/LiftProgressChart";
import LiftStatsBoxes from "./components/LiftStatsBoxes";

export default function LiftTracker({
  numberOfLifts,
  liftRecords,
}: {
  numberOfLifts: number;
  liftRecords: LiftRecord[] | null;
}) {
  const { liftId } = useParams({ strict: false });
  const userId = window.sessionStorage.getItem("userId");

  const [liftTarget, setLiftTarget] = useState<UserLiftTarget | null>(null);

  useEffect(() => {
    const fetchLiftTargets = async () => {
      if (userId && liftId) {
        const response = await getTargetById(userId, liftId);
        if (response.success) {
          setLiftTarget(response.data);
        }
        if (!response.success) {
          console.error(response.error);
        }
      }
    };

    fetchLiftTargets();
  }, [liftId, userId]);

  return (
    <Box p={2}>
      <Box>
        <Typography variant='h1'>Progress</Typography>
        <Typography variant='subtitle1'>Stats on this lift</Typography>
      </Box>

      <LiftStatsBoxes numberOfLifts={numberOfLifts} liftTarget={liftTarget} />

      <Box minHeight={"100px"} minWidth={"100px"} height={"40vh"} py={2}>
        {liftRecords && (
          <LiftProgressChart
            liftRecords={liftRecords}
            liftTarget={liftTarget}
          />
        )}
      </Box>
    </Box>
  );
}
