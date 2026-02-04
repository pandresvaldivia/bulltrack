'use server';

import prisma from '@/modules/lib/prisma/prisma';
import { Prisma } from '@/generated/prisma/client';
import {
  BullFilters,
  BullPagination,
  BullSortBy,
  BullWithScore,
} from './types';
import { calculateBullScore } from '@/modules/core/helpers/bulls/stats';
import { mapBullStatsToStats } from '@/modules/bull/mappers/bull';
import { Bull, BullList } from '@/modules/bull/interfaces/bull';

/**
 * Gets a list of bulls based on filters, pagination, and sorting.
 * @param params.filters - Filtering options for the bulls.
 * @param params.pagination - Pagination options (page number and page size).
 * @param params.sortBy - Sorting option for the bulls.
 * @returns A promise that resolves to a BullList containing the bulls and pagination info.
 */
export async function getBulls(params: {
  filters?: BullFilters;
  pagination?: BullPagination;
  sortBy?: BullSortBy;
}): Promise<BullList> {
  const {
    filters = {},
    pagination = { page: 1, pageSize: 20 },
    sortBy = 'score-high',
  } = params;

  const { search, origins, coatColors, forHeifer, favoriteOnly, userId } =
    filters;
  const { page, pageSize } = pagination;

  const andConditions: Prisma.BullWhereInput[] = [];

  if (search && search.trim()) {
    andConditions.push({
      OR: [
        { tag: { contains: search, mode: 'insensitive' } },
        { name: { contains: search, mode: 'insensitive' } },
      ],
    });
  }

  if (origins && origins.length > 0) {
    andConditions.push({
      origin: { in: origins },
    });
  }

  if (coatColors && coatColors.length > 0) {
    andConditions.push({
      coatColor: { in: coatColors },
    });
  }

  if (forHeifer !== undefined) {
    andConditions.push({
      use: forHeifer ? 'heifer' : 'cow',
    });
  }

  if (favoriteOnly && userId) {
    andConditions.push({
      favoritedBy: {
        some: {
          userId: userId,
        },
      },
    });
  }

  const whereConditions: Prisma.BullWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const totalCount = await prisma.bull.count({
    where: whereConditions,
  });

  const skip = (page - 1) * pageSize;

  const bulls = await prisma.bull.findMany({
    where: whereConditions,
    include: {
      stats: true,
      favoritedBy: userId
        ? {
            where: { userId },
            select: { id: true },
          }
        : false,
    },
    skip,
    take: pageSize,
  });

  let bullsWithScore: Bull[] = bulls.map((bull) => ({
    id: bull.id,
    tag: bull.tag,
    name: bull.name,
    use: bull.use,
    origin: bull.origin,
    coatColor: bull.coatColor,
    breed: bull.breed,
    ageMonths: bull.ageMonths,
    featuredCharacteristic: bull.featuredCharacteristic ?? '',
    bullScore: calculateBullScore(bull.stats),
    isFavorite: userId ? bull.favoritedBy.length > 0 : false,
    stats: mapBullStatsToStats(bull.stats as any),
  }));

  if (sortBy === 'score-high') {
    bullsWithScore = bullsWithScore.sort((a, b) => b.bullScore - a.bullScore);
  } else {
    bullsWithScore = bullsWithScore.sort((a, b) => a.bullScore - b.bullScore);
  }

  const totalPages = Math.ceil(totalCount / pageSize);

  return {
    bulls: bullsWithScore,
    pagination: {
      page,
      pageSize,
      totalCount,
      totalPages,
    },
  };
}
