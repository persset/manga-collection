import { Request, Response } from "express";
import { CreateGenreService } from "../services/CreateGenreService";

class CreateGenreController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createGenreService = new CreateGenreService();

    const genre = await createGenreService.execute({
      name,
    });

    return response.json(genre);
  }
}

export { CreateGenreController };
