import { Request, Response } from "express";
import { CreateSeriesService } from "../../services/Series/CreateSeriesService";

class CreateSeriesController {
  async handle(request: Request, response: Response) {
    const {
      name,
      publisher_id,
      author_id,
      country_of_origin,
      current_volumes,
      current_origin_volumes,
    } = request.body;

    const createSeriesService = new CreateSeriesService();

    const series = await createSeriesService.execute({
      name,
      publisher_id,
      author_id,
      country_of_origin,
      current_origin_volumes,
      current_volumes,
    });

    return response.json(series);
  }
}

export { CreateSeriesController };
