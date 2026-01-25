import express from "express";
import cors from "cors";
import { liftRoutes } from "./routes/lifts.js";
import { liftRecordsRoutes } from "./routes/lift-records.js";
import { liftTargetRoutes } from "./routes/lift-targets.js";
import { userRoutes } from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.use("/lifts", liftRoutes);
app.use("/lift-records", liftRecordsRoutes);
app.use("/lift-targets", liftTargetRoutes);
app.use("/users", userRoutes);

export default app;
