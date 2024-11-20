import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: Array(1_100_000)
      .fill(0)
      .map((_, i) => ({
        firstName: `Имя-${i}`,
        lastName: `Фамилия-${i}`,
        age: Math.floor(Math.random() * 100),
        sex: Math.random() < 0.5 ? 'муж' : 'жен',
        problems: Math.random() < 0.5,
      })),
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
