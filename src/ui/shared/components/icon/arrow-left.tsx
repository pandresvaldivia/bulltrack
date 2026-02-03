import { IconProps } from '@/modules/core/interfaces/icon';

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden
      {...props}
    >
      <path
        d='M18.5 12H6M6 12L12 6M6 12L12 18'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
