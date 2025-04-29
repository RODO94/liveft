import { RequestHandler } from "express";
import { z } from "zod";
import { prisma } from "../database.js";
import { parseUUID } from "./utils.js";
import { liftRecordsSchema } from "../types/liftRecords.js";
import { CreateReponse, UpdateReponse } from "../types/utils.js";
import { UUID } from "crypto";
import { LiftRecords } from "@prisma/client";

export const getUserRecords: RequestHandler = async (req, res) => {
  try {
    const userId = req.params.userId;
    z.string().parse(userId);
    const userLifts = await prisma.liftRecords.findMany({
      where: { user_id: userId },
    });

    liftRecordsSchema
      .array()
      .nonempty("No records can be found for this user")
      .parse(userLifts);

    res.status(200).send(userLifts);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).send(error.message);
    } else if (error instanceof Error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
};

export const getRecordById: RequestHandler = async (req, res) => {
  try {
    const recordId = req.params.recordId;
    z.string().parse(recordId);
    const targetLift = await prisma.liftRecords.findFirst({
      where: { id: recordId },
    });
    if (!targetLift) {
      res.status(400).send("Record could not be found");
    }
    res.status(200).send(targetLift);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).send(error.message);
    } else if (error instanceof Error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
};

export const addNewRecord: RequestHandler = async (req, res) => {
  try {
    const { userId, liftId } = req.params;
    parseUUID(userId, liftId);
    const newId = crypto.randomUUID();
    const parsedRequest = liftRecordsSchema.parse({
      ...req.body,
      id: newId,
      user_id: userId,
      lift_id: liftId,
    });

    await prisma.liftRecords.create({
      data: parsedRequest,
    });

    res.status(200).send({
      message: "Added a new record",
      id: newId,
    } satisfies CreateReponse<UUID>);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).send(error.message);
    } else if (error instanceof Error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
};

export const updateRecord: RequestHandler = async (req, res) => {
  try {
    const recordId = req.params.recordId;
    z.string().uuid().parse(recordId);

    const partialSchema = liftRecordsSchema.partial();
    const updatedRecord = partialSchema.parse(req.body);

    const newLiftRecord = await prisma.liftRecords.update({
      where: { id: recordId },
      data: updatedRecord,
    });

    res.status(200).send({
      message: "Updated record",
      data: newLiftRecord,
    } satisfies UpdateReponse<LiftRecords>);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).send(error.message);
    } else if (error instanceof Error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
};

export const deleteRecord: RequestHandler = async (req, res) => {
  // Deletes a record from the database
  try {
    const recordId = req.params.recordId;
    z.string().uuid().parse(recordId);
    const deletedRecord = await prisma.liftRecords.delete({
      where: { id: recordId },
    });

    if (!deletedRecord) {
      res.status(400).send("Record could not be found");
    }
    res
      .status(200)
      .send({ message: "Record deleted successfully", id: recordId });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).send(error.message);
    } else if (error instanceof Error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
};
