import { getCustomRepository } from "typeorm";

import Order from "../typeorm/entities/Order";
import { OrdersRepository } from "../typeorm/repositories/OrdersRepository";

export class DeleteOrderService {
  public async execute(id: number): Promise<Order> {
    const ordersRepository = getCustomRepository(OrdersRepository);
    const order = await ordersRepository.findById(id);

    if (!order) {
      throw new Error("Usuário incorreto");
    }

    await ordersRepository.remove(order);

    return order;
  }
}
