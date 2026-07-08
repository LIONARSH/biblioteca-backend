import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTelefonoToUsuario1783389132884 implements MigrationInterface {
    name = 'AddTelefonoToUsuario1783389132884'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "telefono" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "telefono"`);
    }

}
