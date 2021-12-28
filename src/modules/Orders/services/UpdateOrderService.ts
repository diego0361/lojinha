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

export class UpdateOrderService {
  public async execute(
    id: number,
    {
      id_user,
      id_products,
      paynament_type,
      paynament_status,
      quantity,
      total_price,
      fiscal_note,
    }: Iprops
  ): Promise<Order> {
    const ordersRepository = getCustomRepository(OrdersRepository);
    const order = await ordersRepository.findById(id);

    if (!order) {
      throw new Error("Order incorreta.");
    }

    order.id_user = id_user || order.id_user;
    order.id_products = id_products || order.id_products;
    order.paynament_type = paynament_type || order.paynament_type;
    order.paynament_status = paynament_status || order.paynament_status;
    order.quantity = quantity || order.quantity;
    order.total_price = total_price || order.total_price;
    order.fiscal_note = fiscal_note || order.fiscal_note;

    await ordersRepository.update(id, order);

    return order;
  }
}

export default UpdateOrderService;
