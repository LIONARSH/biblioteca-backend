import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCategoriaToLibro1783486465155 implements MigrationInterface {
    name = 'AddCategoriaToLibro1783486465155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categorias" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, CONSTRAINT "PK_3886a26251605c571c6b4f861fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "libros" ADD "categoriaId" integer`);
        await queryRunner.query(`ALTER TABLE "libros" DROP CONSTRAINT "UQ_1f65a5cca0c97aaaa54b0c83573"`);
        await queryRunner.query(`ALTER TABLE "libros" ADD CONSTRAINT "FK_a8fdd15da3d237298d69c66d35e" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "libros" DROP CONSTRAINT "FK_a8fdd15da3d237298d69c66d35e"`);
        await queryRunner.query(`ALTER TABLE "libros" ADD CONSTRAINT "UQ_1f65a5cca0c97aaaa54b0c83573" UNIQUE ("isbn")`);
        await queryRunner.query(`ALTER TABLE "libros" DROP COLUMN "categoriaId"`);
        await queryRunner.query(`DROP TABLE "categorias"`);
    }

}
