import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDetalleToCategoria1794546714192 implements MigrationInterface {
    name = 'AddDetalleToCategoria1794546714192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categorias" ADD "detalle" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categorias" DROP COLUMN "detalle"`);
    }

}
