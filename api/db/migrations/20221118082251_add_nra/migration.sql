/*
  Warnings:

  - A unique constraint covering the columns `[nra]` on the table `AdminExtract` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nra]` on the table `PemateriExtract` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nra` to the `AdminExtract` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nra` to the `PemateriExtract` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `AdminExtract` ADD COLUMN `nra` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `PemateriExtract` ADD COLUMN `nra` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `AdminExtract_nra_key` ON `AdminExtract`(`nra`);

-- CreateIndex
CREATE UNIQUE INDEX `PemateriExtract_nra_key` ON `PemateriExtract`(`nra`);
