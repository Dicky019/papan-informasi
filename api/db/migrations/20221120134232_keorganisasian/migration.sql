-- CreateTable
CREATE TABLE `KeorganisasianExtract` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `nra` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `hari` ENUM('Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu') NOT NULL,
    `jenisKegiatan` ENUM('Pembelajaran', 'Nginap') NOT NULL,

    UNIQUE INDEX `KeorganisasianExtract_nra_key`(`nra`),
    UNIQUE INDEX `KeorganisasianExtract_image_url_key`(`image_url`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
