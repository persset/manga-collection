import { EntityRepository, Repository } from "typeorm";
import { SeriesGenres } from "../entities/SeriesGenres";

@EntityRepository(SeriesGenres)
class SeriesGenreRepository extends Repository<SeriesGenres> {}

export { SeriesGenreRepository };
