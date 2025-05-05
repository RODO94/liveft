import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { LiftRecord } from "../../../../../types/lifts";
import CardWrapper from "./CardWrapper";
import { theme } from "../../../../../ui/theme";
import CardText from "./CardText";
import { memo } from "react";
type LiftCardProps = Pick<LiftRecord, "date" | "reps" | "weight"> & {
  isAddButton?: boolean;
};

function LiftCard({ date, weight, reps, isAddButton = false }: LiftCardProps) {
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
            onClick={() => {}}
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
      {reps !== 0 && (
        <Typography color="black" textAlign={"center"}>
          {reps}
        </Typography>
      )}
    </Box>
  );
}

export const MemoizedLiftCard = memo(LiftCard);
