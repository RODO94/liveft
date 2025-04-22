import Box from "@mui/material/Box";
import { BarDatum, ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import { responsiveBarData } from "./utils";
import { roryLifts } from "../../../../data/staticLiftData";

export default function ProgressChart() {
  const [lifts, setLifts] = useState<BarDatum[] | null>(null);

  useEffect(() => {
    if (!lifts) {
      setLifts(responsiveBarData(roryLifts));
    }
  }, [lifts]);

  if (lifts === null) return null;

  return (
    <Box minHeight={"100px"} minWidth={"100px"} height={"40vh"}>
      {
        <ResponsiveBar
          data={lifts}
          indexBy={"month"}
          keys={Object.keys(roryLifts)}
          margin={{ top: 10, right: 30, bottom: 50, left: 30 }}
          padding={0.5}
          innerPadding={0.5}
          axisLeft={null}
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
      }
    </Box>
  );
}
