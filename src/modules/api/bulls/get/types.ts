import {
  BullUse,
  BullOrigin,
  CoatColor,
  Breed,
} from '@/generated/prisma/client';

export type BullSortBy = 'score-high' | 'score-low';

export type BullFilters = {
  search?: string;
  origins?: BullOrigin[];
  coatColors?: CoatColor[];
  forHeifer?: boolean;
  favoriteOnly?: boolean;
  userId?: string;
};

export type BullPagination = {
  page: number;
  pageSize: number;
};

export type BullWithScore = {
  id: string;
  tag: string;
  name: string;
  use: BullUse;
  origin: BullOrigin;
  coatColor: CoatColor;
  breed: Breed;
  ageMonths: number;
  featuredCharacteristic: string | null;
  bullScore: number;
  isFavorite: boolean;
  stats: BullStats | null;
  createdAt: Date;
  updatedAt: Date;
};

export type BullStats = {
  growth: number;
  calvingEase: number;
  reproduction: number;
  moderation: number;
  carcass: number;
};
