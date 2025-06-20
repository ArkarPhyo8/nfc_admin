import { hashPassword } from "@/actions/general/hashPassword";
import { Prisma, PrismaClient } from "@/generated/prisma";
const prisma = new PrismaClient();

export async function main() {
  const hash = await hashPassword("admin123");
  const superAdmin: Prisma.adminCreateInput[] = [
    {
      email: "superadmin@gmail.com",
      password: hash.toString(),
      name: "superAdmin",
    },
  ];
  for (const u of superAdmin) {
    await prisma.admin.create({ data: u });
  }
  const cardTypes = [{ name: "Basic" }, { name: "Premium" }, { name: "Gold" }];
  for (const type of cardTypes) {
    await prisma.card_types.upsert({
      where: { name: type.name },
      update: {},
      create: { name: type.name },
    });
  }

  const PaymentTypes = [
    { name: "Kpay" },
    { name: "Wave" },
    { name: "AYA Pay" },
  ];
  for (const type of PaymentTypes) {
    await prisma.payment_types.upsert({
      where: { name: type.name },
      update: {},
      create: { name: type.name },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
