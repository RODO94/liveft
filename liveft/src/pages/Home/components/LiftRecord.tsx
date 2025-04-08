import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LiftNames, LiftWeight } from "../../../types/lifts";

interface LiftRecordProps {
  liftName: LiftNames;
  weight: LiftWeight;
}
export const LiftRecord = ({ liftName, weight }: LiftRecordProps) => {
  return (
    <Box>
      <Typography>{liftName}</Typography>
      <Typography>{weight}</Typography>
    </Box>
  );
};
