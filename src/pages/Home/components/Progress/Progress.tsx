import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ProgressChart from "./ProgressChart";
export default function Progress() {
  return (
    <Box display={"flex"} flexDirection="column" gap={3} width="100%">
      <Typography variant="h1">Progress</Typography>
      <ProgressChart />
    </Box>
  );
}
