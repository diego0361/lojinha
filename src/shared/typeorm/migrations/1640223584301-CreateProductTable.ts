import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductTable1640223584301 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "bigserial",
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "shelf_life",
            type: "varchar",
            default: false,
          },
          {
            name: "price",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
          {
            name: "brand",
            type: "varchar",
          },
          {
            name: "stock",
            type: "integer",
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
    await queryRunner.dropTable("products");
  }
}
