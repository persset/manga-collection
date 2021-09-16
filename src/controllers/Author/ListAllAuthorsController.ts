import { Request, Response } from "express";
import { ListAllAuthorsService } from "../../services/Author/ListAllAuthorsService";
class ListAllAuthorsController {
  async handle(request: Request, response: Response) {
    const listAllAuthorsService = new ListAllAuthorsService();

    const author = await listAllAuthorsService.execute();

    return response.json(author);
  }
}

export { ListAllAuthorsController };
