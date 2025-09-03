-- CreateTable
CREATE TABLE "public"."event" (
    "id" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "backgroundImg" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."address" (
    "id" TEXT NOT NULL,
    "street" TEXT,
    "city" TEXT,
    "neighborhood" TEXT,
    "number" INTEGER NOT NULL,
    "CEP" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."event" ADD CONSTRAINT "event_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "public"."address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
