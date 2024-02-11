/*
  Warnings:

  - You are about to drop the `Pick` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pick" DROP CONSTRAINT "Pick_userId_fkey";

-- DropTable
DROP TABLE "Pick";

-- CreateTable
CREATE TABLE "CategoryPick" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "nominee" TEXT NOT NULL,

    CONSTRAINT "CategoryPick_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoryPick_userId_category_key" ON "CategoryPick"("userId", "category");

-- AddForeignKey
ALTER TABLE "CategoryPick" ADD CONSTRAINT "CategoryPick_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
