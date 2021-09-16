import { getCustomRepository } from "typeorm";
import { GenreRepository } from "../../repositories/GenreRepository";
import { classToPlain } from "class-transformer";

class ListAllGenresService {
  async execute() {
    const genreRepository = getCustomRepository(GenreRepository);

    const genre = await genreRepository.find();

    return classToPlain(genre);
  }
}

export { ListAllGenresService };
