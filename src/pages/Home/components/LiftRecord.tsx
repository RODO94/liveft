import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { type LiftRecord } from "../../../types/lifts";
import { theme } from "../../../ui/theme";
import { memo } from "react";
import { getLiftName } from "../../../data/staticLiftData";

interface LiftRecordProps {
  lift: LiftRecord;
}
const LiftRecord = ({ lift }: LiftRecordProps) => {
  return (
    <Box
      display={"flex"}
      justifyContent="space-between"
      padding={1}
      alignItems={"center"}
      component={"article"}
      bgcolor={theme.palette.background.transparent}
    >
      <Typography variant="body1">{getLiftName(lift.liftId).name}</Typography>
      <Box
        display={"flex"}
        alignItems="center"
        py={0.5}
        px={0.5}
        bgcolor={theme.palette.primary.dark}
      >
        <Typography variant="body2">{`${lift.weight} kg`}</Typography>
      </Box>
    </Box>
  );
};

export const MemoizedLiftRecord = memo(LiftRecord);
