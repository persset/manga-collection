import { getCustomRepository } from "typeorm";
import { AuthorRepository } from "../../repositories/AuthorRepository";

interface IAuthorRequest {
  id: string;
  name: string;
}

class UpdateAuthorService {
  async execute({ id, name }: IAuthorRequest) {
    const authorRepository = getCustomRepository(AuthorRepository);

    if (!id) {
      throw new Error("Autor não encontrado");
    }

    const author = authorRepository.update(
      {
        id,
      },
      {
        name,
      }
    );

    return author;
  }
}

export { UpdateAuthorService };
