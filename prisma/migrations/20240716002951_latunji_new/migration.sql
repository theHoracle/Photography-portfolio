/*
  Warnings:

  - You are about to drop the `Works` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Works" DROP CONSTRAINT "Works_serviceSlug_fkey";

-- DropTable
DROP TABLE "Works";

-- CreateTable
CREATE TABLE "Work" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "imgs" TEXT[],
    "serviceSlug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Work_createdAt_idx" ON "Work"("createdAt");

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_serviceSlug_fkey" FOREIGN KEY ("serviceSlug") REFERENCES "Services"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
