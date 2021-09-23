import { Router } from "express";

import { CreateAuthorController } from "../controllers/Author/CreateAuthorController";
import { ListAllAuthorsController } from "../controllers/Author/ListAllAuthorsController";
import { ListSpecificAuthorController } from "../controllers/Author/ListSpecificAuthorController";
import { UpdateAuthorController } from "../controllers/Author/UpdateAuthorController";

const createAuthorController = new CreateAuthorController();
const listAllAuthorsController = new ListAllAuthorsController();
const listSpecificAuthorController = new ListSpecificAuthorController();
const updateAuthorController = new UpdateAuthorController();

const router = Router();

router.post("/authors", createAuthorController.handle);
router.get("/authors", listAllAuthorsController.handle);
router.get("/authors/:id", listSpecificAuthorController.handle);
router.put("/authors/update/:id", updateAuthorController.handle);

export { router as authorRouter };
