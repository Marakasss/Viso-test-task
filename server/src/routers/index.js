import { Router } from "express";
import entriesRouter from "./entries.js";

const router = Router();

router.use("/entries", entriesRouter);

export default router;
