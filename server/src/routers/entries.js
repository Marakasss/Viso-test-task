import { Router } from "express";
import { createEntryController } from "../controllers/createEntryController.js";
import { getEntriesController } from "../controllers/getEntriesController.js";
import { getSummaryController } from "../controllers/getSummaryController.js";
import { getProjectsController } from "../controllers/getProjectsController.js";
import { getEntryByIdController } from "../controllers/getEntryByIdController.js";
import { deleteEntryController } from "../controllers/deleteEntryController.js";
const router = Router();

router.post("/entries", createEntryController);
router.get("/entries", getEntriesController);
router.get("/entries/summary", getSummaryController);
router.get("/projects", getProjectsController);
router.get("/entries/:id", getEntryByIdController);
router.delete("/entries/:id", deleteEntryController);

export default router;
