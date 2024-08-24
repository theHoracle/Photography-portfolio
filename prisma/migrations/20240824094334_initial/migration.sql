-- CreateTable
CREATE TABLE "Services" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Work" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "imgs" TEXT[],
    "serviceSlug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "creator" TEXT NOT NULL,
    "email" TEXT,
    "xUsername" TEXT,
    "instaUsername" TEXT,
    "message" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Services_slug_key" ON "Services"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Work_slug_key" ON "Work"("slug");

-- CreateIndex
CREATE INDEX "Work_createdAt_idx" ON "Work"("createdAt");

-- CreateIndex
CREATE INDEX "Review_createdAt_idx" ON "Review"("createdAt");

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_serviceSlug_fkey" FOREIGN KEY ("serviceSlug") REFERENCES "Services"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
