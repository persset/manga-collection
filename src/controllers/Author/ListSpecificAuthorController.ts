import { Request, Response } from "express";
import { ListSpecificAuthorService } from "../../services/Author/ListSpecificAuthorService";
class ListSpecificAuthorController {
  async handle(request: Request, response: Response) {
    const author_id = request.params.id;
    const listSpecificAuthorService = new ListSpecificAuthorService();

    const author = await listSpecificAuthorService.execute(author_id);

    return response.json(author);
  }
}

export { ListSpecificAuthorController };
