import Image from 'next/image';
import Link from 'next/link';
import Navigation from './navigation/navigation';

export default function Header() {
  return (
    <header className="sticky top-0 z-10">
      <div className="max-w-[1440px] p-4 mx-auto flex items-center justify-between">
        <div>
          <Link
            href="/"
            aria-label="Go home"
            className="flex gap-1 items-center text-sky-500"
          >
            <Image src="/logo.svg" width={160} height={80} alt="Logo" />
          </Link>
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
