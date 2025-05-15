import { createFileRoute } from "@tanstack/react-router";
import Lifts from "../pages/Lifts/Lifts";
import { useLiftStore } from "../store/liftStore";

export const Route = createFileRoute("/lift/$liftId")({
  loader: async ({ params }) => {
    console.info("Loading lift data for liftId:", params.liftId);
    const { fetchRecordsForOneLift, usersLifts, fetchUsersLifts } =
      useLiftStore.getState();
    if (!usersLifts.length) {
      await fetchUsersLifts();
    }
    await fetchRecordsForOneLift(params.liftId);
  },
  component: Lifts,
});
