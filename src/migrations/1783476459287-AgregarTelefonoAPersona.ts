import { MigrationInterface, QueryRunner } from "typeorm";

export class AgregarTelefonoAPersona1783476459287 implements MigrationInterface {
    name = 'AgregarTelefonoAPersona1783476459287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "telefono"`);
        await queryRunner.query(`ALTER TABLE "persona" ADD "telefono" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "persona" DROP COLUMN "telefono"`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "telefono" character varying`);
    }

}
