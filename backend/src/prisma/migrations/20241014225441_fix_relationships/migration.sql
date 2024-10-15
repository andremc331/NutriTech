/*
  Warnings:

  - You are about to drop the column `descricao` on the `Meta` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `Meta` table. All the data in the column will be lost.
  - You are about to alter the column `nome` on the `Usuario` table. The data in that column could be lost. The data in that column will be cast from `Text` to `Char(20)`.
  - Added the required column `metas` to the `Meta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metas_usuario_id` to the `Meta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Meta" DROP CONSTRAINT "Meta_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Meta" DROP COLUMN "descricao",
DROP COLUMN "usuarioId",
ADD COLUMN     "metas" TEXT NOT NULL,
ADD COLUMN     "metas_usuario_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "altura" DOUBLE PRECISION,
ADD COLUMN     "idade" INTEGER,
ADD COLUMN     "peso" DOUBLE PRECISION,
ADD COLUMN     "senha" VARCHAR(8) NOT NULL,
ALTER COLUMN "nome" DROP NOT NULL,
ALTER COLUMN "nome" SET DATA TYPE CHAR(20);

-- CreateTable
CREATE TABLE "Grupo" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Grupo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conta" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "ind_imc" DOUBLE PRECISION NOT NULL,
    "data_de_cadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Conta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Peso" (
    "id" SERIAL NOT NULL,
    "peso_usuario_id" INTEGER NOT NULL,
    "pesagem" DOUBLE PRECISION NOT NULL,
    "data_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Peso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cardapio" (
    "id" SERIAL NOT NULL,
    "cardapio_conta_id" INTEGER NOT NULL,
    "cardapio_preparacao" INTEGER NOT NULL,
    "alimento" CHAR(20) NOT NULL,
    "data_dos_cardapios" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cardapio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alimento" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(400) NOT NULL,
    "grupo_id" INTEGER NOT NULL,

    CONSTRAINT "Alimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preparacao" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,

    CONSTRAINT "Preparacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlimentoHasPreparacao" (
    "id" SERIAL NOT NULL,
    "alimento_id" INTEGER NOT NULL,
    "preparacao_id" INTEGER NOT NULL,
    "energia" DOUBLE PRECISION,
    "proteina" DOUBLE PRECISION,
    "lipidio" DOUBLE PRECISION,
    "carboidrato" DOUBLE PRECISION,
    "fibra" DOUBLE PRECISION,
    "colesterol" DOUBLE PRECISION,
    "agsaturado" DOUBLE PRECISION,
    "agmono" DOUBLE PRECISION,
    "agpoli" DOUBLE PRECISION,
    "aglinoleico" DOUBLE PRECISION,
    "aglinolenico" DOUBLE PRECISION,
    "agtranstotal" DOUBLE PRECISION,
    "acucartotal" DOUBLE PRECISION,
    "acucaradicao" DOUBLE PRECISION,
    "calcio" DOUBLE PRECISION,
    "magnesio" DOUBLE PRECISION,
    "manganes" DOUBLE PRECISION,
    "fosforo" DOUBLE PRECISION,
    "ferro" DOUBLE PRECISION,
    "sodio" DOUBLE PRECISION,
    "sodioadicao" DOUBLE PRECISION,
    "potassio" DOUBLE PRECISION,
    "cobre" DOUBLE PRECISION,
    "zinco" DOUBLE PRECISION,
    "selenio" DOUBLE PRECISION,
    "retinol" DOUBLE PRECISION,
    "vitamina_a" DOUBLE PRECISION,
    "tiamina" DOUBLE PRECISION,
    "riboflavina" DOUBLE PRECISION,
    "niacina" DOUBLE PRECISION,
    "niacina_ne" DOUBLE PRECISION,
    "piridoxina" DOUBLE PRECISION,
    "cobalamina" DOUBLE PRECISION,
    "folato" DOUBLE PRECISION,
    "vitamina_d" DOUBLE PRECISION,
    "vitamina_e" DOUBLE PRECISION,
    "vitamina_c" DOUBLE PRECISION,

    CONSTRAINT "AlimentoHasPreparacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Meta" ADD CONSTRAINT "Meta_metas_usuario_id_fkey" FOREIGN KEY ("metas_usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conta" ADD CONSTRAINT "Conta_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peso" ADD CONSTRAINT "Peso_peso_usuario_id_fkey" FOREIGN KEY ("peso_usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cardapio" ADD CONSTRAINT "Cardapio_cardapio_conta_id_fkey" FOREIGN KEY ("cardapio_conta_id") REFERENCES "Conta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cardapio" ADD CONSTRAINT "Cardapio_cardapio_preparacao_fkey" FOREIGN KEY ("cardapio_preparacao") REFERENCES "Preparacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alimento" ADD CONSTRAINT "Alimento_grupo_id_fkey" FOREIGN KEY ("grupo_id") REFERENCES "Grupo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlimentoHasPreparacao" ADD CONSTRAINT "AlimentoHasPreparacao_alimento_id_fkey" FOREIGN KEY ("alimento_id") REFERENCES "Alimento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlimentoHasPreparacao" ADD CONSTRAINT "AlimentoHasPreparacao_preparacao_id_fkey" FOREIGN KEY ("preparacao_id") REFERENCES "Preparacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
