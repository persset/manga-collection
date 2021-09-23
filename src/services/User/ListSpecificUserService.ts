import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";
import { classToPlain } from "class-transformer";

class ListSpecificUserService {
  async execute(userID: string) {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.findOne({
      where: {
        id: userID,
      },
    });

    return classToPlain(user);
  }
}

export { ListSpecificUserService };
