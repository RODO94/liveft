import { RequestHandler } from "express";

export const getAllLifts: RequestHandler = (_req, res) => {
  res.status(200).send("lifts");
};

export const addNewLift: RequestHandler = (_req, res) => {
  res.status(200).send("Add a new lift");
};
