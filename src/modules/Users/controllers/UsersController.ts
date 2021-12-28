import { Request, response, Response } from "express";
import {
  CreateUserService,
  DeleteUserService,
  ListUserService,
  ShowUserService,
  UpdateUserService,
} from "../services/index";

interface Data {
  name: string;
  age: number;
  document: string;
  password: string;
  phone: string;
}

export class UsersController {
  public async index(req: Request, res: Response) {
    const listUserService = new ListUserService();

    const user = await listUserService.execute();

    res.json(user);
  }

  public async create(req: Request, res: Response) {
    const { name, age, document, password, phone } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      age,
      document,
      password,
      phone,
    });

    res.json(user);
  }

  public async update(req: Request, res: Response) {
    const { name, age, document, password, phone } = req.body;
    const { id } = req.params;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute(+id, {
      name,
      age,
      document,
      password,
      phone,
    });

    res.json(user);
  }

  public async show(req: Request, res: Response) {
    const { id } = req.params;

    const showUserService = new ShowUserService();

    const user = await showUserService.execute(+id);

    res.json(user);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deleteUserService = new DeleteUserService();

    const user = await deleteUserService.execute(+id);

    res.json(user);
  }
}
