import { GenreRepository } from "../repositories/GenreRepository";
import { getCustomRepository } from "typeorm";

interface IGenreRequest {
  name: string;
}

class CreateGenreService {
  async execute({ name }: IGenreRequest) {
    const genreRepository = getCustomRepository(GenreRepository);
    const genreAlreadyExists = await genreRepository.findOne({
      name,
    });

    if (genreAlreadyExists) {
      throw new Error("Gênero já cadastrado");
    }

    const genre = genreRepository.create({
      name,
    });

    await genreRepository.save(genre);

    return genre;
  }
}

export { CreateGenreService };
