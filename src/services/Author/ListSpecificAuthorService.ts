import { getCustomRepository } from "typeorm";
import { AuthorRepository } from "../../repositories/AuthorRepository";
import { classToPlain } from "class-transformer";

class ListSpecificAuthorService {
  async execute(authorID: string) {
    const authorRepository = getCustomRepository(AuthorRepository);

    const author = await authorRepository.findOne({
      where: {
        id: authorID,
      },
    });

    return classToPlain(author);
  }
}

export { ListSpecificAuthorService };
