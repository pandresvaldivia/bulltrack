'use server';

import prisma from '@/modules/lib/prisma/prisma';
import { revalidatePath } from 'next/cache';

export async function addFavorite(params: {
  userId: string;
  bullId: string;
}): Promise<{ success: boolean; error?: string }> {
  const { userId, bullId } = params;

  try {
    const [user, bull] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.bull.findUnique({ where: { id: bullId } }),
    ]);

    if (!user) {
      return { success: false, error: 'Usuario no encontrado' };
    }

    if (!bull) {
      return { success: false, error: 'Toro no encontrado' };
    }

    const existingFavorite = await prisma.bullFavorite.findUnique({
      where: {
        userId_bullId: {
          userId,
          bullId,
        },
      },
    });

    if (existingFavorite) {
      return { success: false, error: 'El toro ya está en favoritos' };
    }

    await prisma.bullFavorite.create({
      data: {
        userId,
        bullId,
      },
    });

    revalidatePath('/dashboard');

    return { success: true };
  } catch (error) {
    console.error('Error al agregar favorito:', error);
    return { success: false, error: 'Error al agregar favorito' };
  }
}
