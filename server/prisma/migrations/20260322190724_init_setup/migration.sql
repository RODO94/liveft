-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lifts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Lifts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiftRecords" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "lift_id" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "date" TEXT NOT NULL,
    "is_max" BOOLEAN NOT NULL DEFAULT false,
    "reps" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "LiftRecords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiftTargets" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "lift_id" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "date" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'active',

    CONSTRAINT "LiftTargets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Lifts_slug_key" ON "Lifts"("slug");

-- AddForeignKey
ALTER TABLE "LiftRecords" ADD CONSTRAINT "LiftRecords_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiftRecords" ADD CONSTRAINT "LiftRecords_lift_id_fkey" FOREIGN KEY ("lift_id") REFERENCES "Lifts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiftTargets" ADD CONSTRAINT "LiftTargets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiftTargets" ADD CONSTRAINT "LiftTargets_lift_id_fkey" FOREIGN KEY ("lift_id") REFERENCES "Lifts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
