import { RequestHandler } from "express";

export const getAllLifts: RequestHandler = async (_req, res) => {
  res.status(200).json(res);
};

export const addNewLift: RequestHandler = async (_req, res) => {
  try {
    const newId = crypto.randomUUID();
    res.status(200).send({ message: "Lift added successfully", id: newId });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    }
  }
};
