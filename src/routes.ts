import { Router } from "express";
import { CreateGenreController } from "./controllers/Genre/CreateGenreController";
import { CreatePublisherController } from "./controllers/Publisher/CreatePublisherController";
import { CreateSeriesController } from "./controllers/Series/CreateSeriesController";
import { CreateUserController } from "./controllers/User/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();
const createSeriesController = new CreateSeriesController();
const createGenreController = new CreateGenreController();
const createPublisherController = new CreatePublisherController();

//Rotas de Usuário
router.post("/users", createUserController.handle);

//Rotas de Series
router.post("/series", createSeriesController.handle);

//Rotas de Generos
router.post("/genres", createGenreController.handle);

//Rotas para Editoras
router.post("/publishers", createPublisherController.handle);

export { router };
