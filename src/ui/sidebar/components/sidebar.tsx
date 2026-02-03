import { cn } from '@/modules/lib/shadcn/helpers/utils';

type Props = {
  className?: string;
};

export function Sidebar({ className }: Props) {
  return <div className={cn('bg-green-dark', className)}></div>;
}
