/*
  Warnings:

  - You are about to drop the column `pick` on the `Pick` table. All the data in the column will be lost.
  - Added the required column `nominee` to the `Pick` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pick" DROP COLUMN "pick",
ADD COLUMN     "nominee" TEXT NOT NULL;
