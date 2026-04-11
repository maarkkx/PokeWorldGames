/*
  Warnings:

  - You are about to drop the column `quantity` on the `pokemon_type` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pokemon_type" DROP COLUMN "quantity";

-- AlterTable
ALTER TABLE "user_pokemon" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 1;
