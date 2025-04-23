import { createFileRoute } from "@tanstack/react-router";
import Lifts from "../pages/Lifts/Lifts";

export const Route = createFileRoute("/lift/$liftId")({
  component: Lifts,
});
