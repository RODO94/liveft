import Box from "@mui/material/Box";
import { BarDatum, ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import { responsiveBarData } from "./utils";
import { liftRecordsTable, lifts } from "../../../../data/staticLiftData";

export default function ProgressChart() {
  const [userLiftRecords, setUserLiftRecords] = useState<BarDatum[] | null>(
    null
  );
  const userId = window.sessionStorage.getItem("userId");

  useEffect(() => {
    if (!userLiftRecords) {
      const userLiftRecords = liftRecordsTable.filter(
        (lift) => lift.userId === userId
      );
      setUserLiftRecords(responsiveBarData(userLiftRecords));
    }
  }, [userLiftRecords, userId]);

  if (userLiftRecords === null) return null;

  return (
    <Box minHeight={"100px"} minWidth={"100px"} height={"40vh"}>
      {
        <ResponsiveBar
          data={userLiftRecords}
          indexBy={"month"}
          keys={lifts.map((lift) => lift.slug)}
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
