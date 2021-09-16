import { getCustomRepository } from "typeorm";
import { AuthorRepository } from "../../repositories/AuthorRepository";
import { classToPlain } from "class-transformer";

class ListAllAuthorsService {
  async execute() {
    const authorRepository = getCustomRepository(AuthorRepository);

    const author = await authorRepository.find();

    return classToPlain(author);
  }
}

export { ListAllAuthorsService };
