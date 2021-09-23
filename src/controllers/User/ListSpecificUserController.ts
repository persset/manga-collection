import { Request, Response } from "express";
import { ListSpecificUserService } from "../../services/User/ListSpecificUserService";

class ListSpecificUserController {
  async handle(request: Request, response: Response) {
    const user_id = request.params.id;
    const listSpecificUserService = new ListSpecificUserService();

    const user = await listSpecificUserService.execute(user_id);

    return response.json(user);
  }
}

export { ListSpecificUserController };
