import { RequestHandler } from "express";

export const getUserRecords: RequestHandler = (req, res) => {
  // Fetch user records from the database
  const userId = req.params.userId;
  res.status(200).send(userId);
};

export const getRecordById: RequestHandler = (req, res) => {
  // Gets a single record based on id
  const { userId, liftId } = req.params;
  res.status(200).send(`${userId}, ${liftId} retrieved`);
};

export const addNewRecord: RequestHandler = (req, res) => {
  // Add a new record to the database
  // This will also need to accept a body for the new record
  const userId = req.params.userId;
  res.status(200).send(userId);
};

export const updateRecord: RequestHandler = (req, res) => {
  // Updates a record in the database
  // This will also need to accept a body for the updated record
  const { userId, liftId } = req.params;
  res.status(200).send(`${userId}, ${liftId} updated`);
};

export const deleteRecord: RequestHandler = (req, res) => {
  // Deletes a record from the database
  const { userId, liftId } = req.params;
  res.status(200).send(`${userId}, ${liftId} deleted`);
};
