/*
  Warnings:

  - You are about to drop the column `silhouette` on the `pokemon` table. All the data in the column will be lost.
  - You are about to drop the column `url_shiny` on the `pokemon` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pokemon" DROP COLUMN "silhouette",
DROP COLUMN "url_shiny",
ADD COLUMN     "url_shiny_image" TEXT,
ADD COLUMN     "url_silhouette_image" TEXT;
