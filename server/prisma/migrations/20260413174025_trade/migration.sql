-- CreateEnum
CREATE TYPE "TradeStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'CANCELLED');

-- CreateTable
CREATE TABLE "trades" (
    "id" SERIAL NOT NULL,
    "id_trade" TEXT NOT NULL,
    "from_user_id" INTEGER NOT NULL,
    "to_user_id" INTEGER NOT NULL,
    "status" "TradeStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trade_items" (
    "id" SERIAL NOT NULL,
    "id_trade_fk" INTEGER NOT NULL,
    "owner_user_id" INTEGER NOT NULL,
    "id_pokemon" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "trade_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "trades_id_trade_key" ON "trades"("id_trade");

-- CreateIndex
CREATE INDEX "trades_from_user_id_status_idx" ON "trades"("from_user_id", "status");

-- CreateIndex
CREATE INDEX "trades_to_user_id_status_idx" ON "trades"("to_user_id", "status");

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_from_user_id_fkey" FOREIGN KEY ("from_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trades" ADD CONSTRAINT "trades_to_user_id_fkey" FOREIGN KEY ("to_user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trade_items" ADD CONSTRAINT "trade_items_id_trade_fk_fkey" FOREIGN KEY ("id_trade_fk") REFERENCES "trades"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trade_items" ADD CONSTRAINT "trade_items_id_pokemon_fkey" FOREIGN KEY ("id_pokemon") REFERENCES "pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
