import AppError from "@src/shared/Error/AppError";
import { getCustomRepository } from "typeorm";

import User from '../typeorm/entities/User';
import { UsersRepository } from "../typeorm/repositories/UsersRepository";

interface Iprops {
    name: string
    age: number
    document: string
    password: string
    phone: string
}

export class CreateUserService {
    public async execute ({ name, age, document, password, phone }: Iprops): Promise<User> {
        const usersRepository = getCustomRepository(UsersRepository);

        const verify = await usersRepository.findByDocumentAndPasswordAndPhone({document, password, phone})

        if (verify) throw new AppError('Documento e telefone já cadastrados!');

        const user = usersRepository.create({
            name,
            age,
            document,
            password,
            phone
        })

        await usersRepository.save(user)

        return user;
    }
}