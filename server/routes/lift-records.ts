import express, { Router } from "express";
import {
  addNewRecord,
  deleteRecord,
  getRecordById,
  getUserRecords,
  updateRecord,
} from "../controllers/lift-records.js";

const router = express.Router();

/**
 * I will still need to add user level permissions
 * mostly for updating and deleting
 */

router.route("/user/:userId").get(getUserRecords);
router.route("/user/:userId/lift/:liftId").post(addNewRecord);

router
  .route("/record/:recordId")
  .put(updateRecord)
  .delete(deleteRecord)
  .get(getRecordById);

export const liftRecordsRoutes: Router = router;
