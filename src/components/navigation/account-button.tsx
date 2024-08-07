import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SignOutButton from '../sign-out-button';

export default async function DropdownAccountButton() {
  const session = await getServerSession(authOptions);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Account</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <Link
            href={session?.user ? '/profile' : '/login'}
            className="flex justify-end items-center gap-1 px-4 py-2 text-xl lg:text-base"
          >
            {session?.user ? 'My profile' : 'Login'}
          </Link>
        </DropdownMenuLabel>
        {session?.user && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOutButton />
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
