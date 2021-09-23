import { Router } from "express";
import { CreateAuthorController } from "./controllers/Author/CreateAuthorController";
import { ListAllAuthorsController } from "./controllers/Author/ListAllAuthorsController";
import { ListSpecificAuthorController } from "./controllers/Author/ListSpecificAuthorController";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { ListAllCategoriesController } from "./controllers/Category/ListAllCategoriesController";
import { CreateGenreController } from "./controllers/Genre/CreateGenreController";
import { ListAllGenresController } from "./controllers/Genre/ListAllGenresController";
import { CreatePublisherController } from "./controllers/Publisher/CreatePublisherController";
import { ListAllPublishersController } from "./controllers/Publisher/ListAllPublishersController";
import { CreateSeriesController } from "./controllers/Series/CreateSeriesController";
import { ListAllSeriesController } from "./controllers/Series/ListAllSeriesController";
import { ListSpecificSeriesController } from "./controllers/Series/ListSpecificSeriesController";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { ListAllUsersController } from "./controllers/User/ListAllUsersController";
import { ListSpecificUserController } from "./controllers/User/ListSpecificUserController";

const router = Router();

//Objetos para controllers de usuários
const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const listSpecificUserController = new ListSpecificUserController();
//Objetos para controllers das obras
const createSeriesController = new CreateSeriesController();
const listAllSeriesController = new ListAllSeriesController();
const listSpecificSeriesController = new ListSpecificSeriesController();

//Objetos para controllers dos gêneros
const createGenreController = new CreateGenreController();
const listAllGenresController = new ListAllGenresController();

//Objetos para controllers das editoras
const createPublisherController = new CreatePublisherController();
const listAllPublishersController = new ListAllPublishersController();

//Objetos para controllers dos autores
const createAuthorController = new CreateAuthorController();
const listAllAuthorsController = new ListAllAuthorsController();
const listSpecificAuthorController = new ListSpecificAuthorController();

//Objetos para controllers das categorias
const createCategoryController = new CreateCategoryController();
const listAllCategoriesController = new ListAllCategoriesController();

//Rotas de Usuário
router.post("/users", createUserController.handle);
router.get("/users", listAllUsersController.handle);
router.get("/users/:id", listSpecificUserController.handle);

//Rotas de Series
router.post("/series", createSeriesController.handle);
router.get("/series", listAllSeriesController.handle);
router.get("/series/:id", listSpecificSeriesController.handle);

//Rotas de Generos
router.post("/genres", createGenreController.handle);
router.get("/genres", listAllGenresController.handle);

//Rotas para Editoras
router.post("/publishers", createPublisherController.handle);
router.get("/publishers", listAllPublishersController.handle);

//Rotas para Autores
router.post("/authors", createAuthorController.handle);
router.get("/authors", listAllAuthorsController.handle);
router.get("/authors/:id", listSpecificAuthorController.handle);

//Rotas para Categorias
router.post("/categories", createCategoryController.handle);
router.get("/categories", listAllCategoriesController.handle);

export { router };
