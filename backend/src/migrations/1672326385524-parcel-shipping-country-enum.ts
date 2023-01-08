import { MigrationInterface, QueryRunner } from "typeorm";

export class parcelShippingCountryEnum1672326385524 implements MigrationInterface   {   
    name = 'parcelShippingCountryEnum1672326385524'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parcels" DROP COLUMN "delivery_date"`);
        await queryRunner.query(`ALTER TABLE "parcels" ADD "delivery_date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "parcels" DROP COLUMN "shipping_country"`);
        await queryRunner.query(`CREATE TYPE "public"."parcels_shipping_country_enum" AS ENUM('Estonia', 'Finland')`);
        await queryRunner.query(`ALTER TABLE "parcels" ADD "shipping_country" "public"."parcels_shipping_country_enum" NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "parcels" DROP COLUMN "shipping_country"`);
        await queryRunner.query(`DROP TYPE "public"."parcels_shipping_country_enum"`);
        await queryRunner.query(`ALTER TABLE "parcels" ADD "shipping_country" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "parcels" DROP COLUMN "delivery_date"`);
        await queryRunner.query(`ALTER TABLE "parcels" ADD "delivery_date" TIMESTAMP NOT NULL`);
    }

}
