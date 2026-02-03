import { encrypt } from '../encryption/helpers/encrypt';
import prisma from './prisma';

async function main() {
  console.log('Starting seed...');

  await prisma.bullStats.deleteMany();
  await prisma.bull.deleteMany();
  await prisma.user.deleteMany();

  const defaultPassword = await encrypt('seed28');

  await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@seed28.com',
      password: defaultPassword,
    },
  });

  const bulls = [
    {
      tag: '992',
      name: 'Toro Black Emerald',
      use: 'heifer' as const,
      origin: 'own' as const,
      coatColor: 'black' as const,
      breed: 'Angus' as const,
      ageMonths: 36,
      featuredCharacteristic: 'Top 1% calving ease',
      stats: {
        create: {
          growth: 85,
          calvingEase: 98,
          reproduction: 75,
          moderation: 60,
          carcass: 82,
        },
      },
    },
    {
      tag: '845',
      name: 'Red Diamond',
      use: 'cow' as const,
      origin: 'catalog' as const,
      coatColor: 'red' as const,
      breed: 'Angus' as const,
      ageMonths: 42,
      featuredCharacteristic: 'Top 5% carcass',
      stats: {
        create: {
          growth: 90,
          calvingEase: 40,
          reproduction: 88,
          moderation: 70,
          carcass: 95,
        },
      },
    },
    {
      tag: '102',
      name: 'General 102',
      use: 'heifer' as const,
      origin: 'catalog' as const,
      coatColor: 'black' as const,
      breed: 'Brangus' as const,
      ageMonths: 30,
      featuredCharacteristic: null,
      stats: {
        create: {
          growth: 70,
          calvingEase: 92,
          reproduction: 65,
          moderation: 80,
          carcass: 60,
        },
      },
    },
    {
      tag: '554',
      name: 'Indomable',
      use: 'cow' as const,
      origin: 'own' as const,
      coatColor: 'red' as const,
      breed: 'Hereford' as const,
      ageMonths: 48,
      featuredCharacteristic: null,
      stats: {
        create: {
          growth: 60,
          calvingEase: 30,
          reproduction: 95,
          moderation: 50,
          carcass: 75,
        },
      },
    },
    {
      tag: '210',
      name: 'Midnight Express',
      use: 'heifer' as const,
      origin: 'own' as const,
      coatColor: 'black' as const,
      breed: 'Angus' as const,
      ageMonths: 28,
      featuredCharacteristic: 'Efficiency Leader',
      stats: {
        create: {
          growth: 78,
          calvingEase: 95,
          reproduction: 82,
          moderation: 85,
          carcass: 68,
        },
      },
    },
    {
      tag: '773',
      name: 'Rustic King',
      use: 'cow' as const,
      origin: 'catalog' as const,
      coatColor: 'red' as const,
      breed: 'Braford' as const,
      ageMonths: 54,
      featuredCharacteristic: 'Heat Tolerant',
      stats: {
        create: {
          growth: 92,
          calvingEase: 35,
          reproduction: 90,
          moderation: 45,
          carcass: 88,
        },
      },
    },
    {
      tag: '304',
      name: 'Shadow Warrior',
      use: 'heifer' as const,
      origin: 'own' as const,
      coatColor: 'black' as const,
      breed: 'Brangus' as const,
      ageMonths: 32,
      featuredCharacteristic: 'Performance Pro',
      stats: {
        create: {
          growth: 88,
          calvingEase: 85,
          reproduction: 70,
          moderation: 65,
          carcass: 91,
        },
      },
    },
  ];

  for (const bull of bulls) {
    await prisma.bull.create({
      data: bull,
    });
  }

  console.log(`Seeded ${bulls.length} bulls`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
