-- CreateTable
CREATE TABLE "Drone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Drone_pkey" PRIMARY KEY ("id")
);
