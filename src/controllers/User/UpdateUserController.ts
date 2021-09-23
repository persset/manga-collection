import { Request, Response } from "express";
import { UpdateUserService } from "../../services/User/UpdateUserService";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;
    const id = request.params.id;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({
      id,
      name,
      email,
      admin,
    });

    return response.json(user);
  }
}

export { UpdateUserController };
