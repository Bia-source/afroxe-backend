-- AlterTable
ALTER TABLE "public"."event" ADD COLUMN     "ticketUrl" TEXT;

-- CreateTable
CREATE TABLE "public"."event_schedule" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "startTime" TEXT NOT NULL,
    "endTime" TEXT NOT NULL,
    "happyHour" TEXT,
    "eventHighlights" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_schedule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "event_schedule_eventId_key" ON "public"."event_schedule"("eventId");

-- AddForeignKey
ALTER TABLE "public"."event_schedule" ADD CONSTRAINT "event_schedule_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "public"."event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
