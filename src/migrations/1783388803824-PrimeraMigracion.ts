import { MigrationInterface, QueryRunner } from "typeorm";

export class PrimeraMigracion1783388803824 implements MigrationInterface {
    name = 'PrimeraMigracion1783388803824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "edad" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "edad"`);
    }

}
