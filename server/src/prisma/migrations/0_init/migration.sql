-- CreateTable
CREATE TABLE "entrys" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "contents" TEXT NOT NULL,
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "entrys_pkey" PRIMARY KEY ("id")
);

