// queries.ts — write and run your CRUD here with:  npx tsx queries.ts
//
// Run each part in order. Read the console output after each one.

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Clean slate so you can re-run this file safely.
  await prisma.bug.deleteMany();
  await prisma.project.deleteMany();

  // 1) NESTED CREATE ---------------------------------------------------------
  // TODO: create ONE Project and, in the same call, THREE Bugs that belong to it.
  //       Give the bugs different statuses.


  // 2) READ WITH include (no N+1) -------------------------------------------
  // TODO: fetch every Project together with its bugs in a SINGLE query.
  //       Log the project name and how many bugs it has.


  // 3) UPDATE ----------------------------------------------------------------
  // TODO: move every bug that is still OPEN to IN_PROGRESS.


  // 4) FILTERED + SORTED READ ------------------------------------------------
  // TODO: fetch only the IN_PROGRESS bugs, sorted by title (A→Z).
  //       Log their titles.
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
