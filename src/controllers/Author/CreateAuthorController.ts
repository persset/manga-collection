import { Request, Response } from "express";
import { CreateAuthorService } from "../../services/CreateAuthorService";

class CreateAuthorController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createAuthorService = new CreateAuthorService();

    const author = createAuthorService.execute({
      name,
    });

    return response.json(author);
  }
}

export { CreateAuthorController };
