import { getBulls } from '@/modules/api/bulls/get/get-bulls';
import { BullsList } from './list/bulls-list';

export async function BullsRanking() {
  const bulls = await getBulls({
    pagination: { page: 1, pageSize: 5 },
  });

  return <BullsList bulls={bulls.bulls} />;
}
