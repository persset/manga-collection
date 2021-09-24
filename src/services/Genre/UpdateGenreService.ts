import { getCustomRepository } from "typeorm";
import { GenreRepository } from "../../repositories/GenreRepository";

interface IGenreRequest {
  id: string;
  name: string;
}

class UpdateGenreService {
  async execute({ id, name }: IGenreRequest) {
    const genreRepository = getCustomRepository(GenreRepository);

    if (!id) {
      throw new Error("Gênero não encontrado");
    }

    const nameAlreadyUsed = await genreRepository.findOne({
      where: {
        name: name,
      },
    });

    if (nameAlreadyUsed) {
      throw new Error("Já existe um gênero com esse nome");
    }

    const genre = genreRepository.update(
      {
        id,
      },
      {
        name,
      }
    );

    return genre;
  }
}

export { UpdateGenreService };
