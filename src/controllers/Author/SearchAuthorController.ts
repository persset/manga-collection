import { Request, Response } from "express";
import { SearchAuthorService } from "../../services/Author/SearchAuthorService";
class SearchAuthorController {
  async handle(request: Request, response: Response) {
    const author_id = request.params.id;
    const searchAuthorService = new SearchAuthorService();

    const author = await searchAuthorService.execute(author_id);

    return response.json(author);
  }
}

export { SearchAuthorController };
