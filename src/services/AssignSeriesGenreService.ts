import { SeriesGenreRepository } from "../repositories/SeriesGenreRepository";
import { getCustomRepository } from "typeorm";

interface ISeriesGenreRequest {
  series_id: string;
  genre_id: string;
}
class AssignSeriesGenreService {
  async execute({ series_id, genre_id }: ISeriesGenreRequest) {
    const seriesGenreRepository = getCustomRepository(SeriesGenreRepository);
    const seriesAlreadyHasGenre = await seriesGenreRepository.findOne({
      series_id,
      genre_id,
    });

    if (seriesAlreadyHasGenre) {
      throw new Error("Gênero já definido para esta série");
    }

    const seriesGenre = seriesGenreRepository.create({
      series_id,
      genre_id,
    });

    await seriesGenreRepository.save(seriesGenre);

    return seriesGenre;
  }
}

export { AssignSeriesGenreService };
