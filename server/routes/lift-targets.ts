import express, { Router } from "express";
import {
  addNewTarget,
  getTargetById,
  updateTarget,
} from "../controllers/lift-targets.js";

const router = express.Router();

/**
 * I need to be able to get a single lift target
 * I need to be able to update a single lift
 * I need to be able to add a lift target
 */

router
  .route("/user/:userId/lift/:liftId")
  .get(getTargetById)
  .post(addNewTarget);

router.put("/target/:targetId", updateTarget);
export const liftTargetRoutes: Router = router;
