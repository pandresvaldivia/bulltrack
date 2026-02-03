import { IconProps } from '../../interfaces/icon';

export function ChevronDownIcon(props: IconProps) {
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
        d='M6 9L12 15L18 9'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
