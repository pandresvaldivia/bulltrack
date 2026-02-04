import { EyeIcon } from '@/ui/shared/components/icon';
import { BullAction } from './bull-action';
import { BullActionFavorite } from './bull-action-favorite';

type Props = {
  bullId: string;
  isFavorite?: boolean;
};

export function BullActions({ bullId, isFavorite }: Props) {
  return (
    <div className='flex flex-col items-center gap-4'>
      <BullAction aria-label='Ver detalles'>
        <EyeIcon height='24' width='24' className='size-6' />
      </BullAction>
      <BullActionFavorite bullId={bullId} isFavorite={isFavorite} />
    </div>
  );
}
