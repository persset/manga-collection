import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AlterSeriesTableAddForeignKeys1631809492008
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "series",
      "publisher_id",
      new TableColumn({
        name: "publisher_id",
        type: "varchar",
        isNullable: true,
      })
    );

    await queryRunner.changeColumn(
      "series",
      "author",
      new TableColumn({
        name: "author_id",
        type: "varchar",
        isNullable: true,
      })
    );

    let foreignKey = new TableForeignKey({
      name: "FK_authorSeries",
      columnNames: ["author_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "authors",
      onDelete: "SET NULL",
    });

    await queryRunner.createForeignKey("series", foreignKey);

    foreignKey = new TableForeignKey({
      name: "FK_publisherSeries",
      columnNames: ["publisher_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "publishers",
      onDelete: "SET NULL",
    });

    await queryRunner.createForeignKey("series", foreignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
