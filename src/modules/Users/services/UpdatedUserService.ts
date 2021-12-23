import AppError from "@src/shared/Error/AppError";
import { getCustomRepository } from "typeorm";

import User from "../typeorm/entities/User";
import { UsersRepository } from "../typeorm/repositories/UsersRepository";

interface Iprops {
    name: string
    age: number
    document: string
    password: string
    phone: string
}

export class UpdateUserService {
    public async execute(id: number, { name, age, document, password, phone }: Iprops): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);
        const user = await usersRepository.findById(id);
        const verify = await usersRepository.findByDocumentAndPasswordAndPhone({ document, password, phone })

        if (!user) {
            throw new AppError('Usuário não existe!')
        }

        if (verify && (user.document !== document || user.phone !== phone))
            throw new AppError('Documento ou Telefone já estão cadastrados!');
        
        user.name = name || user.name
        user.age = age || user.age
        user.document = document || user.document
        user.password = password || user.password
        user.phone = phone || user.phone
        
        await usersRepository.update(id, user)

        return user;
    }
}

export default UpdateUserService;