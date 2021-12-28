import { Entity, EntityRepository, Repository } from "typeorm";
import Order from "../entities/Order";

interface Iprops {
  id_user: string;
  id_products: string;
  paynament_type: string;
  paynament_status: string;
  quantity: number;
  total_price: number;
  fiscal_note: string;
}

@EntityRepository(Order)
export class OrdersRepository extends Repository<Order> {
  public async findById(id: number) {
    const order = await this.findOne({
      where: {
        id,
      },
    });

    return order;
  }

  public async findByIdUser(id_user: string) {
    const order = await this.findOne({
      where: {
        id_user,
      },
    });

    return order;
  }

  public async findByIdProducts(id_products: string) {
    const order = await this.findOne({
      where: {
        id_products,
      },
    });

    return order;
  }

  public async findByPaynamentType(paynament_type: string) {
    const order = await this.findOne({
      where: {
        paynament_type,
      },
    });

    return order;
  }

  public async findByPaynamentStatus(paynament_status: string) {
    const order = await this.findOne({
      where: {
        paynament_status,
      },
    });

    return order;
  }

  public async findByQuantity(quantity: number) {
    const order = await this.findOne({
      where: {
        quantity,
      },
    });

    return order;
  }

  public async findByTotalPrice(total_price: number) {
    const order = await this.findOne({
      where: {
        total_price,
      },
    });

    return order;
  }

  public async findByFiscalNote(fiscal_note: string) {
    const order = await this.findOne({
      where: {
        fiscal_note,
      },
    });

    return order;
  }

  public async findByAllMethods({
    id_user,
    id_products,
    paynament_type,
    paynament_status,
    quantity,
    total_price,
    fiscal_note,
  }: Iprops) {
    const orderIdUser = await this.findByIdUser(id_user);
    if (orderIdUser) return true;

    const orderIdProducts = await this.findByIdProducts(id_products);
    if (orderIdProducts) return true;

    const orderPaynamentType = await this.findByPaynamentType(paynament_type);
    if (orderPaynamentType) return true;

    const orderPaynamentStatus = await this.findByPaynamentStatus(
      paynament_status
    );
    if (orderPaynamentStatus) return true;

    const orderQuantity = await this.findByQuantity(quantity);
    if (orderQuantity) return true;

    const orderTotalPrice = await this.findByTotalPrice(total_price);
    if (orderTotalPrice) return true;

    const orderFiscalNote = await this.findByFiscalNote(fiscal_note);
    if (orderFiscalNote) return true;

    return false;
  }
}
