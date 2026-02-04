import { getImageByColorAndBreed } from '@/modules/bull/helpers/bull-image';
import { Bull } from '@/modules/bull/interfaces/bull';
import { Badge } from '@/ui/shared/components/badge/badge';
import { Divider } from '@/ui/shared/components/divider/divider';
import Image from 'next/image';
import { BullActions } from '../actions/bull-actions';
import { BullStat } from '../stats/bull-stats';

type Props = {
  bull: Bull;
  index: number;
};

export function BullsListItem({ bull, index }: Props) {
  const { coatColor, breed } = bull;

  const image = getImageByColorAndBreed({
    color: coatColor,
    breed,
  });

  return (
    <li className='flex items-center p-6 bg-white rounded-3xl h-48'>
      <div className='flex items-center gap-6'>
        <span>#{index + 1}</span>
        <div className='w-21 h-18 rounded-lg overflow-hidden'>
          <Image
            src={image}
            alt='Bull Icon'
            width={84}
            height={72}
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <p className='text-2xl font-semibold leading-5 mb-2'>
            Toro #{bull.tag}
          </p>
          <p className='font-medium leading-5'>
            {bull.breed} . {bull.ageMonths} meses
          </p>
          <Badge text={bull.origin} variant='green' />
        </div>
      </div>
      <Divider orientation='vertical' className='bg-gray-bright mx-6' />
      <BullStat bull={bull} />
      <Divider orientation='vertical' className='bg-gray-bright mx-6' />
      <BullActions bullId={bull.id} isFavorite={bull.isFavorite} />
    </li>
  );
}
