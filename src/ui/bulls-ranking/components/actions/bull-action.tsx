import { cn } from '@/modules/lib/shadcn/helpers/utils';

type Props = {
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function BullAction({ className, ...props }: Props) {
  return (
    <button
      className={cn('bg-gray-dark text-white p-2 rounded-xl', className)}
      {...props}
    />
  );
}
