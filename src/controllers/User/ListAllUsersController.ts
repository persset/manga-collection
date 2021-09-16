import { Request, Response } from "express";
import { ListAllUsersService } from "../../services/User/ListAllUsersService";
class ListAllUsersController {
  async handle(request: Request, response: Response) {
    const listUserService = new ListAllUsersService();

    const users = await listUserService.execute();

    return response.json(users);
  }
}

export { ListAllUsersController };
