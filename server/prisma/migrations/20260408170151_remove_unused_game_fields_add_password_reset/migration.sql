/*
  Warnings:

  - You are about to drop the column `finished_at` on the `guess_pokemon_games` table. All the data in the column will be lost.
  - You are about to drop the column `lootboxes_earned` on the `guess_pokemon_games` table. All the data in the column will be lost.
  - You are about to drop the column `finished_at` on the `guess_shiny_games` table. All the data in the column will be lost.
  - You are about to drop the column `lootboxes_earned` on the `guess_shiny_games` table. All the data in the column will be lost.
  - You are about to drop the column `finished_at` on the `pokedoku_games` table. All the data in the column will be lost.
  - You are about to drop the column `lootboxes_earned` on the `pokedoku_games` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "guess_pokemon_games" DROP COLUMN "finished_at",
DROP COLUMN "lootboxes_earned";

-- AlterTable
ALTER TABLE "guess_shiny_games" DROP COLUMN "finished_at",
DROP COLUMN "lootboxes_earned";

-- AlterTable
ALTER TABLE "pokedoku_games" DROP COLUMN "finished_at",
DROP COLUMN "lootboxes_earned";

-- CreateTable
CREATE TABLE "password_reset_tokens" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "token_hash" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "used_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "password_reset_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "password_reset_tokens_token_hash_key" ON "password_reset_tokens"("token_hash");

-- CreateIndex
CREATE INDEX "password_reset_tokens_id_user_idx" ON "password_reset_tokens"("id_user");

-- CreateIndex
CREATE INDEX "password_reset_tokens_expires_at_idx" ON "password_reset_tokens"("expires_at");

-- AddForeignKey
ALTER TABLE "password_reset_tokens" ADD CONSTRAINT "password_reset_tokens_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
