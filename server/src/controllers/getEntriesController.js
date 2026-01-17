import { getTimeEntriesService } from "../services/getTimeEntriesService.js";

export async function getEntriesController(req, res, next) {
  try {
    const entries = await getTimeEntriesService(req.query);
    res.json(entries);
  } catch (error) {
    next(error);
  }
}
