import { EntityRepository, Repository } from "typeorm";
import { Series } from "../entities/Series";

@EntityRepository(Series)
class SeriesRepository extends Repository<Series> {}

export { SeriesRepository };
