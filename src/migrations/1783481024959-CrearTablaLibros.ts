import { MigrationInterface, QueryRunner } from "typeorm";

export class CrearTablaLibros1783481024959 implements MigrationInterface {
    name = 'CrearTablaLibros1783481024959'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "libros" ("id" SERIAL NOT NULL, "titulo" character varying NOT NULL, "autor" character varying NOT NULL, "isbn" character varying NOT NULL, "disponible" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_1f65a5cca0c97aaaa54b0c83573" UNIQUE ("isbn"), CONSTRAINT "PK_63bdc208aaf1ed7e4df6dba27a6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "libros"`);
    }

}
