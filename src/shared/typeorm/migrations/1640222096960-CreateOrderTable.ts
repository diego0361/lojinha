import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrderTable1640222096960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "orders",
        columns: [
          {
            name: "id",
            type: "bigserial",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "id_user",
            type: "varchar",
          },
          {
            name: "id_products",
            type: "varchar",
          },
          {
            name: "paynament_type",
            type: "varchar",
          },
          {
            name: "paynament_status",
            type: "varchar",
          },
          {
            name: "quantity",
            type: "bigint",
          },
          {
            name: "total_price",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "fiscal_note",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "update_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('orders')
  }
}
