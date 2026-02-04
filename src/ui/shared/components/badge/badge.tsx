import { cn } from '@/modules/lib/shadcn/helpers/utils';

type Props = {
  text: string;
  variant: 'green' | 'purple';
};

export function Badge({ text, variant }: Props) {
  return (
    <span
      className={cn('py-1.5 px-2 rounded-lg', {
        'bg-green-light text-green-medium': variant === 'green',
        'bg-purple-light text-purple-dark': variant === 'purple',
      })}
    >
      {text}
    </span>
  );
}
