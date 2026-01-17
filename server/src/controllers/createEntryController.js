import { createTimeEntryService } from "../services/createTimeEntryService.js";

export async function createEntryController(req, res, next) {
  try {
    const entry = await createTimeEntryService(req.body);
    res.status(201).json(entry);
  } catch (error) {
    next(error);
  }
}
