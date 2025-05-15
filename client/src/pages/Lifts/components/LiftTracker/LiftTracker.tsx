import { useParams } from "@tanstack/react-router";
import { LiftRecord, UserLiftTarget } from "../../../../types/lifts";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  addNewTarget,
  getTargetById,
  updateTarget,
} from "../../../../requests/liftTargets";
import LiftProgressChart from "./components/LiftProgressChart";
import LiftStatsBoxes from "./components/LiftStatsBoxes";
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
  const [hadNoTarget, setHadNoTarget] = useState<boolean>(false);

  const baseTargetData: UserLiftTarget = {
    id: liftTarget?.id || crypto.randomUUID(),
    liftId: liftId || "",
    weight: liftTarget?.weight || 0,
    date: liftTarget?.date || dayjs(Date.now()).format("YYYY-MM-DD"),
    userId: userId || "",
    createdAt: liftTarget?.createdAt || dayjs(Date.now()).format("YYYY-MM-DD"),
  };

  useEffect(() => {
    const fetchLiftTargets = async () => {
      if (!userId || !liftId) return;

      const response = await getTargetById(userId, liftId);

      if (response.success) {
        setLiftTarget(response.data);
      } else if (response.error.status === 404) {
        setLiftTarget(null);
        setHadNoTarget(true);
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
    if (!liftTarget) {
      setLiftTarget({
        ...baseTargetData,
        [data]: value,
      });
    } else {
      setLiftTarget({
        ...liftTarget,
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

      <Box minHeight={"100px"} minWidth={"100px"} height={"40vh"} py={2}>
        {liftRecords && (
          <LiftProgressChart
            liftRecords={liftRecords}
            liftTarget={liftTarget}
          />
        )}
      </Box>
      <LiftModalBase
        open={openDialog}
        handleClose={() => {
          setOpenDialog(false);
        }}
      >
        <LiftModalHeader
          title={liftTarget ? "Change your lift target" : "Add a lift target"}
          subtitle='Set a target for your lift'
        >
          <TextInput
            name='target weight'
            value={liftTarget?.weight || ""}
            onChange={(e) => updateTargetData(Number(e.target.value), "weight")}
            label='Target weight'
          />
          <DateInput
            name='target date'
            value={liftTarget?.date || ""}
            onChange={(e) => updateTargetData(e.target.value, "date")}
            label='Target date'
          />
          <LiftModalActions
            actions={
              !hadNoTarget
                ? {
                    update: async () => {
                      console.info("Updating target...");
                      if (!userId || !liftId || !liftTarget) return;
                      try {
                        const response = await updateTarget(
                          liftTarget.id,
                          liftTarget
                        );
                        console.log(response);
                        if (response.success) {
                          console.info("Target updated successfully");
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
                      if (!userId || !liftId || !liftTarget) return;
                      try {
                        const response = await addNewTarget(
                          userId,
                          liftId,
                          liftTarget
                        );
                        console.log(response);
                        if (response.success) {
                          console.info("Target added successfully");
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
