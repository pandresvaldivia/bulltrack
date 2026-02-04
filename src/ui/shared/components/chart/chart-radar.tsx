'use client';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/ui/shadcn/components/chart';
import { PolarGrid, Radar, RadarChart } from 'recharts';

const chartConfig = {
  value: {
    label: 'value',
    color: '#CCF0DA',
  },
} satisfies ChartConfig;

type Props = {
  data: Array<{ stat: string; value: number }>;
  fill?: string;
  stroke?: string;
};

export function ChartRadar({
  data,
  fill = '#CCF0DA',
  stroke = '#3ED97C',
}: Props) {
  console.log(data);

  return (
    <ChartContainer
      config={chartConfig}
      className='mx-auto aspect-square h-22 w-22'
    >
      <RadarChart data={data} outerRadius='100%'>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarGrid
          gridType='circle'
          className='fill-gray-alt/30 stroke-gray-bright'
        />
        <Radar dataKey='value' fill={fill} stroke={stroke} fillOpacity={0.6} />
      </RadarChart>
    </ChartContainer>
  );
}
