import { MigrationInterface, QueryRunner } from 'typeorm';

export class parcelInit1672319795444 implements MigrationInterface {
  name = 'parcelInit1672319795444';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "parcels" (
                "id" SERIAL NOT NULL,
                "sku" character varying NOT NULL,
                "description" character varying NOT NULL,
                "shipping_street" character varying NOT NULL,
                "shipping_town" character varying NOT NULL,
                "shipping_country" character varying NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
                CONSTRAINT "PK_47847f79fee8a3926f2b3022a96" PRIMARY KEY ("id")
            )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "parcels"`);
  }
}
