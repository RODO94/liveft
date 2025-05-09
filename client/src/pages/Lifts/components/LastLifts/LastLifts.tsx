import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LiftRecord } from "../../../../types/lifts";
import { MemoizedLiftCard } from "./components/LiftCard";

export default function LastLifts({ lifts }: { lifts: LiftRecord[] | null }) {
  return (
    <Box py={1.5} px={1.5}>
      <Box>
        <Typography variant="h1">Last lifts</Typography>
        <Typography variant="subtitle1">Most recent records</Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        gap={1.5}
        py={1.5}
      >
        {lifts?.map((lift) => (
          <MemoizedLiftCard lift={lift} key={lift.id} />
        ))}
        <MemoizedLiftCard isAddButton />
      </Box>
    </Box>
  );
}
