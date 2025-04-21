import { Box, Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import { LiftRecord } from "../../../../../types/lifts";
import CardWrapper from "./CardWrapper";
import { theme } from "../../../../../ui/theme";
import CardText from "./CardText";
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
        <CardText
          isAddButton={isAddButton}
          fontWeight={600}
          text={daysOfWeek[dayjs(date).day()]}
        />
        <CardText
          isAddButton={isAddButton}
          fontWeight={400}
          text={dayjs(date).format("DD/MM")}
        />
      </CardWrapper>
      <CardWrapper isAddButton={Boolean(weight === 0)}>
        {weight === 0 ? (
          <Button
            sx={{
              padding: "0",
              color: theme.palette.primary.light,
              minWidth: "48px",
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.light,
              }}
              textAlign={"center"}
              variant="body2"
            >
              {"+ Add"}
            </Typography>{" "}
          </Button>
        ) : (
          <Typography
            color="black"
            textAlign={"center"}
            variant="body2"
          >{`${weight} kg`}</Typography>
        )}
      </CardWrapper>
      <Typography color="black" textAlign={"center"}>
        {reps}
      </Typography>
    </Box>
  );
}
