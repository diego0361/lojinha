import { getCustomRepository } from "typeorm";

import Order from "../typeorm/entities/Order";
import { OrdersRepository } from "../typeorm/repositories/OrdersRepository";

interface Iprops {
  id_user: string;
  id_products: string;
  paynament_type: string;
  paynament_status: string;
  quantity: number;
  total_price: number;
  fiscal_note: string;
}

export class CreateOrderService {
  public async execute({
    id_user,
    id_products,
    paynament_type,
    paynament_status,
    quantity,
    total_price,
    fiscal_note,
  }: Iprops): Promise<Order> {
    const ordersRepository = getCustomRepository(OrdersRepository);

    const orders = ordersRepository.create({
      id_user,
      id_products,
      paynament_type,
      paynament_status,
      quantity,
      total_price,
      fiscal_note,
    });

    await ordersRepository.save(orders);

    return orders;
  }
}
