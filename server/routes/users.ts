import express, { Router } from "express";
import { prisma } from "../database.js";

const router = express.Router();

router.get("/", async (_req, res) => {
  const users = await prisma.users.findMany();
  res.status(200).send(users);
});

export const userRoutes: Router = router;
