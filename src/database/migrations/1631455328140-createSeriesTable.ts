import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMangasTable1631455328140 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "series",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "publisher_id",
            type: "varchar",
          },
          {
            name: "author",
            type: "varchar",
          },
          {
            name: "country_of_origin",
            type: "varchar",
          },
          {
            name: "current_volumes",
            type: "integer",
          },
          {
            name: "current_origin_volumes",
            type: "integer",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("series");
  }
}
