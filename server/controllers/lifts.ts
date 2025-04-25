import { RequestHandler } from "express";

export const getAllLifts: RequestHandler = (req, res) => {
  res.status(200).send("lifts");
};

export const addNewLift: RequestHandler = (req, res) => {
  res.status(200).send("Add a new lift");
};
