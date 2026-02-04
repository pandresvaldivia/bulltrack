import { BullStats } from '@/modules/api/bulls/get/types';

export function getBullChartData(stat: BullStats) {
  const chartData = [
    { stat: 'Growth', value: stat.growth * 100 },
    { stat: 'Calving Ease', value: stat.calvingEase * 100 },
    { stat: 'Reproduction', value: stat.reproduction * 100 },
    { stat: 'Moderation', value: stat.moderation * 100 },
    { stat: 'Carcass', value: stat.carcass * 100 },
  ];
  return chartData;
}
