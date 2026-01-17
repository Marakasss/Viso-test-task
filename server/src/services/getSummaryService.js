import { prisma } from "../../lib/prisma.ts";

export async function getSummaryService() {
  const entries = await prisma.timeEntry.findMany({
    orderBy: { date: "desc" },
  });

  const summaryMap = new Map();

  for (const entry of entries) {
    const dateKey = entry.date.toISOString().split("T")[0];
    const current = summaryMap.get(dateKey) || 0;
    summaryMap.set(dateKey, current + entry.hours);
  }

  const summary = Array.from(summaryMap.entries()).map(
    ([date, totalHours]) => ({
      date,
      totalHours,
    }),
  );

  const grandTotal = summary.reduce((sum, day) => sum + day.totalHours, 0);

  return { summary, grandTotal };
}
