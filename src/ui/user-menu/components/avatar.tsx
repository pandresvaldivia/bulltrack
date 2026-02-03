import Image from 'next/image';

type Props = {
  image?: string;
};

export function Avatar({ image }: Props) {
  return (
    <div className='h-14 w-14 overflow-hidden rounded-full'>
      <Image
        src={image || '/images/avatar.webp'}
        alt='User Avatar'
        width={56}
        height={56}
        className='h-full w-full object-cover'
      />
    </div>
  );
}
