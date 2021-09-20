import { getCustomRepository } from "typeorm";
import { SeriesRepository } from "../../repositories/SeriesRepository";
import { classToPlain } from "class-transformer";

class ListSpecificSeriesService {
  async execute(seriesID: string) {
    const seriesRepository = getCustomRepository(SeriesRepository);

    const series = await seriesRepository.findOne({
      where: {
        id: seriesID,
      },
    });

    return classToPlain(series);
  }
}

export { ListSpecificSeriesService };
