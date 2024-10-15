/*
  Warnings:

  - You are about to drop the column `ind_imc` on the `Conta` table. All the data in the column will be lost.
  - You are about to drop the column `metas` on the `Meta` table. All the data in the column will be lost.
  - You are about to drop the column `metas_usuario_id` on the `Meta` table. All the data in the column will be lost.
  - You are about to drop the column `pesagem` on the `Peso` table. All the data in the column will be lost.
  - You are about to drop the column `peso_usuario_id` on the `Peso` table. All the data in the column will be lost.
  - You are about to drop the column `altura` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `idade` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `peso` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `usuarioId` to the `Meta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `Peso` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Meta" DROP CONSTRAINT "Meta_metas_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Peso" DROP CONSTRAINT "Peso_peso_usuario_id_fkey";

-- AlterTable
ALTER TABLE "Conta" DROP COLUMN "ind_imc";

-- AlterTable
ALTER TABLE "Meta" DROP COLUMN "metas",
DROP COLUMN "metas_usuario_id",
ADD COLUMN     "descricao" TEXT,
ADD COLUMN     "usuarioId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Peso" DROP COLUMN "pesagem",
DROP COLUMN "peso_usuario_id",
ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "altura",
DROP COLUMN "idade",
DROP COLUMN "nome",
DROP COLUMN "peso",
ALTER COLUMN "senha" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Meta" ADD CONSTRAINT "Meta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Peso" ADD CONSTRAINT "Peso_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
