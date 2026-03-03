-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "xp" INTEGER NOT NULL,
    "lootboxes" INTEGER NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "generation" INTEGER NOT NULL,
    "url_images" TEXT,
    "legendary" BOOLEAN NOT NULL DEFAULT false,
    "myth" BOOLEAN NOT NULL DEFAULT false,
    "hp" INTEGER NOT NULL,
    "atk" INTEGER NOT NULL,
    "def" INTEGER NOT NULL,
    "spatk" INTEGER NOT NULL,
    "spdef" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,

    CONSTRAINT "pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_pokemon" (
    "id_user" INTEGER NOT NULL,
    "id_pokemon" INTEGER NOT NULL,

    CONSTRAINT "user_pokemon_pkey" PRIMARY KEY ("id_user","id_pokemon")
);

-- CreateTable
CREATE TABLE "pokemon_type" (
    "id_pokemon" INTEGER NOT NULL,
    "id_type" INTEGER NOT NULL,

    CONSTRAINT "pokemon_type_pkey" PRIMARY KEY ("id_pokemon","id_type")
);

-- CreateTable
CREATE TABLE "evolutive_chain" (
    "id_evolution_chain" INTEGER NOT NULL,
    "id_1" INTEGER NOT NULL,
    "id_2" INTEGER NOT NULL,
    "method" TEXT,
    "condition" TEXT,

    CONSTRAINT "evolutive_chain_pkey" PRIMARY KEY ("id_evolution_chain","id_1","id_2")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "types_name_key" ON "types"("name");

-- AddForeignKey
ALTER TABLE "user_pokemon" ADD CONSTRAINT "user_pokemon_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_pokemon" ADD CONSTRAINT "user_pokemon_id_pokemon_fkey" FOREIGN KEY ("id_pokemon") REFERENCES "pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_type" ADD CONSTRAINT "pokemon_type_id_pokemon_fkey" FOREIGN KEY ("id_pokemon") REFERENCES "pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_type" ADD CONSTRAINT "pokemon_type_id_type_fkey" FOREIGN KEY ("id_type") REFERENCES "types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evolutive_chain" ADD CONSTRAINT "evolutive_chain_id_1_fkey" FOREIGN KEY ("id_1") REFERENCES "pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evolutive_chain" ADD CONSTRAINT "evolutive_chain_id_2_fkey" FOREIGN KEY ("id_2") REFERENCES "pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;
