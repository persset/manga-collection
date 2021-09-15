import { EntityRepository, Repository } from "typeorm";
import { Publisher } from "../entities/Publisher";

@EntityRepository(Publisher)
class PublisherRepository extends Repository<Publisher> {}

export { PublisherRepository };
