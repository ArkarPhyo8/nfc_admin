import { hashPassword } from "@/actions/general/hashPassword";
import { Prisma, PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient()

export async function main() {
  const hash =await hashPassword("admin123");
  const superAdmin: Prisma.adminCreateInput[] = [
    {
      email: 'superadmin@gmail.com',
      password: hash.toString(),
      name: 'superAdmin',
    },
  ];
  for (const u of superAdmin) {
    await prisma.admin.create({ data: u });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })