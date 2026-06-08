-- AlterTable
ALTER TABLE "users" ALTER COLUMN "password" DROP NOT NULL;

ALTER TABLE "users" ADD COLUMN "google_id" TEXT;
ALTER TABLE "users" ADD COLUMN "auth_provider" TEXT NOT NULL DEFAULT 'local';

CREATE UNIQUE INDEX "users_google_id_key" ON "users"("google_id");
