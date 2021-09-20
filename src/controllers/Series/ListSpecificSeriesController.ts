import { Request, Response } from "express";
import { ListSpecificSeriesService } from "../../services/Series/ListSpecificSeriesService";

class ListSpecificSeriesController {
  async handle(request: Request, response: Response) {
    const series_id = request.params.id;
    const listSpecificSeriesService = new ListSpecificSeriesService();

    const series = await listSpecificSeriesService.execute(series_id);

    return response.json(series);
  }
}

export { ListSpecificSeriesController };
