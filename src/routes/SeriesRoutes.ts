import { Router } from "express";
import { CreateSeriesController } from "../controllers/Series/CreateSeriesController";
import { ListAllSeriesController } from "../controllers/Series/ListAllSeriesController";
import { ListSpecificSeriesController } from "../controllers/Series/ListSpecificSeriesController";

const createSeriesController = new CreateSeriesController();
const listAllSeriesController = new ListAllSeriesController();
const listSpecificSeriesController = new ListSpecificSeriesController();

const router = Router();

router.post("/series", createSeriesController.handle);
router.get("/series", listAllSeriesController.handle);
router.get("/series/:id", listSpecificSeriesController.handle);

export { router as seriesRouter };
