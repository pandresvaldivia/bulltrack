-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- CreateEnum
CREATE TYPE "BullUse" AS ENUM ('heifer', 'cow');

-- CreateEnum
CREATE TYPE "BullOrigin" AS ENUM ('own', 'catalog');

-- CreateEnum
CREATE TYPE "CoatColor" AS ENUM ('black', 'red');

-- CreateEnum
CREATE TYPE "Breed" AS ENUM ('Angus', 'Brangus', 'Hereford', 'Braford');

-- CreateTable
CREATE TABLE "bulls" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "tag" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "use" "BullUse" NOT NULL,
    "origin" "BullOrigin" NOT NULL,
    "coat_color" "CoatColor" NOT NULL,
    "breed" "Breed" NOT NULL,
    "age_months" INTEGER NOT NULL,
    "featured_characteristic" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "bulls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bull_stats" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "growth" INTEGER NOT NULL,
    "calving_ease" INTEGER NOT NULL,
    "reproduction" INTEGER NOT NULL,
    "moderation" INTEGER NOT NULL,
    "carcass" INTEGER NOT NULL,
    "bull_id" UUID NOT NULL,

    CONSTRAINT "bull_stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bulls_tag_key" ON "bulls"("tag");

-- CreateIndex
CREATE UNIQUE INDEX "bull_stats_bull_id_key" ON "bull_stats"("bull_id");

-- CreateIndex
CREATE INDEX "bull_stats_bull_id_idx" ON "bull_stats"("bull_id");

-- AddForeignKey
ALTER TABLE "bull_stats" ADD CONSTRAINT "bull_stats_bull_id_fkey" FOREIGN KEY ("bull_id") REFERENCES "bulls"("id") ON DELETE CASCADE ON UPDATE CASCADE;
