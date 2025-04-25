import { RequestHandler } from "express";
import { database } from "../knexfile.js";
import { liftSchema } from "../types/lifts.js";

export const getAllLifts: RequestHandler = async (_req, res) => {
  const allLifts = await database("lifts").select("*");
  res.status(200).json(allLifts);
};

export const addNewLift: RequestHandler = async (req, res) => {
  try {
    const newLift = liftSchema.parse(req.body);
    const newId = crypto.randomUUID();
    await database("lifts").insert({
      ...newLift,
      id: newId,
    });
    res.status(200).send({ message: "Lift added successfully", id: newId });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    }
  }
};
