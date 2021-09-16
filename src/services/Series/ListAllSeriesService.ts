import { getCustomRepository } from "typeorm";
import { SeriesRepository } from "../../repositories/SeriesRepository";
import { classToPlain } from "class-transformer";

class ListAllSeriesService {
  async execute() {
    const seriesRepository = getCustomRepository(SeriesRepository);

    const series = await seriesRepository.find();

    return classToPlain(series);
  }
}

export { ListAllSeriesService };
