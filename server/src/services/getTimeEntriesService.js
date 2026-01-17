import { prisma } from "../../lib/prisma.ts";

export async function getTimeEntriesService({ date, project }) {
  const where = {};

  if (date) {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
      throw new Error("Invalid date format");
    }

    where.date = {
      gte: new Date(parsedDate.setHours(0, 0, 0, 0)),
      lte: new Date(parsedDate.setHours(23, 59, 59, 999)),
    };
  }

  if (project) {
    where.project = project;
  }

  return prisma.timeEntry.findMany({
    where,
    orderBy: { date: "desc" },
  });
}
