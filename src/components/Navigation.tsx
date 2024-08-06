import { Menu } from 'lucide-react';
import Link from 'next/link';
import MainMenu from './MainMenu';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth/next';

export default async function Navigation() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <span className="sr-only">Menu</span>
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <MainMenu />
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden lg:flex lg:gap-2 lg:items-center">
        <MainMenu />
        {session?.user ? (
          <Link
            href="/profile"
            className="flex justify-center items-center gap-1 px-4 py-2 text-xl lg:text-base pill"
          >
            Account
          </Link>
        ) : (
          <Link
            href="/login"
            className="flex justify-center items-center gap-1 px-4 py-2 text-xl lg:text-base pill"
          >
            Login
          </Link>
        )}
      </div>
    </>
  );
}
