'use server';

import prisma from '@/modules/lib/prisma/prisma';
import { revalidatePath } from 'next/cache';

/**
 * Toggles a bull as a favorite for a user. If the bull is already a favorite, it removes it; otherwise, it adds it.
 * @param params.userId - The ID of the user.
 * @param params.bullId - The ID of the bull to be toggled as favorite.
 * @returns A promise that resolves to an object indicating success, the new favorite status, and any error message.
 */
export async function toggleFavorite(params: {
  userId: string;
  bullId: string;
}): Promise<{ success: boolean; isFavorite: boolean; error?: string }> {
  const { userId, bullId } = params;

  try {
    const existingFavorite = await prisma.bullFavorite.findUnique({
      where: {
        userId_bullId: {
          userId,
          bullId,
        },
      },
    });

    if (existingFavorite) {
      await prisma.bullFavorite.delete({
        where: {
          id: existingFavorite.id,
        },
      });

      revalidatePath('/dashboard');

      return { success: true, isFavorite: false };
    } else {
      const [user, bull] = await Promise.all([
        prisma.user.findUnique({ where: { id: userId } }),
        prisma.bull.findUnique({ where: { id: bullId } }),
      ]);

      if (!user) {
        return {
          success: false,
          isFavorite: false,
          error: 'User not found',
        };
      }

      if (!bull) {
        return {
          success: false,
          isFavorite: false,
          error: 'Bull not found',
        };
      }

      await prisma.bullFavorite.create({
        data: {
          userId,
          bullId,
        },
      });

      revalidatePath('/dashboard');

      return { success: true, isFavorite: true };
    }
  } catch (error) {
    console.error('Error toggling favorite:', error);
    return {
      success: false,
      isFavorite: false,
      error: 'Error toggling favorite',
    };
  }
}
