import express, { Router } from "express";
import {
  addNewTarget,
  getTargetById,
  updateTarget,
} from "../controllers/lift-targets.js";

const router = express.Router();

router
  .route("/user/:userId/lift/:liftId")
  .get(getTargetById)
  .post(addNewTarget);

router.put("/target/:targetId", updateTarget);
export const liftTargetRoutes: Router = router;
