-- CreateEnum
CREATE TYPE "public"."PhotoType" AS ENUM ('GALLERY', 'BANNER');

-- CreateTable
CREATE TABLE "public"."photo" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "type" "public"."PhotoType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "photo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."photo" ADD CONSTRAINT "photo_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
