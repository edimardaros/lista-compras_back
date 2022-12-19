import { MigrationInterface, QueryRunner } from "typeorm";

export class listAccounts1671314132462 implements MigrationInterface {
    name = 'listAccounts1671314132462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "list" DROP CONSTRAINT "FK_a842f768ec87a346b0ee61fabba"`);
        await queryRunner.query(`ALTER TABLE "list" RENAME COLUMN "user_id" TO "account_id"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "list" ADD CONSTRAINT "FK_0551736b610fc830b9d62483477" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "list" DROP CONSTRAINT "FK_0551736b610fc830b9d62483477"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "active" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "list" RENAME COLUMN "account_id" TO "user_id"`);
        await queryRunner.query(`ALTER TABLE "list" ADD CONSTRAINT "FK_a842f768ec87a346b0ee61fabba" FOREIGN KEY ("user_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
