/*
  Warnings:

  - You are about to drop the column `sessionId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sessionToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sessionToken` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_sessionId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "sessionId",
ADD COLUMN     "sessionToken" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_sessionToken_key" ON "User"("sessionToken");
