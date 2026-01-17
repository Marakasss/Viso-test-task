import { getEntryByIdService } from "../services/getEntryByIdService.js";

export async function getEntryByIdController(req, res, next) {
  try {
    const entry = await getEntryByIdService(req.params.id);
    res.json(entry);
  } catch (error) {
    next(error);
  }
}
