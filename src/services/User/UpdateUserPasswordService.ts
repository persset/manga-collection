import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";
import { hash, compare } from "bcryptjs";

interface IUserRequest {
  id: string;
  oldPassword: string;
  newPassword: string;
}

class UpdateUserPasswordService {
  async execute({ id, oldPassword, newPassword }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const oldPasswordIsCorrect = await userRepository.findOne({
      where: {
        id: id,
        password: await hash(oldPassword, 8),
      },
    });

    if (oldPasswordIsCorrect === null) {
      throw new Error("Senha atual incorreta");
    }

    const user = userRepository.update(
      {
        id,
      },
      {
        password: await hash(newPassword, 8),
      }
    );

    return user;
  }
}

export { UpdateUserPasswordService };
