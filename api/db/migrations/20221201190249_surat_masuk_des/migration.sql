/*
  Warnings:

  - Added the required column `descripsi` to the `SuratMasukTools` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggalMasuk` to the `SuratMasukTools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SuratMasukTools` ADD COLUMN `descripsi` VARCHAR(191) NOT NULL,
    ADD COLUMN `tanggalMasuk` VARCHAR(191) NOT NULL;
