import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import StatsBox from "../../../../../ui/components/StatsBox";
import { UserLiftTarget } from "../../../../../types/lifts";

interface LiftStatsBoxesProps {
  numberOfLifts: number;
  liftTarget: UserLiftTarget | null;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LiftStatsBoxes({
  numberOfLifts,
  liftTarget,
  setOpenDialog,
}: LiftStatsBoxesProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
      <StatsBox>
        <Typography variant='h1'>{numberOfLifts}</Typography>
        <Typography variant='body2' fontWeight={300}>
          Number of lifts
        </Typography>
      </StatsBox>

      <StatsBox>
        <Typography variant='h1'>{`${liftTarget?.weight || 0} kg`}</Typography>
        <Typography variant='body2' fontWeight={300}>
          Current target
        </Typography>
        <Button
          color='secondary'
          onClick={() => setOpenDialog(true)}
          sx={{
            position: "absolute",
            right: "0.5rem",
            top: "0.25rem",
            p: 0,
            minWidth: "0",
          }}
        >
          <Typography variant='body2' fontWeight={400} fontSize={"0.625rem"}>
            Change
          </Typography>
        </Button>
      </StatsBox>
    </Box>
  );
}
