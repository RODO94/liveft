import { RequestHandler } from "express";
import { database } from "../knexfile.js";

export const getTargetById: RequestHandler = async (req, res) => {
  // Fetch user records from the database
  const { userId, liftId } = req.params;
  try {
    const liftTarget = await database("lift_targets")
      .where({ user_id: userId, lift_id: liftId })
      .first();
    if (!liftTarget) {
      res
        .status(404)
        .send({ message: "Lift target not found", userId, liftId });
    }
    res.status(200).send({
      message: "Lift target retrieved successfully",
      data: liftTarget,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
};

export const addNewTarget: RequestHandler = (req, res) => {
  const { userId, liftId } = req.params;
  res.status(200).send(`${userId}, ${liftId}`);
};

export const updateTarget: RequestHandler = (req, res) => {
  const targetId = req.params;
  res.status(200).send(targetId);
};
