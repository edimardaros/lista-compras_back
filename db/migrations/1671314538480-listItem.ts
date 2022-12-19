import { MigrationInterface, QueryRunner } from "typeorm";

export class listItem1671314538480 implements MigrationInterface {
    name = 'listItem1671314538480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item_list" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "item_list" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "item_list" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "item_list" ADD "item_desc" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item_list" ADD "qtd" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item_list" ADD "value" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item_list" ADD "promotion" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "item_list" ADD "status" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item_list" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "item_list" DROP COLUMN "promotion"`);
        await queryRunner.query(`ALTER TABLE "item_list" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "item_list" DROP COLUMN "qtd"`);
        await queryRunner.query(`ALTER TABLE "item_list" DROP COLUMN "item_desc"`);
        await queryRunner.query(`ALTER TABLE "item_list" ADD "active" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item_list" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item_list" ADD "email" character varying NOT NULL`);
    }

}
