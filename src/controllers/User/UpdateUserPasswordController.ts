import { Request, Response } from "express";
import { UpdateUserPasswordService } from "../../services/User/UpdateUserPasswordService";

class UpdateUserPasswordController {
  async handle(request: Request, response: Response) {
    const { oldPassword, newPassword } = request.body;
    const id = request.params.id;

    const updateUserPasswordService = new UpdateUserPasswordService();

    const user = await updateUserPasswordService.execute({
      id,
      oldPassword,
      newPassword,
    });

    return response.json(user);
  }
}

export { UpdateUserPasswordController };
