'use server';

import prisma from '@/modules/shared/lib/prisma/prisma';
import { BullWithScore } from './types';
import { calculateBullScore } from '@/modules/shared/helpers/bulls/stats';

/**
 * Gets a bull by its ID, including its calculated score and favorite status for a user.
 * @param params - An object containing the bullId and optional userId.
 * @returns A promise that resolves to the bull with its score and favorite status, or null if not found.
 */
export async function getBullById(params: {
  bullId: string;
  userId?: string;
}): Promise<BullWithScore | null> {
  const { bullId, userId } = params;

  const bull = await prisma.bull.findUnique({
    where: { id: bullId },
    include: {
      stats: true,
      favoritedBy: userId
        ? {
            where: { userId },
            select: { id: true },
          }
        : false,
    },
  });

  if (!bull) return null;

  return {
    id: bull.id,
    tag: bull.tag,
    name: bull.name,
    use: bull.use,
    origin: bull.origin,
    coatColor: bull.coatColor,
    breed: bull.breed,
    ageMonths: bull.ageMonths,
    featuredCharacteristic: bull.featuredCharacteristic,
    bullScore: calculateBullScore(bull.stats),
    isFavorite: userId ? bull.favoritedBy.length > 0 : false,
    stats: bull.stats,
    createdAt: bull.createdAt,
    updatedAt: bull.updatedAt,
  };
}
