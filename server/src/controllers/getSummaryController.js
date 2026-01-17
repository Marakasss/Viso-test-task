import { getSummaryService } from "../services/getSummaryService.js";

export async function getSummaryController(req, res, next) {
  try {
    const result = await getSummaryService();
    res.json(result);
  } catch (error) {
    next(error);
  }
}
