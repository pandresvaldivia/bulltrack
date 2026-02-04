import { getBullChartData } from '@/modules/bull/helpers/bull-stats';
import { Bull } from '@/modules/bull/interfaces/bull';
import { ChartRadar } from '@/ui/shared/components/chart/chart-radar';
import { Progress } from '@/ui/shared/components/progress/progress-bar';

type Props = {
  bull: Bull;
};

export function BullStat({ bull }: Props) {
  const charData = getBullChartData(bull.stats);
  const score = (bull.bullScore / 100).toFixed(1);

  return (
    <div className='flex items-center flex-1 gap-6'>
      <div className='flex flex-col flex-1 gap-2'>
        <p className='flex items-center justify-between uppercase font-medium text-sm leading-5'>
          <span>Bull Score</span>
          <span className='font-semibold text-2xl leading-5'>{score}</span>
        </p>
        <Progress value={bull.bullScore} limit={100} />
        <p className='leading-5'>{bull.featuredCharacteristic}</p>
      </div>
      <ChartRadar data={charData} />
    </div>
  );
}
