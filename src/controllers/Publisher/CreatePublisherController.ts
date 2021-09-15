import { Request, Response } from "express";
import { CreatePublisherService } from "../../services/CreatePublisherService";

class CreatePublisherController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createPublisherService = new CreatePublisherService();

    const publisher = await createPublisherService.execute({
      name,
    });

    return response.json(publisher);
  }
}

export { CreatePublisherController };
