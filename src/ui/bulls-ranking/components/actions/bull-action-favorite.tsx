'use client';

import { HeartIcon } from '@/ui/shared/components/icon';
import { BullAction } from './bull-action';
import { useSession } from 'next-auth/react';
import { cn } from '@/modules/lib/shadcn/helpers/utils';
import { toggleFavorite } from '@/modules/api/favorites/mutations/toggle-favorite';

type Props = {
  bullId: string;
  isFavorite?: boolean;
};

export function BullActionFavorite({ bullId, isFavorite }: Props) {
  const { data } = useSession();

  const handleFavorite = async () => {
    if (!data?.user) {
      console.error('Usuario no autenticado');
      return;
    }

    toggleFavorite({
      userId: data.user.id,
      bullId,
    });
  };

  console.log({ isFavorite });

  return (
    <BullAction aria-label='Marcar como favorito' onClick={handleFavorite}>
      {isFavorite && (
        <HeartIcon
          height='24'
          width='24'
          className='size-6'
          fill='var(--color-white)'
        />
      )}
      {!isFavorite && <HeartIcon height='24' width='24' className='size-6' />}
    </BullAction>
  );
}
