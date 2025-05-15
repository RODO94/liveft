import { createFileRoute } from "@tanstack/react-router";
import Lifts from "../pages/Lifts/Lifts";
import { useLiftStore } from "../store/liftStore";

export const Route = createFileRoute("/lift/$liftId")({
  loader: async ({ params }) => {
    const { fetchRecordsForOneLift } = useLiftStore.getState();
    fetchRecordsForOneLift(params.liftId);
  },
  component: Lifts,
});
