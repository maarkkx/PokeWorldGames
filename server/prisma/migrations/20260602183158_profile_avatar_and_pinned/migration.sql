-- AlterTable
ALTER TABLE "users" ADD COLUMN     "profile_bg_color" TEXT NOT NULL DEFAULT '#F1F1F1',
ADD COLUMN     "profile_pokemon_id" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "user_pinned_pokemon" (
    "id_user" INTEGER NOT NULL,
    "slot" INTEGER NOT NULL,
    "id_pokemon" INTEGER NOT NULL,

    CONSTRAINT "user_pinned_pokemon_pkey" PRIMARY KEY ("id_user","slot")
);

-- AddForeignKey
ALTER TABLE "user_pinned_pokemon" ADD CONSTRAINT "user_pinned_pokemon_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_pinned_pokemon" ADD CONSTRAINT "user_pinned_pokemon_id_pokemon_fkey" FOREIGN KEY ("id_pokemon") REFERENCES "pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
