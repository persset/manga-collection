import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepository";
import { classToPlain } from "class-transformer";

class ListAllCategoriesService {
  async execute() {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = await categoryRepository.find();

    return classToPlain(category);
  }
}

export { ListAllCategoriesService };
