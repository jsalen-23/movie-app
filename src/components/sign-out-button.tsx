'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton() {
  return (
    <button
      className="flex justify-end items-center gap-1 px-4 py-2 text-xl lg:text-base"
      onClick={async () =>
        await signOut({
          redirect: true,
          callbackUrl: '/',
        })
      }
    >
      Sign out
    </button>
  );
}
