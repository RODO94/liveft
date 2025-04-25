import express from "express";
import cors from "cors";

import { configDotenv } from "dotenv";
import { liftRoutes } from "./routes/lifts.js";
import { liftRecordsRoutes } from "./routes/lift-records.js";
import { liftTargetRoutes } from "./routes/lift-targets.js";
import { userRoutes } from "./routes/users.js";
// import knexConfig from "./knexfile.js";

const { parsed } = configDotenv();
const app = express();

app.use(express.json());
app.use(cors());
// const db = knexConfig;
const PORT = parsed?.PORT || 8080;

app.get("/", (_req, res) => {
  res.send("Hello World");
});

app.use("/lifts", liftRoutes);
app.use("/lift-records", liftRecordsRoutes);
app.use("/lift-targets", liftTargetRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`running at ${process.env.BASE_URL}${PORT}`);
});
