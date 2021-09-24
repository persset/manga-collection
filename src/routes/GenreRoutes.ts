import { Router } from "express";
import { CreateGenreController } from "../controllers/Genre/CreateGenreController";
import { ListAllGenresController } from "../controllers/Genre/ListAllGenresController";
import { UpdateGenreController } from "../controllers/Genre/UpdateGenreController";

const createGenreController = new CreateGenreController();
const listAllGenresController = new ListAllGenresController();
const updateGenreController = new UpdateGenreController();

const router = Router();

router.post("/genres", createGenreController.handle);
router.get("/genres", listAllGenresController.handle);
router.put("/genres/update/:id", updateGenreController.handle);

export { router as genreRouter };
