import { getCustomRepository } from "typeorm";
import { MangaRepository } from "../repositories/MangaRepository";

interface IMangaRequest {
  name: string;
  publisher: string;
  current_volumes: number;
  current_origin_volumes: number;
}

class CreateMangaService {
  async exeecute({
    name,
    publisher,
    current_volumes,
    current_origin_volumes,
  }: IMangaRequest) {
    const mangaRepository = getCustomRepository(MangaRepository);

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

export { CreateMangaService };
