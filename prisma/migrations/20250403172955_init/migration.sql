-- CreateTable
CREATE TABLE "Resume" (
    "resumeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userName" TEXT NOT NULL,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("resumeId")
);
