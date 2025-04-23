import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useMemo, useState } from "react";
import { theme } from "../../../ui/theme";

export default function WeightSlider({
  maxWeight = 0,
}: {
  maxWeight?: number;
}) {
  const [percentage, setPercentage] = useState<number>(100);
  const calculatedWeight = useMemo(
    () => maxWeight * (percentage / 100),
    [percentage, maxWeight]
  );

  return (
    <Box p={2}>
      <Box>
        <Typography variant="h1">Weight</Typography>
        <Typography variant="subtitle1">Set the percentage</Typography>
      </Box>
      <Box display={"flex"} flex={"row"} gap={0} py={2}>
        <Box
          flexGrow={1}
          textAlign={"center"}
          bgcolor={theme.palette.secondary.dark}
          py={0.5}
          px={0.75}
          borderRadius={0.5}
        >
          <Typography>{`${percentage}%`}</Typography>
        </Box>
        <Box
          textAlign={"center"}
          color={"black"}
          bgcolor={theme.palette.primary.light}
          flexGrow={1}
          py={0.5}
          px={0.75}
          borderRadius={0.5}
        >
          <Typography>{`${calculatedWeight.toFixed(0)} kg`}</Typography>
        </Box>
      </Box>
      <Box>
        <Slider
          value={percentage}
          min={0}
          max={100}
          step={5}
          onChange={(_e, value) => setPercentage(value)}
          sx={{ color: theme.palette.primary.light }}
        />
      </Box>
    </Box>
  );
}
