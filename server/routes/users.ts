import express, { Router } from "express";
import { database } from "../knexfile.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  const users = await database("users").select("*");
  res.status(200).json(users);
});

export const userRoutes: Router = router;
