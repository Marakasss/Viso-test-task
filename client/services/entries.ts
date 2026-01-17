import { api } from "./api";
import { TimeEntry, SummaryResponse } from "@/types/entry";

export const getEntries = async (): Promise<TimeEntry[]> => {
  const { data } = await api.get("/entries");
  return data;
};

export const createEntry = async (
  payload: Omit<TimeEntry, "id" | "createdAt">,
) => {
  const { data } = await api.post("/entries", payload);
  return data;
};

export const deleteEntry = async (id: number) => {
  await api.delete(`/entries/${id}`);
};

export const getSummary = async (): Promise<SummaryResponse> => {
  const { data } = await api.get("/entries/summary");
  return data;
};
