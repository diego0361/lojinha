import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("orders")
class Order {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  id_user: string;

  @Column()
  id_products: string;

  @Column()
  paynament_type: string;

  @Column()
  paynament_status: string;

  @Column()
  quantity: number;

  @Column()
  total_price: number;

  @Column()
  fiscal_note: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  update_at: string;
}
export default Order;
