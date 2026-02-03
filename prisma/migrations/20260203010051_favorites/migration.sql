-- CreateTable
CREATE TABLE "bull_favorites" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "bull_id" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "bull_favorites_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "bull_favorites_user_id_idx" ON "bull_favorites"("user_id");

-- CreateIndex
CREATE INDEX "bull_favorites_bull_id_idx" ON "bull_favorites"("bull_id");

-- CreateIndex
CREATE UNIQUE INDEX "bull_favorites_user_id_bull_id_key" ON "bull_favorites"("user_id", "bull_id");

-- AddForeignKey
ALTER TABLE "bull_favorites" ADD CONSTRAINT "bull_favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bull_favorites" ADD CONSTRAINT "bull_favorites_bull_id_fkey" FOREIGN KEY ("bull_id") REFERENCES "bulls"("id") ON DELETE CASCADE ON UPDATE CASCADE;
