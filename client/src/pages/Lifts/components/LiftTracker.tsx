import { useParams } from "@tanstack/react-router";
import { LiftRecord, UserLiftTarget } from "../../../types/lifts";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { theme } from "../../../ui/theme";
import { ResponsiveBar } from "@nivo/bar";
import { responsiveBarData } from "../../Home/components/Progress/utils";
import { getTargetById } from "../../../requests/liftTargets";

export default function LiftTracker({
  numberOfLifts,
  liftRecords,
}: {
  numberOfLifts: number;
  liftRecords: LiftRecord[] | null;
}) {
  const { liftId } = useParams({ strict: false });
  const userId = window.sessionStorage.getItem("userId");

  const [liftTarget, setLiftTarget] = useState<UserLiftTarget | null>(null);

  useEffect(() => {
    const fetchLiftTargets = async () => {
      if (userId && liftId) {
        const response = await getTargetById(userId, liftId);
        if (response.success) {
          setLiftTarget(response.data);
        }
        if (!response.success) {
          console.error(response.error);
        }
      }
    };

    fetchLiftTargets();
  }, [liftId, userId]);

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
          <Typography variant="h1">{`${
            liftTarget?.weight || 0
          } kg`}</Typography>
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

        {liftRecords && (
          <ResponsiveBar
            data={responsiveBarData(liftRecords)}
            indexBy={"month"}
            keys={[liftRecords[0].liftSlug]}
            margin={{ top: 10, right: 0, bottom: 50, left: 0 }}
            padding={0.5}
            innerPadding={0.5}
            maxValue={
              liftTarget ? liftTarget.weight + 20 : liftRecords[0].weight + 70
            }
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
