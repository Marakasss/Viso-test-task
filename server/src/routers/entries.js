import { Router } from "express";
import { createEntryController } from "../controllers/createEntryController.js";
import { getEntriesController } from "../controllers/getEntriesController.js";
import { getSummaryController } from "../controllers/getSummaryController.js";
import { getProjectsController } from "../controllers/getProjectsController.js";
const router = Router();

router.post("/entries", createEntryController);
router.get("/entries", getEntriesController);
router.get("/entries/summary", getSummaryController);
router.get("/projects", getProjectsController);

export default router;
