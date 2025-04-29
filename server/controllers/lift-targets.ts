import { RequestHandler } from "express";
import { prisma } from "../database.js";
import { liftTargetSchema } from "../types/liftTargets.js";
import { parseUUID } from "./utils.js";
import { CreateReponse, UpdateReponse } from "../types/utils.js";
import { UUID } from "crypto";
import { z } from "zod";
import { LiftTargets } from "@prisma/client";

export const getTargetById: RequestHandler = async (req, res) => {
  // Fetch user records from the database
  const { userId, liftId } = req.params;

  parseUUID(userId, liftId);

  try {
    const liftTarget = await prisma.liftTargets.findFirst({
      where: { user_id: userId, lift_id: liftId },
    });

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

export const addNewTarget: RequestHandler = async (req, res) => {
  const { userId, liftId } = req.params;

  try {
    parseUUID(userId, liftId);

    const newId = crypto.randomUUID();

    const requestedTarget = liftTargetSchema.parse({
      ...req.body,
      id: newId,
      user_id: userId,
      lift_id: liftId,
    });

    await prisma.liftTargets.create({
      data: { ...requestedTarget, id: newId },
    });

    res.status(200).send({
      message: "New target has been created",
      id: newId,
    } satisfies CreateReponse<UUID>);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  }
};

export const updateTarget: RequestHandler = async (req, res) => {
  try {
    const targetId = req.params.targetId;
    z.string().uuid().parse(targetId);

    const partialSchema = liftTargetSchema.partial();
    const updatedTarget = partialSchema.parse(req.body);

    const updateResponse = await prisma.liftTargets.update({
      where: { id: targetId },
      data: { ...updatedTarget },
    });

    res.status(200).send({
      message: "New target has been updated",
      data: updateResponse,
    } satisfies UpdateReponse<LiftTargets>);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      res.status(500).send(error.message);
    }
  }
};
