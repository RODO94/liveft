import { ResponsiveBar } from "@nivo/bar";
import { LiftRecord, UserLiftTarget } from "../../../types/lifts";
import { theme } from "../../../ui/theme";
import { responsiveBarData } from "../../Home/components/Progress/utils";
import { Typography } from "@mui/material";

interface LiftProgressChartProps {
  liftRecords: LiftRecord[] | null;
  liftTarget: UserLiftTarget | null;
}

export default function LiftProgressChart({
  liftRecords,
  liftTarget,
}: LiftProgressChartProps) {
  if (!liftRecords || !liftRecords.length) {
    return <Typography>No lift records available</Typography>;
  }

  return (
    <>
      <Typography variant='subtitle1'>Lift weight per month</Typography>
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
    </>
  );
}
