import { prisma } from "../../lib/prisma.ts";
import createHttpError from "http-errors";

export async function deleteEntryByIdService(id) {
  const numericId = Number(id);
  if (isNaN(numericId)) {
    throw new createHttpError.BadRequest("Invalid ID format");
  }

  const existing = await prisma.timeEntry.findUnique({
    where: { id: numericId },
  });

  if (!existing) {
    throw new createHttpError.NotFound("Time entry not found");
  }

  await prisma.timeEntry.delete({
    where: { id: numericId },
  });
}
