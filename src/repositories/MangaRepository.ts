import { EntityRepository, Repository } from "typeorm";
import { Manga } from "../entities/Manga";

@EntityRepository(Manga)
class MangaRepository extends Repository<Manga> {}

export { MangaRepository };
