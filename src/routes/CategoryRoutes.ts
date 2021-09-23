import { Router } from "express";
import { CreateCategoryController } from "../controllers/Category/CreateCategoryController";
import { ListAllCategoriesController } from "../controllers/Category/ListAllCategoriesController";

const createCategoryController = new CreateCategoryController();
const listAllCategoriesController = new ListAllCategoriesController();

const router = Router();

router.post("/categories", createCategoryController.handle);
router.get("/categories", listAllCategoriesController.handle);

export { router as categoryRouter };
