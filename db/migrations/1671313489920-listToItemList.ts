import { MigrationInterface, QueryRunner } from "typeorm";

export class listToItemList1671313489920 implements MigrationInterface {
    name = 'listToItemList1671313489920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "item_list" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "active" boolean NOT NULL, "list_id" integer, CONSTRAINT "PK_e3cb6c22e692535555c28e501c5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item_list" ADD CONSTRAINT "FK_3eec5c2afe0855aafccf89ac3f9" FOREIGN KEY ("list_id") REFERENCES "list"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item_list" DROP CONSTRAINT "FK_3eec5c2afe0855aafccf89ac3f9"`);
        await queryRunner.query(`DROP TABLE "item_list"`);
    }

}
