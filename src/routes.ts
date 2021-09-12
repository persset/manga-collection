import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router();

const createUserController = new CreateUserController();

//Rotas de Usuário
router.post("/users", createUserController.handle);

export { router };
