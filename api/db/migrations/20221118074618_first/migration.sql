-- CreateTable
CREATE TABLE `AdminExtract` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AdminExtract_image_url_key`(`image_url`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PemateriExtract` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `hari` ENUM('Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu') NOT NULL,
    `konsentrasi` ENUM('Program', 'Jaringan', 'Hardware', 'MultiMedia') NOT NULL,

    UNIQUE INDEX `PemateriExtract_image_url_key`(`image_url`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
