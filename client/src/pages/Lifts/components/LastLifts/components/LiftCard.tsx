import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import { LiftRecord } from "../../../../../types/lifts";
import CardWrapper from "./CardWrapper";
import { theme } from "../../../../../ui/theme";
import CardText from "./CardText";
import { memo, useState } from "react";
import LiftModalBase from "../../../../../ui/components/LiftModal/LiftModalBase";
import LiftModalHeader from "../../../../../ui/components/LiftModal/LiftModalHeader";
import LiftModalActions from "../../../../../ui/components/LiftModal/LiftModalActions";
import LiftAutocomplete from "../../../../Home/components/AddLiftModal/LiftInput/LiftAutocomplete";
import { LiftInformationState } from "../../../../Home/components/AddLiftModal/AddLiftModal";
import TextInput from "../../../../../ui/components/TextInput";
import {
  deleteLiftRecord,
  updateLiftRecord,
} from "../../../../../requests/liftRecords";
import { useLiftStore } from "../../../../../store/liftStore";

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
  const [activeLift, setActiveLift] = useState<LiftInformationState>({
    id: lift?.liftId || "",
    name: lift?.liftName || "",
    slug: lift?.liftSlug || "",
    weight: lift?.weight || 0,
    reps: lift?.reps,
  });
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleOpenDialog = () => !openDialog && setOpenDialog(true);
  const { refreshStore } = useLiftStore.getState();

  const handleDelete = async () => {
    if (!lift?.id) return;
    const response = await deleteLiftRecord(lift?.id);

    if (response.success) {
      console.info("Lift deleted successfully");
      await refreshStore(activeLift.id);
      setOpenDialog(false);
    }
    if (!response.success) {
      console.error(response.error);
    }
  };

  const handleUpdate = async () => {
    if (!lift?.id) return;
    const response = await updateLiftRecord(lift?.id, {
      weight: activeLift.weight,
      reps: activeLift.reps,
      liftId: activeLift.id,
    });

    if (response.success) {
      console.info("Lift updated successfully");
      await refreshStore(activeLift.id);
      setOpenDialog(false);
    }

    if (!response.success) {
      console.error(response.error);
    }
  };

  if (!lift) return;

  return (
    <>
      {openDialog ? (
        <LiftModalBase
          open={openDialog}
          handleClose={() => {
            setOpenDialog(false);
          }}
        >
          <LiftModalHeader
            title='Alter your lift record'
            subtitle='Update or delete the record'
          >
            <LiftAutocomplete value={activeLift} setValue={setActiveLift} />
            <TextInput
              name='weight'
              value={activeLift.weight}
              onChange={(e) =>
                setActiveLift({ ...activeLift, weight: Number(e.target.value) })
              }
              label="Weight lifted in 'kg'"
            />
            <TextInput
              name='reps'
              value={activeLift?.reps || 0}
              onChange={(e) =>
                setActiveLift({
                  ...activeLift,
                  reps: Number(e.target.value),
                })
              }
              label='Number of reps'
            />
            <LiftModalActions
              actions={{
                cancel: () => setOpenDialog(false),
                delete: () => handleDelete(),
                update: () => handleUpdate(),
              }}
            />
          </LiftModalHeader>
        </LiftModalBase>
      ) : (
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
                  variant='body2'
                >
                  {"+ Add"}
                </Typography>{" "}
              </Button>
            ) : (
              <Typography
                color='black'
                textAlign={"center"}
                variant='body2'
              >{`${lift?.weight} kg`}</Typography>
            )}
          </CardWrapper>
          {lift?.reps !== 0 && lift?.reps && (
            <CardWrapper>
              <Typography color='black' variant='body2' textAlign={"center"}>
                {`${lift?.reps} reps`}
              </Typography>
            </CardWrapper>
          )}
        </Box>
      )}
    </>
  );
}

export const MemoizedLiftCard = memo(LiftCard);
