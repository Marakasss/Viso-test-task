import { prisma } from "../../lib/prisma.ts";
import createHttpError from "http-errors";

export async function getEntryByIdService(id) {
  const numericId = Number(id);
  if (isNaN(numericId)) {
    throw new createHttpError.BadRequest("Invalid ID format");
  }

  const entry = await prisma.timeEntry.findUnique({
    where: { id: numericId },
  });

  if (!entry) {
    throw new createHttpError.NotFound("Time entry not found");
  }

  return entry;
}
