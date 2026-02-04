export type BullList = {
  bulls: Bull[];
  pagination: {
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
  };
};

export type Bull = {
  id: string;
  tag: string;
  name: string;
  use: string;
  origin: string;
  coatColor: string;
  breed: string;
  ageMonths: number;
  featuredCharacteristic: string;
  bullScore: number;
  isFavorite: boolean;
  stats: Stats;
};

export type Stats = {
  growth: number;
  calvingEase: number;
  reproduction: number;
  moderation: number;
  carcass: number;
};
