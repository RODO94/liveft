import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("User page");
});

export const userRoutes = router;
