import { Request, Response } from "express";
import { AssignSeriesGenreService } from "../../services/AssignSeriesGenreService";

class AssignSeriesGenreController {
  async handle(request: Request, response: Response) {
    const { series_id, genre_id } = request.body;

    const assignSeriesGenreService = new AssignSeriesGenreService();

    const seriesGenre = await assignSeriesGenreService.execute({
      series_id,
      genre_id,
    });

    return response.json(seriesGenre);
  }
}

export { AssignSeriesGenreController };
