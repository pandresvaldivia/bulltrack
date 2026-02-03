import { LogoIcon } from '@/ui/shared/components/icon';
import { UserMenu } from '@/ui/user-menu/components/user-menu';

export function Header() {
  return (
    <header className='bg-green-dark py-5 px-8'>
      <div className='flex justify-between items-center'>
        <LogoIcon />
        <UserMenu />
      </div>
    </header>
  );
}
