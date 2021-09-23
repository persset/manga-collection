import { Router } from "express";
import { CreateUserController } from "../controllers/User/CreateUserController";
import { ListAllUsersController } from "../controllers/User/ListAllUsersController";
import { ListSpecificUserController } from "../controllers/User/ListSpecificUserController";
import { UpdateUserController } from "../controllers/User/UpdateUserController";
import { UpdateUserPasswordController } from "../controllers/User/UpdateUserPasswordController";

const router = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const listSpecificUserController = new ListSpecificUserController();
const updateUserController = new UpdateUserController();
const updateUserPasswordController = new UpdateUserPasswordController();

router.post("/users", createUserController.handle);
router.get("/users", listAllUsersController.handle);
router.get("/users/:id", listSpecificUserController.handle);
router.put("/users/update/:id", updateUserController.handle);
router.put("/users/update-pass/:id", updateUserPasswordController.handle);

export { router as userRouter };
