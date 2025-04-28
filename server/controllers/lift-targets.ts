import { RequestHandler } from "express";

export const getTargetById: RequestHandler = async (req, res) => {
  // Fetch user records from the database
  const { userId, liftId } = req.params;
  try {
    console.log(userId, liftId);
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
