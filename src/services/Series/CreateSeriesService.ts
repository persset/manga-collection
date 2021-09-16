import { getCustomRepository } from "typeorm";
import { SeriesRepository } from "../../repositories/SeriesRepository";

interface ISeriesRequest {
  name: string;
  publisher_id: string;
  author_id: string;
  country_of_origin: string;
  current_volumes: number;
  current_origin_volumes: number;
}

class CreateSeriesService {
  async execute({
    name,
    publisher_id,
    author_id,
    country_of_origin,
    current_volumes,
    current_origin_volumes,
  }: ISeriesRequest) {
    const seriesRepository = getCustomRepository(SeriesRepository);

    const mangaAlreadyExists = await seriesRepository.findOne({
      name,
    });

    if (mangaAlreadyExists) {
      throw new Error("Mangá já cadastrado");
    }

    const series = seriesRepository.create({
      name,
      publisher_id,
      author_id,
      country_of_origin,
      current_volumes,
      current_origin_volumes,
    });

    await seriesRepository.save(series);

    return series;
  }
}

export { CreateSeriesService };
