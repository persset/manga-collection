import { Request, Response } from "express";
import { ListAllCategoriesService } from "../../services/Category/ListAllCategoriesService";
class ListAllCategoriesController {
  async handle(request: Request, response: Response) {
    const listAllCategoriesService = new ListAllCategoriesService();

    const category = await listAllCategoriesService.execute();

    return response.json(category);
  }
}

export { ListAllCategoriesController };
