import { RequestHandler } from "express";
import { prisma } from "../database.js";
import { liftSchema } from "../types/lifts.js";
import { CreateReponse } from "../types/utils.js";
import { UUID } from "crypto";

export const getAllLifts: RequestHandler = async (_req, res) => {
  const allLifts = await prisma.lifts.findMany();
  res.status(200).send(allLifts);
};

export const addNewLift: RequestHandler = async (req, res) => {
  try {
    const requestedNewLift = liftSchema.parse(req.body);
    const newId = crypto.randomUUID();
    await prisma.lifts.create({
      data: {
        name: requestedNewLift.name,
        slug: requestedNewLift.slug,
        id: newId,
      },
    });
    res.status(200).send({
      message: "Lift added successfully",
      id: newId,
    } satisfies CreateReponse<UUID>);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).send(error.message);
    }
  }
};
