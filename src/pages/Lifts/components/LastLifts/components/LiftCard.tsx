import { Box, Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import { LiftRecord } from "../../../../../types/lifts";
import CardWrapper from "./CardWrapper";
import { theme } from "../../../../../ui/theme";
export default function LiftCard({
  date,
  weight,
  reps,
  isAddButton = false,
}: Pick<LiftRecord, "date" | "reps" | "weight"> & { isAddButton?: boolean }) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <Box
      component={"article"}
      display={"flex"}
      flexDirection={"column"}
      gap={"0.25rem"}
    >
      <CardWrapper isAddButton={isAddButton}>
        <Typography
          color="black"
          textAlign={"center"}
          variant="body1"
          fontWeight={600}
        >
          {daysOfWeek[dayjs(date).day()]}
        </Typography>
        <Typography color="black" textAlign={"center"} variant="body1">
          {dayjs(date).format("DD/MM")}
        </Typography>
      </CardWrapper>
      {weight === 0 ? (
        <CardWrapper isAddButton={isAddButton}>
          <Button sx={{ padding: "0", color: theme.palette.primary.light }}>
            {"+ Add"}
          </Button>
        </CardWrapper>
      ) : (
        <CardWrapper>
          <Typography
            color="black"
            textAlign={"center"}
          >{`${weight} kg`}</Typography>
        </CardWrapper>
      )}
      <Typography color="black" textAlign={"center"}>
        {reps}
      </Typography>
    </Box>
  );
}
