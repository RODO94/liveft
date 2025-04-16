import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { UserLift } from "../../../types/lifts";
import { theme } from "../../../ui/theme";
import { capitalize } from "@mui/material/utils";

interface LiftRecordProps {
  lifts: UserLift[];
}
export const LiftRecord = ({ lifts }: LiftRecordProps) => {
  const heaviestLift = lifts.sort((a, b) => b.weight - a.weight)[0];
  console.log(lifts);
  return (
    <Box
      display={"flex"}
      justifyContent="space-between"
      padding={1}
      alignItems={"center"}
      component={"article"}
      bgcolor={theme.palette.background.transparent}
    >
      <Typography variant="body1">{capitalize(heaviestLift.name)}</Typography>
      <Box
        display={"flex"}
        alignItems="center"
        py={0.5}
        px={0.5}
        bgcolor={theme.palette.primary.dark}
      >
        <Typography variant="body2">{`${heaviestLift.weight} kg`}</Typography>
      </Box>
    </Box>
  );
};
