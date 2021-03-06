import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSeriesGenresTable1631626216166
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "series_genres",
        columns: [
          {
            name: "id",
            type: "varchar",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "series_id",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "genre_id",
            type: "varchar",
            isNullable: true,
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
        foreignKeys: [
          {
            name: "FK_seriesSeriesGenres",
            referencedTableName: "series",
            referencedColumnNames: ["id"],
            columnNames: ["series_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FK_genreSeriesGenres",
            referencedTableName: "genres",
            referencedColumnNames: ["id"],
            columnNames: ["genre_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("series_genres");
  }
}
