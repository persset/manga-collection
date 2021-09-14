import { Request, Response } from "express";
import { CreateSeriesService } from "../../services/CreateSeriesService";

class CreateSeriesController {
  async handle(request: Request, response: Response) {
    const {
      name,
      publisher,
      author,
      country_of_origin,
      current_volumes,
      current_origin_volumes,
    } = request.body;

    const createSeriesService = new CreateSeriesService();

    const manga = await createSeriesService.execute({
      name,
      publisher,
      author,
      country_of_origin,
      current_origin_volumes,
      current_volumes,
    });

    return response.json(manga);
  }
}

export { CreateSeriesController };
