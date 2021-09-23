import { Router } from "express";
import { CreatePublisherController } from "../controllers/Publisher/CreatePublisherController";
import { ListAllPublishersController } from "../controllers/Publisher/ListAllPublishersController";

const createPublisherController = new CreatePublisherController();
const listAllPublishersController = new ListAllPublishersController();

const router = Router();

router.post("/publishers", createPublisherController.handle);
router.get("/publishers", listAllPublishersController.handle);

export { router as publisherRouter };
