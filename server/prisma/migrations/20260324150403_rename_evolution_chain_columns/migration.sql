/*
  Warnings:

  - The primary key for the `evolutive_chain` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_1` on the `evolutive_chain` table. All the data in the column will be lost.
  - You are about to drop the column `id_2` on the `evolutive_chain` table. All the data in the column will be lost.
  - Added the required column `from_pokemon_id` to the `evolutive_chain` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to_pokemon_id` to the `evolutive_chain` table without a default value. This is not possible if the table is not empty.

*/
BEGIN;

ALTER TABLE "evolutive_chain"
RENAME COLUMN "id_1" TO "from_pokemon_id";

ALTER TABLE "evolutive_chain"
RENAME COLUMN "id_2" TO "to_pokemon_id";

ALTER TABLE "evolutive_chain"
RENAME CONSTRAINT "evolutive_chain_id_1_fkey" TO "evolutive_chain_from_pokemon_id_fkey";

ALTER TABLE "evolutive_chain"
RENAME CONSTRAINT "evolutive_chain_id_2_fkey" TO "evolutive_chain_to_pokemon_id_fkey";

COMMIT;
