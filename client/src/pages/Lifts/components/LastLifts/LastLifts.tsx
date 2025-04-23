import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LiftRecord } from "../../../../types/lifts";
import { MemoizedLiftCard } from "./components/LiftCard";
import dayjs from "dayjs";

export default function LastLifts({ lifts }: { lifts: LiftRecord[] | null }) {
  /**
   * This component needs to have a date tracker
   * Show dates of lift records
   * Weight
   * Reps
   * Option to add a new record
   */

  return (
    <Box py={1.5} px={1.5}>
      <Box>
        <Typography variant="h1">Last lifts</Typography>
        <Typography variant="subtitle1">Most recent records</Typography>
      </Box>
      <Box display={"flex"} flexDirection={"row"} gap={1.5} py={1.5}>
        {lifts?.map(({ weight, date, reps, id }) => (
          <MemoizedLiftCard key={id} weight={weight} date={date} reps={reps} />
        ))}
        <MemoizedLiftCard
          weight={0}
          date={dayjs(Date.now()).toString()}
          isAddButton
        />
      </Box>
    </Box>
  );
}
