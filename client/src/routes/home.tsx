import { createFileRoute } from "@tanstack/react-router";
import { Home } from "../pages/Home/Home";
import { useLiftStore } from "../store/liftStore";

export const Route = createFileRoute("/home")({
  loader: async () => {
    const fetchUsersLifts = useLiftStore.getState().fetchUsersLifts;
    await fetchUsersLifts();
  },
  component: Home,
});
