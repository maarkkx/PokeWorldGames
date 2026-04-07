-- CreateEnum
CREATE TYPE "GameStatus" AS ENUM ('ACTIVE', 'WON', 'LOST', 'ABANDONED');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "lootboxes" INTEGER NOT NULL DEFAULT 0,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "refresh_token" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemon" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "generation" INTEGER NOT NULL,
    "url_image" TEXT,
    "url_shiny_image" TEXT,
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
    "from_pokemon_id" INTEGER NOT NULL,
    "to_pokemon_id" INTEGER NOT NULL,
    "method" TEXT,
    "condition" TEXT,

    CONSTRAINT "evolutive_chain_pkey" PRIMARY KEY ("id_evolution_chain","from_pokemon_id","to_pokemon_id")
);

-- CreateTable
CREATE TABLE "guess_pokemon_games" (
    "id" SERIAL NOT NULL,
    "id_game" TEXT NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_pokemon" INTEGER NOT NULL,
    "max_attempts" INTEGER NOT NULL DEFAULT 3,
    "remaining_attempts" INTEGER NOT NULL DEFAULT 3,
    "last_guess" TEXT,
    "status" "GameStatus" NOT NULL DEFAULT 'ACTIVE',
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finished_at" TIMESTAMP(3),
    "xp_earned" INTEGER,
    "lootboxes_earned" INTEGER,

    CONSTRAINT "guess_pokemon_games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guess_shiny_games" (
    "id" SERIAL NOT NULL,
    "id_game" TEXT NOT NULL,
    "id_user" INTEGER NOT NULL,
    "id_pokemon" INTEGER NOT NULL,
    "max_attempts" INTEGER NOT NULL DEFAULT 3,
    "remaining_attempts" INTEGER NOT NULL DEFAULT 3,
    "last_guess" TEXT,
    "status" "GameStatus" NOT NULL DEFAULT 'ACTIVE',
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finished_at" TIMESTAMP(3),
    "xp_earned" INTEGER,
    "lootboxes_earned" INTEGER,

    CONSTRAINT "guess_shiny_games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokedoku_games" (
    "id" SERIAL NOT NULL,
    "id_game" TEXT NOT NULL,
    "id_user" INTEGER NOT NULL,
    "status" "GameStatus" NOT NULL DEFAULT 'ACTIVE',
    "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finished_at" TIMESTAMP(3),
    "xp_earned" INTEGER,
    "lootboxes_earned" INTEGER,

    CONSTRAINT "pokedoku_games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokedoku_game_cells" (
    "id" SERIAL NOT NULL,
    "id_game" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "row_condition_type" TEXT NOT NULL,
    "row_condition_value" TEXT NOT NULL,
    "column_condition_type" TEXT NOT NULL,
    "column_condition_value" TEXT NOT NULL,
    "answer_pokemon_id" INTEGER,
    "is_correct" BOOLEAN,
    "answered_at" TIMESTAMP(3),

    CONSTRAINT "pokedoku_game_cells_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "types_name_key" ON "types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "guess_pokemon_games_id_game_key" ON "guess_pokemon_games"("id_game");

-- CreateIndex
CREATE INDEX "guess_pokemon_games_id_user_status_idx" ON "guess_pokemon_games"("id_user", "status");

-- CreateIndex
CREATE UNIQUE INDEX "guess_shiny_games_id_game_key" ON "guess_shiny_games"("id_game");

-- CreateIndex
CREATE INDEX "guess_shiny_games_id_user_status_idx" ON "guess_shiny_games"("id_user", "status");

-- CreateIndex
CREATE UNIQUE INDEX "pokedoku_games_id_game_key" ON "pokedoku_games"("id_game");

-- CreateIndex
CREATE INDEX "pokedoku_games_id_user_status_idx" ON "pokedoku_games"("id_user", "status");

-- CreateIndex
CREATE UNIQUE INDEX "pokedoku_game_cells_id_game_position_key" ON "pokedoku_game_cells"("id_game", "position");

-- AddForeignKey
ALTER TABLE "user_pokemon" ADD CONSTRAINT "user_pokemon_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_pokemon" ADD CONSTRAINT "user_pokemon_id_pokemon_fkey" FOREIGN KEY ("id_pokemon") REFERENCES "pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_type" ADD CONSTRAINT "pokemon_type_id_pokemon_fkey" FOREIGN KEY ("id_pokemon") REFERENCES "pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokemon_type" ADD CONSTRAINT "pokemon_type_id_type_fkey" FOREIGN KEY ("id_type") REFERENCES "types"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evolutive_chain" ADD CONSTRAINT "evolutive_chain_from_pokemon_id_fkey" FOREIGN KEY ("from_pokemon_id") REFERENCES "pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "evolutive_chain" ADD CONSTRAINT "evolutive_chain_to_pokemon_id_fkey" FOREIGN KEY ("to_pokemon_id") REFERENCES "pokemon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guess_pokemon_games" ADD CONSTRAINT "guess_pokemon_games_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guess_pokemon_games" ADD CONSTRAINT "guess_pokemon_games_id_pokemon_fkey" FOREIGN KEY ("id_pokemon") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guess_shiny_games" ADD CONSTRAINT "guess_shiny_games_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "guess_shiny_games" ADD CONSTRAINT "guess_shiny_games_id_pokemon_fkey" FOREIGN KEY ("id_pokemon") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokedoku_games" ADD CONSTRAINT "pokedoku_games_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokedoku_game_cells" ADD CONSTRAINT "pokedoku_game_cells_id_game_fkey" FOREIGN KEY ("id_game") REFERENCES "pokedoku_games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pokedoku_game_cells" ADD CONSTRAINT "pokedoku_game_cells_answer_pokemon_id_fkey" FOREIGN KEY ("answer_pokemon_id") REFERENCES "pokemon"("id") ON DELETE SET NULL ON UPDATE CASCADE;
