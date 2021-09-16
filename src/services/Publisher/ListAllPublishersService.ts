import { getCustomRepository } from "typeorm";
import { PublisherRepository } from "../../repositories/PublisherRepository";
import { classToPlain } from "class-transformer";

class ListAllPublishersService {
  async execute() {
    const publisherRepository = getCustomRepository(PublisherRepository);

    const publisher = await publisherRepository.find();

    return classToPlain(publisher);
  }
}

export { ListAllPublishersService };
