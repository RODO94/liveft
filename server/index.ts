import express from "express";
import cors from "cors";

import { configDotenv } from "dotenv";
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

app.listen(PORT, () => {
  console.log(`running at ${process.env.BASE_URL}${PORT}`);
});
