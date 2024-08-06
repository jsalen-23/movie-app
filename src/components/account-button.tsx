import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import { SheetClose } from './ui/sheet';
import Link from 'next/link';

interface AccountButtonProps {
  closesSheet: boolean;
}

export default async function AccountButton({
  closesSheet,
}: AccountButtonProps) {
  const session = await getServerSession(authOptions);

  const AccountLink = (
    <Link
      href={session?.user ? '/profile' : '/login'}
      className="flex justify-center items-center gap-1 px-4 py-2 text-xl lg:text-base pill"
    >
      {session?.user ? 'Account' : 'Login'}
    </Link>
  );

  return closesSheet ? (
    <SheetClose asChild>{AccountLink}</SheetClose>
  ) : (
    AccountLink
  );
}
