import { prisma } from "../../lib/prisma.ts";

export async function createTimeEntryService({
  date,
  project,
  hours,
  description,
}) {
  if (!date || !project || hours === undefined || description === undefined) {
    throw new Error("All fields are required");
  }

  if (typeof hours !== "number" || hours <= 0) {
    throw new Error("Hours must be a positive number");
  }

  if (typeof description !== "string" || description.trim() === "") {
    throw new Error("Description is required");
  }

  const parsedDate = new Date(date);
  const startOfDay = new Date(parsedDate.setHours(0, 0, 0, 0));
  const endOfDay = new Date(parsedDate.setHours(23, 59, 59, 999));

  const existingEntries = await prisma.timeEntry.findMany({
    where: {
      date: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
  });

  const totalHours = existingEntries.reduce(
    (sum, entry) => sum + entry.hours,
    0,
  );

  if (totalHours + hours > 24) {
    throw new Error("Total hours for this date exceed 24");
  }

  return prisma.timeEntry.create({
    data: {
      date: parsedDate,
      project,
      hours,
      description,
    },
  });
}
