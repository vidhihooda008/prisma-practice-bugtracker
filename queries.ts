import { PrismaClient, BugStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clean slate so you can re-run this file safely.
  await prisma.bug.deleteMany();
  await prisma.project.deleteMany();

  // 1) NESTED CREATE
  const project = await prisma.project.create({
    data: {
      name: "Checkout",
      bugs: {
        create: [
          {
            title: "Cart total wrong",
            status: BugStatus.OPEN,
          },
          {
            title: "Coupon crash",
            status: BugStatus.OPEN,
          },
          {
            title: "Checkout button broken",
            status: BugStatus.RESOLVED,
          },
        ],
      },
    },
  });

  console.log(`created project "${project.name}" with 3 bugs`);

  // 2) READ WITH include
  const projects = await prisma.project.findMany({
    include: {
      bugs: true,
    },
  });

  for (const project of projects) {
    console.log(
      `projects with bugs: ${project.name} -> ${project.bugs.length} bugs`
    );
  }

  // 3) UPDATE
  await prisma.bug.updateMany({
    where: {
      status: BugStatus.OPEN,
    },
    data: {
      status: BugStatus.IN_PROGRESS,
    },
  });

  console.log("moved OPEN bugs to IN_PROGRESS");

  // 4) FILTERED + SORTED READ
  const inProgressBugs = await prisma.bug.findMany({
    where: {
      status: BugStatus.IN_PROGRESS,
    },
    orderBy: {
      title: "asc",
    },
  });

  console.log(
    "in-progress bugs (sorted):",
    inProgressBugs.map((bug) => bug.title)
  );
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });