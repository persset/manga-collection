import { Request, Response } from "express";
import { ListAllSeriesService } from "../../services/Series/ListAllSeriesService";
class ListAllSeriesController {
  async handle(request: Request, response: Response) {
    const listAllSeriesService = new ListAllSeriesService();

    const series = await listAllSeriesService.execute();

    return response.json(series);
  }
}

export { ListAllSeriesController };
