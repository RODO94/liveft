import { RequestHandler } from "express";

export const getTargetById: RequestHandler = (req, res) => {
  // Fetch user records from the database
  const { userId, liftId } = req.params;
  res.status(200).send(`${userId}, ${liftId}`);
};

export const addNewTarget: RequestHandler = (req, res) => {
  const { userId, liftId } = req.params;
  res.status(200).send(`${userId}, ${liftId}`);
};

export const updateTarget: RequestHandler = (req, res) => {
  const targetId = req.params;
  res.status(200).send(targetId);
};
