import { Request, Response } from "express";
import { ListAllPublishersService } from "../../services/Publisher/ListAllPublishersService";
class ListAllPublishersController {
  async handle(request: Request, response: Response) {
    const listAllPublishersService = new ListAllPublishersService();

    const publisher = await listAllPublishersService.execute();

    return response.json(publisher);
  }
}

export { ListAllPublishersController };
