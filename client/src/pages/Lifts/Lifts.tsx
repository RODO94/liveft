import { useEffect, useState } from "react";
import LastLifts from "./components/LastLifts/LastLifts";
import LiftTracker from "./components/LiftTracker";
import WeightSlider from "./components/WeightSlider";
import { Link, useNavigate, useParams } from "@tanstack/react-router";
import { LiftRecord } from "../../types/lifts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { theme } from "../../ui/theme";
import { getUserLiftRecords } from "../../requests/liftRecords";

export default function Lifts() {
  const [liftRecords, setLiftRecords] = useState<LiftRecord[] | null>(null);
  const navigate = useNavigate();

  const { liftId } = useParams({ strict: false });
  const userId = window.sessionStorage.getItem("userId");

  if (!userId) navigate({ to: "/" });
  useEffect(() => {
    const fetchUserLiftRecords = async () => {
      if (userId) {
        const response = await getUserLiftRecords(userId);
        if (response.success) {
          setLiftRecords(
            response.data.filter((record) => record.liftId === liftId)
          );
        }
      }
    };

    fetchUserLiftRecords();

    return () => {
      setLiftRecords(null);
    };
  }, [liftId, userId]);

  return (
    <main
      style={{
        background:
          "var(--primary--gradient, linear-gradient(180deg, #3454BE 0%, #0C0C0C 100%))",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={0.5}
        position={"relative"}
        component={"header"}
        p={2}
      >
        <IconButton
          aria-label="back"
          style={{
            color: theme.palette.background.paper,
            padding: 4,
            position: "absolute",
            left: "1.25rem",
            top: "1.25rem",
          }}
        >
          <Link to="/home" style={{ color: "inherit" }}>
            <ArrowBackIcon />
          </Link>
        </IconButton>
        <Typography variant="h1">{liftRecords?.[0].liftName}</Typography>
      </Box>
      <LastLifts lifts={liftRecords} />
      <WeightSlider
        maxWeight={liftRecords?.find((lift) => lift.isMax)?.weight}
      />
      <LiftTracker
        liftRecords={liftRecords}
        numberOfLifts={liftRecords?.length || 0}
      />
    </main>
  );
}
