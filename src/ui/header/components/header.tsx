import { cn } from '@/modules/lib/shadcn/helpers/utils';
import { LogoIcon } from '@/ui/shared/components/icon';
import { UserMenu } from '@/ui/user-menu/components/user-menu';

type Props = {
  className?: string;
};

export function Header({ className }: Props) {
  return (
    <header className={cn('bg-green-dark py-5 px-8', className)}>
      <div className='flex justify-between items-center'>
        <LogoIcon />
        <UserMenu />
      </div>
    </header>
  );
}
