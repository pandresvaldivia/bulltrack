import { Bull } from '@/modules/bull/interfaces/bull';
import { BullsListItem } from './bulls-list-item';

type Props = {
  bulls: Bull[];
};

export function BullsList({ bulls }: Props) {
  return (
    <ol className='flex flex-col gap-4'>
      {bulls.map((bull, index) => {
        return <BullsListItem key={bull.id} bull={bull} index={index} />;
      })}
    </ol>
  );
}
