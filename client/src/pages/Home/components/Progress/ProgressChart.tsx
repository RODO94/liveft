import Box from "@mui/material/Box";
import { BarDatum, ResponsiveBar } from "@nivo/bar";
import { useEffect, useMemo, useState } from "react";
import { responsiveBarData } from "./utils";
import { getUserLiftRecords } from "../../../../requests/liftRecords";
import { useNavigate } from "@tanstack/react-router";
import { LiftRecord } from "../../../../types/lifts";

export default function ProgressChart() {
  const [userLiftRecords, setUserLiftRecords] = useState<LiftRecord[] | null>(
    null
  );
  const navigate = useNavigate();
  const userId = window.sessionStorage.getItem("userId");
  const uniqueSlugs = useMemo(() => {
    const splitIntoSlugs = userLiftRecords?.map((lift) => lift.liftSlug);
    return new Set(splitIntoSlugs);
  }, [userLiftRecords]);

  const liftBarData: BarDatum[] | null = useMemo(() => {
    return userLiftRecords && responsiveBarData(userLiftRecords);
  }, [userLiftRecords]);

  if (!userId) navigate({ to: "/" });

  useEffect(() => {
    const fetchLiftRecords = async () => {
      const response = await getUserLiftRecords(userId!);
      if (!response.success) return;
      setUserLiftRecords(response.data);
    };
    fetchLiftRecords();
  }, [userId]);

  if (userLiftRecords === null) return null;

  return (
    <Box minHeight={"100px"} minWidth={"100px"} height={"40vh"}>
      {userLiftRecords && liftBarData && (
        <ResponsiveBar
          data={liftBarData}
          indexBy={"month"}
          keys={[...uniqueSlugs]}
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
      )}
    </Box>
  );
}
