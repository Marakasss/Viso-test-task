import { getProjectsService } from "../services/getProjectsService.js";

export async function getProjectsController(req, res, next) {
  try {
    const projects = getProjectsService();
    res.json({ projects });
  } catch (error) {
    next(error);
  }
}
