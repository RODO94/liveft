import { useParams } from "@tanstack/react-router";
import { UserLiftTarget } from "../../../types/lifts";
import { useEffect, useState } from "react";
import { roryLiftTargets } from "../../../data/staticLiftTargets";
import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../../ui/theme";

export default function LiftTracker({
  numberOfLifts,
}: {
  numberOfLifts: number;
}) {
  /**
   * This component should have two boxes
   * One for the total number of lifts
   * One for the lift target for the year
   */
  const { liftId } = useParams({ strict: false });

  const [liftTarget, setLiftTarget] = useState<UserLiftTarget | null>(null);

  useEffect(() => {
    if (!liftTarget) {
      const filteredTargets = roryLiftTargets.filter(
        (target) => target.liftId === liftId
      );
      setLiftTarget(filteredTargets[0]);
    }
  }, [liftId, liftTarget]);

  console.log(liftTarget);
  return (
    <Box p={2}>
      <Box>
        <Typography variant="h1">Progress</Typography>
        <Typography variant="subtitle1">Stats on this lift</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "0.5rem",
            backgroundColor: theme.palette.primary.light,
            color: "black",
            p: "0.5rem",
            flexGrow: 1,
          }}
        >
          <Typography variant="h1">{numberOfLifts}</Typography>
          <Typography variant="body2" fontWeight={300}>
            Number of lifts
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "0.5rem",

            backgroundColor: theme.palette.primary.light,
            color: "black",
            p: "0.75rem 0.5rem",
            flexGrow: 1,
            position: "relative",
          }}
        >
          <Typography variant="h1">{`${liftTarget?.targetWeight} kg`}</Typography>
          <Typography variant="body2" fontWeight={300}>
            Current target
          </Typography>
          <Button
            color="secondary"
            sx={{
              position: "absolute",
              right: "0.5rem",
              top: "0.25rem",
              p: 0,
              minWidth: "0",
            }}
          >
            <Typography variant="body2" fontWeight={400} fontSize={"0.625rem"}>
              Change
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
