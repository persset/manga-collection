import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";
import { hash } from "bcryptjs";

interface IUserRequest {
  id: string;
  name: string;
  email: string;
  admin?: boolean;
}

class UpdateUserService {
  async execute({ id, name, email, admin }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    if (!id) {
      throw new Error("Usuário não encontrado");
    }

    /**
     * Verifica se a informação de email está preenchida
     * Caso esteja verifica se a mesma já existe no banco de dados.
     * Caso ela exista retornar um erro pois o email deve ser unico.
     */
    if (email) {
      const emailAlreadyUsed = await userRepository.findOne({
        where: {
          id: !id,
          email: email,
        },
      });

      if (emailAlreadyUsed) {
        throw new Error("Usuário já existente");
      }
    }

    const user = userRepository.update(
      {
        id,
      },
      {
        name,
        email,
        admin,
      }
    );

    return user;
  }
}

export { UpdateUserService };
