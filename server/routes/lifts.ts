import express, { Router } from "express";
import { addNewLift, getAllLifts } from "../controllers/lifts.js";

const router = express.Router();

/**
 * For this we need to get all the lifts
 * We need to be able to add a new one
 */

router.route("/").get(getAllLifts).post(addNewLift);

export const liftRoutes: Router = router;
