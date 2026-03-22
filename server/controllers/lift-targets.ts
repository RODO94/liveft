import { RequestHandler } from "express";
import { prisma } from "../database.js";
import { liftTargetSchema, MappedLiftTarget } from "../types/liftTargets.js";
import { parseUUID } from "./utils.js";
import { CreateReponse, UpdateReponse } from "../types/utils.js";
import { UUID } from "crypto";
import { z } from "zod";
import { LiftTargets } from "../generated/prisma/index.js";

export const getTargetById: RequestHandler = async (req, res) => {
  // Fetch user records from the database
  const { userId, liftId } = req.params;
  const parsedUserId = z.string().parse(userId);
  const parsedLiftId = z.string().parse(liftId);
  parseUUID(parsedUserId, parsedLiftId);

  try {
    const liftTarget = await prisma.liftTargets.findFirst({
      where: { user_id: parsedUserId, lift_id: parsedLiftId },
    });

    if (!liftTarget) {
      res
        .status(404)
        .send({ message: "Lift target not found", userId: parsedUserId, liftId: parsedLiftId });
      return;
    }

    const mappedLiftTarget: MappedLiftTarget = {
      id: liftTarget.id,
      weight: liftTarget.weight,
      date: liftTarget.date,
      createdAt: liftTarget.created_at,
      liftId: liftTarget.lift_id,
      userId: liftTarget.user_id,
      status: liftTarget.status,
    };

    res.status(200).send({
      message: "Lift target retrieved successfully",
      data: mappedLiftTarget,
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
    const parsedUserId = z.string().parse(userId);
    const parsedLiftId = z.string().parse(liftId);
    parseUUID(parsedUserId, parsedLiftId);

    const newId = crypto.randomUUID();

    const requestedTarget = liftTargetSchema.parse({
      ...req.body,
      id: newId,
      user_id: parsedUserId,
      lift_id: parsedLiftId,
      created_at: new Date().toLocaleString("en-GB"),
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
    const parsedTargetId = z.string().parse(targetId);

    const partialSchema = liftTargetSchema.partial();
    const updatedTarget = partialSchema.parse(req.body);

    const updateResponse = await prisma.liftTargets.update({
      where: { id: parsedTargetId },
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
