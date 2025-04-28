import express, { Router } from "express";
import { addNewLift, getAllLifts } from "../controllers/lifts.js";

const router = express.Router();

router.route("/").get(getAllLifts).post(addNewLift);

export const liftRoutes: Router = router;
