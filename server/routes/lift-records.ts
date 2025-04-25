import express from "express";
import {
  addNewRecord,
  deleteRecord,
  getRecordById,
  getUserRecords,
  updateRecord,
} from "../controllers/lift-records.js";

const router = express.Router();

/**
 * I need to get lift records for a user
 * I don't need to get all lift records
 * I need to add a new lift record
 * I need to update an existing lift record
 * I need to delete a lift record
 */

router.route("/user/:userId").get(getUserRecords).post(addNewRecord);
router
  .route("/user/:userId/lift/:liftId")
  .get(getRecordById)
  .put(updateRecord)
  .delete(deleteRecord);

export const liftRecordsRoutes = router;
