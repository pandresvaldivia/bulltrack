'use server';

import prisma from '@/modules/shared/lib/prisma/prisma';
import { revalidatePath } from 'next/cache';

/**
 * Removes a bull from a user's favorites.
 * @param params.userId - The ID of the user.
 * @param params.bullId - The ID of the bull to be removed from favorites.
 * @returns A promise that resolves to an object indicating success or failure.
 */
export async function removeFavorite(params: {
  userId: string;
  bullId: string;
}): Promise<{ success: boolean; error?: string }> {
  const { userId, bullId } = params;

  try {
    const favorite = await prisma.bullFavorite.findUnique({
      where: {
        userId_bullId: {
          userId,
          bullId,
        },
      },
    });

    if (!favorite) {
      return { success: false, error: 'Favorite not found' };
    }

    await prisma.bullFavorite.delete({
      where: {
        id: favorite.id,
      },
    });

    revalidatePath('/dashboard');

    return { success: true };
  } catch (error) {
    console.error('Error removing favorite:', error);
    return { success: false, error: 'Error removing favorite' };
  }
}
