/*
  Warnings:

  - You are about to drop the column `url_images` on the `pokemon` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "pokemon" DROP COLUMN "url_images",
ADD COLUMN     "silhouette" TEXT,
ADD COLUMN     "url_image" TEXT;
