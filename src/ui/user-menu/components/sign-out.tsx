'use client';

import { DropdownMenuItem } from '@/ui/shadcn/components/dropdown-menu';
import { signOut } from 'next-auth/react';

type Props = {
  children?: React.ReactNode;
};

export function SignOut({ children }: Props) {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <DropdownMenuItem onClick={handleSignOut}>
      {children ? children : 'Cerrar sesión'}
    </DropdownMenuItem>
  );
}
