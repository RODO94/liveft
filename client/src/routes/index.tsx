import { createFileRoute } from "@tanstack/react-router";
import Entrance from "../pages/Entrance/Entrance";

export const Route = createFileRoute("/")({
  component: Entrance,
});
