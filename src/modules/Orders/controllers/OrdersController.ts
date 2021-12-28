import { Request, response, Response } from "express";
import { request } from "http";
import {
  CreateOrderService,
  DeleteOrderService,
  ListOrderService,
  ShowOrderService,
  UpdateOrderService,
} from "../services";

interface Data {
  id_user: string;
  id_products: string;
  paynament_type: string;
  paynament_status: string;
  quantity: number;
  total_price: number;
  fiscal_note: string;
}

export class OrdersController {
  public async index(req: Request, res: Response) {
    const listOrderService = new ListOrderService();

    const order = await listOrderService.execute();

    res.json(order);
  }

  public async create(req: Request, res: Response) {
    const {
      id_user,
      id_products,
      paynament_type,
      paynament_status,
      quantity,
      total_price,
      fiscal_note,
    } = req.body;

    const createOrderService = new CreateOrderService();

    const order = await createOrderService.execute({
      id_user,
      id_products,
      paynament_type,
      paynament_status,
      quantity,
      total_price,
      fiscal_note,
    });

    res.json(order);
  }

  public async update(req: Request, res: Response) {
    const {
      id_user,
      id_products,
      paynament_type,
      paynament_status,
      quantity,
      total_price,
      fiscal_note,
    } = req.body;
    const { id } = req.params;

    const updateOrderService = new UpdateOrderService();

    const order = await updateOrderService.execute(+id, {
      id_user,
      id_products,
      paynament_type,
      paynament_status,
      quantity,
      total_price,
      fiscal_note,
    });

    res.json(order);
  }

  public async show(req: Request, res: Response) {
    const { id } = req.params;

    const showOrderService = new ShowOrderService();

    const order = await showOrderService.execute(+id);

    res.json(order);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;

    const deleteOrderService = new DeleteOrderService();

    const order = await deleteOrderService.execute(+id);

    res.json(order);
  }
}
