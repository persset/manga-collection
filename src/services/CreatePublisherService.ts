import { PublisherRepository } from "../repositories/PublisherRepository";
import { getCustomRepository } from "typeorm";

interface IPublisher {
  name: string;
}

class CreatePublisherService {
  async execute({ name }: IPublisher) {
    const publisherRepository = getCustomRepository(PublisherRepository);

    const publisherAlreadyExists = await publisherRepository.findOne({
      name,
    });

    if (publisherAlreadyExists) {
      throw new Error("Editora já cadastrada");
    }

    const publisher = publisherRepository.create({
      name,
    });

    await publisherRepository.save(publisher);

    return publisher;
  }
}

export { CreatePublisherService };
