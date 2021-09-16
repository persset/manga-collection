import { CategoryRepository } from "../../repositories/CategoryRepository";
import { getCustomRepository } from "typeorm";

interface ICategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: ICategoryRequest) {
    const categoryRepository = getCustomRepository(CategoryRepository);

    const categoryAlreadyExists = await categoryRepository.findOne({
      name,
    });

    if (categoryAlreadyExists) {
      throw new Error("Categoria já cadastrada");
    }

    const category = categoryRepository.create({
      name,
    });

    await categoryRepository.save(category);

    return category;
  }
}

export { CreateCategoryService };
