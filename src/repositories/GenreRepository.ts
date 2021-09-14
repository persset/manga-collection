import { EntityRepository, Repository } from "typeorm";
import { Genre } from "../entities/Genre";

@EntityRepository(Genre)
class GenreRepository extends Repository<Genre> {}

export { GenreRepository };
