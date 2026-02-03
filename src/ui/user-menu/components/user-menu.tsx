import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/ui/shadcn/components/dropdown-menu';
import { Avatar } from './avatar';
import { SignOut } from './sign-out';

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label='Menu de usuario'
          className='bg-white shrink-0 rounded-full'
        >
          <Avatar />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <SignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
