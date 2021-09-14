import { getCustomRepository } from "typeorm";
import { SeriesRepository } from "../repositories/SeriesRepository";

interface IMangaRequest {
  name: string;
  publisher: string;
  author: string;
  country_of_origin: string;
  current_volumes: number;
  current_origin_volumes: number;
}

class CreateSeriesService {
  async execute({
    name,
    publisher,
    current_volumes,
    current_origin_volumes,
  }: IMangaRequest) {
    const mangaRepository = getCustomRepository(SeriesRepository);

    const mangaAlreadyExists = await mangaRepository.findOne({
      name,
    });

    if (mangaAlreadyExists) {
      throw new Error("Mangá já cadastrado");
    }

    const manga = mangaRepository.create({
      name,
      publisher,
      current_volumes,
      current_origin_volumes,
    });

    await mangaRepository.save(manga);

    return manga;
  }
}

export { CreateSeriesService };
