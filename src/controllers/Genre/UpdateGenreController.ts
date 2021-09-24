import { Request, Response } from "express";
import { UpdateGenreService } from "../../services/Genre/UpdateGenreService";

class UpdateGenreController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const id = request.params.id;

    const updateGenreService = new UpdateGenreService();

    const genre = await updateGenreService.execute({
      id,
      name,
    });

    return response.json(genre);
  }
}

export { UpdateGenreController };
