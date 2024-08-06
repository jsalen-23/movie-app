import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function AddButton() {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session?.user ? (
        <button className="w-full pill mt-3 mb-6 md:mt-0 md:mb-0 py-3 bg-primaryRed">
          Add to my list
        </button>
      ) : (
        <Link
          href="/login"
          className="block text-center w-full pill mt-3 mb-6 md:mt-0 md:mb-0 py-3 px-6 bg-primaryRed"
        >
          Login to add to your list
        </Link>
      )}
    </>
  );
}
