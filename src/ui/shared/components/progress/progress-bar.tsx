import { cn } from '@/modules/lib/shadcn/helpers/utils';
import progressStyles from './progress-bar.module.css';
import { CSSProperties } from 'react';

type Props = {
  value: number;
  limit: number;
  className?: string;
};

export function Progress({ value, limit, className }: Props) {
  const progress = (value / limit) * 100;

  return (
    <div
      style={
        {
          '--progress-value': progress,
        } as CSSProperties
      }
      className={cn(
        'h-2 min-w-3xs rounded-full',
        progressStyles.main,
        className,
      )}
    />
  );
}
