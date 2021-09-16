import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { classToPlain } from "class-transformer";

class ListAllUsersService {
  async execute() {
    const usersRepositories = getCustomRepository(UserRepository);

    const users = await usersRepositories.find();

    return classToPlain(users);
  }
}

export { ListAllUsersService };
