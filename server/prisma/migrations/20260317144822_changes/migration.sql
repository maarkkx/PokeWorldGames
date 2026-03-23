-- AlterTable
ALTER TABLE "pokemon" ADD COLUMN     "url_shiny" TEXT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "level" SET DEFAULT 1,
ALTER COLUMN "xp" SET DEFAULT 0,
ALTER COLUMN "lootboxes" SET DEFAULT 0;
