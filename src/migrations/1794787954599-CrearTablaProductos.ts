import { MigrationInterface, QueryRunner } from "typeorm";

export class CrearTablaProductos1794787954599 implements MigrationInterface {
    name = 'CrearTablaProductos1794787954599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "productos" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "precio" numeric(10,2) NOT NULL DEFAULT '0', "stock" integer NOT NULL DEFAULT '0', "imagen" character varying, "estado" character varying DEFAULT 'COMPLETO', "categoria_id" integer, CONSTRAINT "PK_04f604609a0949a7f3b43400766" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "productos" ADD CONSTRAINT "FK_5aaee6054b643e7c778477193a3" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productos" DROP CONSTRAINT "FK_5aaee6054b643e7c778477193a3"`);
        await queryRunner.query(`DROP TABLE "productos"`);
    }

}
