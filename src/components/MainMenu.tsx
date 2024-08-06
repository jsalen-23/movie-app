'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/movies', label: 'Movies' },
];

export default function MainMenu() {
  const pathname = usePathname();

  return (
    <nav className="h-full">
      <ul className="h-full flex flex-col gap-6 lg:flex-row lg:items-center">
        {navigationLinks.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                pathname === link.href &&
                  'font-bold cursor-default pointer-events-none',
                pathname !== link.href && 'hover:opacity-80',
                'text-lg lg:text-base text-primary transition-opacity duration-400 link-underline',
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
