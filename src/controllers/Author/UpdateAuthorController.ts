import { Request, Response } from "express";
import { UpdateAuthorService } from "../../services/Author/UpdateAuthorService";

class UpdateAuthorController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    const id = request.params.id;

    const updateAuthorService = new UpdateAuthorService();

    const author = await updateAuthorService.execute({
      id,
      name,
    });

    return response.json(author);
  }
}

export { UpdateAuthorController };
