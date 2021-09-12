import { Request, Response } from "express";
import { CreateMangaService } from "../services/CreateMangaService";

class CreateMangaController {
  async handle(request, Request, response: Response) {
    const { name, publisher, current_volumes, current_origin_volumes } =
      request.body;

    const createMangaService = new CreateMangaService();

    const manga = await createMangaService.exeecute({
      name,
      publisher,
      current_origin_volumes,
      current_volumes,
    });

    return response.json(manga);
  }
}

export { CreateMangaController };
