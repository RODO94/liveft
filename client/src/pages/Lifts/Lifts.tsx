import LastLifts from "./components/LastLifts/LastLifts";
import LiftTracker from "./components/LiftTracker/LiftTracker";
import WeightSlider from "./components/WeightSlider";
import { Link, useNavigate } from "@tanstack/react-router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { theme } from "../../ui/theme";
import { useLiftStore } from "../../store/liftStore";

export default function Lifts() {
  const navigate = useNavigate();

  const { recordsForOneLift } = useLiftStore();
  const userId = window.sessionStorage.getItem("userId");

  if (!userId) navigate({ to: "/" });

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
          aria-label='back'
          style={{
            color: theme.palette.background.paper,
            padding: 4,
            position: "absolute",
            left: "1.25rem",
            top: "1.25rem",
          }}
        >
          <Link to='/home' style={{ color: "inherit" }}>
            <ArrowBackIcon />
          </Link>
        </IconButton>
        <Typography variant='h1'>{recordsForOneLift?.[0].liftName}</Typography>
      </Box>
      <LastLifts lifts={recordsForOneLift} />
      <WeightSlider
        maxWeight={recordsForOneLift?.find((lift) => lift.isMax)?.weight}
      />
      <LiftTracker
        liftRecords={recordsForOneLift}
        numberOfLifts={recordsForOneLift?.length || 0}
      />
    </main>
  );
}
