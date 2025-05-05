import Box from "@mui/material/Box";
import { BarDatum, ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import { responsiveBarData } from "./utils";
import { lifts } from "../../../../data/staticLiftData";
import { getUserLiftRecords } from "../../../../requests/liftRecords";
import { useNavigate } from "@tanstack/react-router";

export default function ProgressChart() {
  const [userLiftRecords, setUserLiftRecords] = useState<BarDatum[] | null>(
    null
  );
  const navigate = useNavigate();
  const userId = window.sessionStorage.getItem("userId");
  if (!userId) navigate({ to: "/" });
  useEffect(() => {
    const fetchLiftRecords = async () => {
      const response = await getUserLiftRecords(userId!);
      if (!response.success) return;
      setUserLiftRecords(responsiveBarData(response.data));
    };
    fetchLiftRecords();
  }, [userId]);

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
