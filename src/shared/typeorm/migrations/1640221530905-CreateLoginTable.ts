import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLoginTable1640221530905 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "login",
        columns: [
          {
            name: "id_user",
            type: "varchar",
          },
          {
            name: "user_password",
            type: "varchar",
          },
          {
            name: "user_document",
            type: "varchar",
          },
          {
            name: "token",
            type: "varchar",
          },
          {
            name: "is_valid",
            type: "boolean",
            default: false
          },

        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("login");
  }
}
