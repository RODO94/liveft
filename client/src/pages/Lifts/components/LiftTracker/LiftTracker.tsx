import { useParams } from "@tanstack/react-router";
import { LiftRecord, UserLiftTarget } from "../../../../types/lifts";
import { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  addNewTarget,
  getTargetById,
  updateTarget,
} from "../../../../requests/liftTargets";
import { LiftProgressChart } from "./components/LiftProgressChart";
import { LiftStatsBoxes } from "./components/LiftStatsBoxes";
import LiftModalBase from "../../../../ui/components/LiftModal/LiftModalBase";
import LiftModalHeader from "../../../../ui/components/LiftModal/LiftModalHeader";
import TextInput from "../../../../ui/components/TextInput";
import LiftModalActions from "../../../../ui/components/LiftModal/LiftModalActions";
import dayjs from "dayjs";
import DateInput from "../../../../ui/components/DateInput";

export default function LiftTracker({
  numberOfLifts,
  liftRecords,
}: {
  numberOfLifts: number;
  liftRecords: LiftRecord[] | null;
}) {
  const { liftId } = useParams({ strict: false });
  const userId = window.sessionStorage.getItem("userId");

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [liftTarget, setLiftTarget] = useState<UserLiftTarget | null>(null);
  const [newLiftTarget, setNewLiftTarget] = useState<UserLiftTarget | null>(
    null
  );

  const baseTargetData: UserLiftTarget = useMemo(() => {
    return {
      id: liftTarget?.id || crypto.randomUUID(),
      liftId: liftId || "",
      weight: liftTarget?.weight || 0,
      date: liftTarget?.date || dayjs(Date.now()).format("YYYY-MM-DD"),
      userId: userId || "",
      createdAt:
        liftTarget?.createdAt || dayjs(Date.now()).format("YYYY-MM-DD"),
    };
  }, [liftTarget, liftId, userId]);

  useEffect(() => {
    const fetchLiftTargets = async () => {
      if (!userId || !liftId) return;

      const response = await getTargetById(userId, liftId);

      if (response.success) {
        setLiftTarget(response.data);
      } else if (response.error.status === 404) {
        setLiftTarget(null);
      } else {
        console.error("Error fetching target:", response.error);
      }
    };

    fetchLiftTargets();
  }, [liftId, userId]);

  const updateTargetData = (
    value: string | number,
    data: "weight" | "date"
  ) => {
    if (!newLiftTarget) {
      setNewLiftTarget({
        ...baseTargetData,
        [data]: value,
      });
    } else {
      setNewLiftTarget({
        ...newLiftTarget,
        [data]: value,
      });
    }
  };

  return (
    <Box p={2}>
      <Box>
        <Typography variant='h1'>Progress</Typography>
        <Typography variant='subtitle1'>Stats on this lift</Typography>
      </Box>

      <LiftStatsBoxes
        setOpenDialog={setOpenDialog}
        numberOfLifts={numberOfLifts}
        liftTarget={liftTarget}
      />
      {liftRecords && (
        <LiftProgressChart liftRecords={liftRecords} liftTarget={liftTarget} />
      )}
      <LiftModalBase
        open={openDialog}
        handleClose={() => {
          setOpenDialog(false);
        }}
      >
        <LiftModalHeader
          title={
            newLiftTarget ? "Change your lift target" : "Add a lift target"
          }
          subtitle='Set a target for your lift'
        >
          <TextInput
            name='target weight'
            value={newLiftTarget?.weight || ""}
            onChange={(e) => updateTargetData(Number(e.target.value), "weight")}
            label='Target weight'
          />
          <DateInput
            name='target date'
            value={newLiftTarget?.date || ""}
            onChange={(e) => updateTargetData(e.target.value, "date")}
            label='Target date'
          />
          <LiftModalActions
            actions={
              !liftTarget
                ? {
                    update: async () => {
                      console.info("Updating target...");
                      if (!userId || !liftId || !newLiftTarget) return;
                      try {
                        const response = await updateTarget(
                          liftId,
                          newLiftTarget
                        );
                        if (response.success) {
                          console.info("Target updated successfully");
                          setLiftTarget(newLiftTarget);
                          setOpenDialog(false);
                        }
                        if (!response.success) {
                          console.error(
                            "Error updating target:",
                            response.error
                          );
                        }
                      } catch (error) {
                        console.error("Error updating target:", error);
                      }
                    },
                  }
                : {
                    add: async () => {
                      console.info("Updating target...");
                      if (!userId || !liftId || !newLiftTarget) return;
                      try {
                        const response = await addNewTarget(
                          userId,
                          liftId,
                          newLiftTarget
                        );
                        if (response.success) {
                          console.info("Target added successfully");
                          setLiftTarget(newLiftTarget);
                          setOpenDialog(false);
                        }
                        if (!response.success) {
                          console.error("Error adding target:", response.error);
                        }
                      } catch (error) {
                        console.error("Error adding target:", error);
                      }
                    },
                  }
            }
          />
        </LiftModalHeader>
      </LiftModalBase>
    </Box>
  );
}
