import { AuthorRepository } from "../../repositories/AuthorRepository";
import { getCustomRepository } from "typeorm";

interface IAuthorRequest {
  name: string;
}

class CreateAuthorService {
  async execute({ name }: IAuthorRequest) {
    const authorRepository = getCustomRepository(AuthorRepository);

    const authorAlreadyExists = await authorRepository.findOne({
      name,
    });

    if (authorAlreadyExists) {
      throw new Error("Autor já cadastrado");
    }

    const author = authorRepository.create({
      name,
    });

    await authorRepository.save(author);

    return author;
  }
}

export { CreateAuthorService };
