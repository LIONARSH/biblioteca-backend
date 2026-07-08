import { MigrationInterface, QueryRunner } from "typeorm";

export class RelacionUsuarioPersona1783474612006 implements MigrationInterface {
    name = 'RelacionUsuarioPersona1783474612006'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "persona" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "apellido" character varying, "usuarioId" integer, CONSTRAINT "REL_8a21418dd09f3db7e7aa588a2f" UNIQUE ("usuarioId"), CONSTRAINT "PK_13aefc75f60510f2be4cd243d71" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "persona" ADD CONSTRAINT "FK_8a21418dd09f3db7e7aa588a2f4" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "persona" DROP CONSTRAINT "FK_8a21418dd09f3db7e7aa588a2f4"`);
        await queryRunner.query(`DROP TABLE "persona"`);
    }

}
