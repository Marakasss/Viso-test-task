import { deleteEntryByIdService } from "../services/deleteEntryByIdService.js";

export async function deleteEntryController(req, res, next) {
  try {
    await deleteEntryByIdService(req.params.id);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
}
