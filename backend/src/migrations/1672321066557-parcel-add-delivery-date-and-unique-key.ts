import { MigrationInterface, QueryRunner } from 'typeorm';

export class parcelAddDeliveryDateAndUniqueKey1672321066557
  implements MigrationInterface
{
  name = 'parcelAddDeliveryDateAndUniqueKey1672321066557';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "parcels" ADD "delivery_date" TIMESTAMP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "parcels" ADD CONSTRAINT "UQ_c624ec34fe83db80fec519f976a" UNIQUE ("sku")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "parcels" DROP CONSTRAINT "UQ_c624ec34fe83db80fec519f976a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "parcels" DROP COLUMN "delivery_date"`,
    );
  }
}
