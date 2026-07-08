import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePrestamoTable1783488068774 implements MigrationInterface {
    name = 'CreatePrestamoTable1783488068774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "prestamos" ("id" SERIAL NOT NULL, "fechaPrestamo" TIMESTAMP NOT NULL DEFAULT now(), "fechaDevolucion" TIMESTAMP NOT NULL, "usuarioId" integer, "libroId" integer, CONSTRAINT "PK_3a2a5a8ed68438a02780b16c5b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "prestamos" ADD CONSTRAINT "FK_0574cf8428611b0a5195cec45cb" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "prestamos" ADD CONSTRAINT "FK_e359390ccffef967984aed04665" FOREIGN KEY ("libroId") REFERENCES "libros"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "prestamos" DROP CONSTRAINT "FK_e359390ccffef967984aed04665"`);
        await queryRunner.query(`ALTER TABLE "prestamos" DROP CONSTRAINT "FK_0574cf8428611b0a5195cec45cb"`);
        await queryRunner.query(`DROP TABLE "prestamos"`);
    }

}
