-- CreateTable
CREATE TABLE "AdminExtract" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminExtract_image_url_key" ON "AdminExtract"("image_url");
