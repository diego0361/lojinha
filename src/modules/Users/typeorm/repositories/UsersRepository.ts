import { Entity, EntityRepository, Repository } from "typeorm";

import User from "../entities/User";

interface Iprops {
  document: string;
  password: string;
  phone: string;
}

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  public async findById(id: number) {
    const user = await this.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByDocument(document: string) {
    const user = await this.findOne({
      where: {
        document,
      },
    });

    return user;
  }

  public async findByPassword(password: string) {
    const user = await this.findOne({
      where: {
        password,
      },
    });

    return user;
  }

  public async findByPhone(phone: string) {
    const user = await this.findOne({
      where: {
        phone,
      },
    });

    return user;
  }

  public async findByDocumentAndPasswordAndPhone({
    document,
    password,
    phone,
  }: Iprops) {
    const userDocument = await this.findByDocument(document);
    if (userDocument) return true;

    const userPassword = await this.findByPassword(password);
    if (userPassword) return true;

    const userPhone = await this.findByPhone(phone);
    if (userPhone) return true;

    return false;
  }
}
