import { PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient()

async function main() {
  const superAdmin = await prisma.admin.upsert({
    where: { email: 'superadmim@gmail.com' },
    update: {},
    create: {
      email: 'superadmim@gmail.com',
      name: 'superAdmin',
    },
  })
  console.log({ superAdmin })
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