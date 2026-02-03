'use server';

import prisma from '@/modules/shared/lib/prisma/prisma';

/**
 * Gets the favorite bulls for a specific user.
 * @param params.userId - The ID of the user whose favorites are to be retrieved.
 * @returns A promise that resolves to an array of favorite bulls.
 */
export async function getUserFavorites(params: { userId: string }) {
  const { userId } = params;

  try {
    const favorites = await prisma.bullFavorite.findMany({
      where: { userId },
      include: {
        bull: {
          include: {
            stats: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return favorites;
  } catch (error) {
    console.error('Error getting user favorites:', error);
    return [];
  }
}
