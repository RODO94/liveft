import { useParams } from "@tanstack/react-router";
import { LiftRecord, UserLiftTarget } from "../../../types/lifts";
import { useEffect, useState } from "react";
import { roryLiftTargets } from "../../../data/staticLiftTargets";
import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../../ui/theme";
import { ResponsiveBar } from "@nivo/bar";
import { responsiveBarData } from "../../Home/components/Progress/utils";
import { liftRecordsTable, lifts } from "../../../data/staticLiftData";

export default function LiftTracker({
  numberOfLifts,
}: {
  numberOfLifts: number;
}) {
  const { liftId } = useParams({ strict: false });
  const userId = window.sessionStorage.getItem("user");

  const [liftTarget, setLiftTarget] = useState<UserLiftTarget | null>(null);
  const [liftRecords, setLiftRecords] = useState<LiftRecord[] | null>(null);

  useEffect(() => {
    if (!liftTarget || !liftRecords) {
      const filteredTargets = roryLiftTargets.filter(
        (target) => target.liftId === liftId
      );
      const filteredRecords = liftRecordsTable.filter(
        (lift) => lift.liftId === liftId && lift.userId === userId
      );
      setLiftTarget(filteredTargets[0]);
      setLiftRecords(filteredRecords);
    }
  }, [liftId, liftTarget, liftRecords, userId]);

  return (
    <Box p={2}>
      <Box>
        <Typography variant="h1">Progress</Typography>
        <Typography variant="subtitle1">Stats on this lift</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "0.5rem",
            backgroundColor: theme.palette.primary.light,
            color: "black",
            p: "0.5rem",
            flexGrow: 1,
          }}
        >
          <Typography variant="h1">{numberOfLifts}</Typography>
          <Typography variant="body2" fontWeight={300}>
            Number of lifts
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "0.5rem",

            backgroundColor: theme.palette.primary.light,
            color: "black",
            p: "0.75rem 0.5rem",
            flexGrow: 1,
            position: "relative",
          }}
        >
          <Typography variant="h1">{`${liftTarget?.targetWeight} kg`}</Typography>
          <Typography variant="body2" fontWeight={300}>
            Current target
          </Typography>
          <Button
            color="secondary"
            sx={{
              position: "absolute",
              right: "0.5rem",
              top: "0.25rem",
              p: 0,
              minWidth: "0",
            }}
          >
            <Typography variant="body2" fontWeight={400} fontSize={"0.625rem"}>
              Change
            </Typography>
          </Button>
        </Box>
      </Box>
      <Box minHeight={"100px"} minWidth={"100px"} height={"40vh"} py={2}>
        <Typography variant="subtitle1">Lift weight per month</Typography>

        {liftRecords && liftTarget && (
          <ResponsiveBar
            data={responsiveBarData(liftRecords)}
            indexBy={"month"}
            keys={lifts.map((lift) => lift.slug)}
            margin={{ top: 10, right: 0, bottom: 50, left: 0 }}
            padding={0.5}
            innerPadding={0.5}
            maxValue={liftTarget.targetWeight + 20}
            axisLeft={null}
            markers={[
              {
                axis: "y",
                value: 160,
                lineStyle: {
                  stroke: theme.palette.success.light,
                  strokeWidth: 4,
                },
              },
            ]}
            colors={{ scheme: "greys" }}
            axisBottom={{
              legendPosition: "middle",
              legendOffset: 32,
            }}
            theme={{
              axis: {
                ticks: {
                  text: {
                    fontSize: "12px",
                    fill: "white",
                  },
                },
              },
            }}
          />
        )}
      </Box>
    </Box>
  );
}
