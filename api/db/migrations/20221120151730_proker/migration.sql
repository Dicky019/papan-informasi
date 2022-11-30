-- CreateTable
CREATE TABLE `ProgramKerjaExtract` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameProker` VARCHAR(191) NOT NULL,
    `persenProker` DOUBLE NOT NULL,
    `programKerja` ENUM('Keorganisasian', 'PublicAndRelation', 'ToolsAndProperties', 'Keilmuan') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
