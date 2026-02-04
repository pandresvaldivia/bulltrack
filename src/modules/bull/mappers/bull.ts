import { BullStats, BullWithScore } from '@/modules/api/bulls/get/types';
import { Bull, Stats } from '../interfaces/bull';

export function mapBullWithScoreToBull(bullWithScore: BullWithScore): Bull {
  return {
    id: bullWithScore.id,
    tag: bullWithScore.tag,
    name: bullWithScore.name,
    use: bullWithScore.use,
    origin: bullWithScore.origin,
    coatColor: bullWithScore.coatColor,
    breed: bullWithScore.breed,
    ageMonths: bullWithScore.ageMonths,
    featuredCharacteristic: bullWithScore.featuredCharacteristic ?? '',
    bullScore: bullWithScore.bullScore,
    isFavorite: bullWithScore.isFavorite,
    stats: mapBullStatsToStats(bullWithScore.stats),
  };
}

export function mapBullStatsToStats(stats: BullStats | null): Stats {
  if (!stats) {
    return {
      growth: 0,
      calvingEase: 0,
      reproduction: 0,
      moderation: 0,
      carcass: 0,
    };
  }

  return {
    growth: stats?.growth ?? 0,
    calvingEase: stats?.calvingEase ?? 0,
    reproduction: stats?.reproduction ?? 0,
    moderation: stats?.moderation ?? 0,
    carcass: stats?.carcass ?? 0,
  };
}
