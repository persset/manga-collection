import { Request, Response } from "express";
import { ListAllGenresService } from "../../services/Genre/ListAllGenresService";
class ListAllGenresController {
  async handle(request: Request, response: Response) {
    const listAllGenresService = new ListAllGenresService();

    const genre = await listAllGenresService.execute();

    return response.json(genre);
  }
}

export { ListAllGenresController };
