import { cn } from '@/modules/lib/shadcn/helpers/utils';

type Props = {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
};

export function Divider({ orientation = 'horizontal', className }: Props) {
  return (
    <div
      className={cn(
        {
          'w-full': orientation === 'horizontal',
          'shrink-0 w-px self-stretch': orientation === 'vertical',
        },
        className,
      )}
    />
  );
}
