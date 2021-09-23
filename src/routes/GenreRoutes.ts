import { Router } from "express";
import { CreateGenreController } from "../controllers/Genre/CreateGenreController";
import { ListAllGenresController } from "../controllers/Genre/ListAllGenresController";

const createGenreController = new CreateGenreController();
const listAllGenresController = new ListAllGenresController();

const router = Router();

router.post("/genres", createGenreController.handle);
router.get("/genres", listAllGenresController.handle);

export { router as genreRouter };
