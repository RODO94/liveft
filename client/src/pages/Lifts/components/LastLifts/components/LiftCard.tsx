import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { LiftRecord } from "../../../../../types/lifts";
import CardWrapper from "./CardWrapper";
import { theme } from "../../../../../ui/theme";
import CardText from "./CardText";
import { memo, useState } from "react";

type BaseLiftCard = {
  isAddButton?: false;
  lift: LiftRecord;
};

type AddButtonProps = {
  isAddButton: true;
  lift?: null;
};

function LiftCard({
  lift,
  isAddButton = false,
}: BaseLiftCard | AddButtonProps) {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleOpenDialog = () => !openDialog && setOpenDialog(true);

  return (
    <Box
      component={"article"}
      display={"flex"}
      flexDirection={"column"}
      gap={"0.25rem"}
      onClick={handleOpenDialog}
    >
      <CardWrapper isAddButton={isAddButton}>
        <CardText
          isAddButton={isAddButton}
          fontWeight={600}
          text={daysOfWeek[dayjs(lift?.date).day()]}
        />
        <CardText
          isAddButton={isAddButton}
          fontWeight={400}
          text={dayjs(lift?.date).format("DD/MM")}
        />
      </CardWrapper>
      <CardWrapper isAddButton={isAddButton}>
        {isAddButton ? (
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
          >{`${lift?.weight} kg`}</Typography>
        )}
      </CardWrapper>
      {lift?.reps !== 0 && lift?.reps && (
        <CardWrapper>
          <Typography color="black" variant="body2" textAlign={"center"}>
            {`${lift?.reps} reps`}
          </Typography>
        </CardWrapper>
      )}
    </Box>
  );
}

export const MemoizedLiftCard = memo(LiftCard);
