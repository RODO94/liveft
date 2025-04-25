import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Lift records page");
});

export const liftRecordsRoutes = router;
