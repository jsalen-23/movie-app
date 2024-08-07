import Image from 'next/image';
import Link from 'next/link';
import Typography from './typography';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';

export default async function HeroBanner() {
  const session = await getServerSession(authOptions);

  return (
    <div className="relative w-full pt-16 h-[600px] md:max-h-[500px] md:pt-16 overflow-hidden">
      <div className="max-w-[700px] px-4 mx-auto">
        <Typography type="h1" className="text-primary text-center pb-8">
          Your movies and series, finally in{' '}
          <span className="underline-gradient"> one place</span>
        </Typography>
        <Typography type="p">
          Meet MovieAPP, the free app that combines the most popular movies and
          series for easy search and discovery.
        </Typography>
      </div>
      {!session?.user && (
      <div className="flex justify-center gap-3 mx-auto mt-12 px-4">
        <Link href="/register" className="w-full max-w-48 py-3 text-center pill">
          Register
        </Link>
        <Link
          href="/login"
          className="w-full max-w-48 py-3 text-center pill pill-active"
        >
          Login
        </Link>
      </div>
      )}
      <Image
        alt="Deadpool & Wolverine Poster"
        className="max-w-[200px] lg:max-w-none opacity-20 absolute left-0 bottom-0 motion-safe:animate-slide-half-right -translate-x-1/2 lg:motion-safe:animate-slide-right lg:translate-x-0"
        role="presentation"
        src="/images/deadpool-wolverine-poster.webp"
        width={250}
        height={350}
      />
      <Image
        alt="Mandalorian Poster"
        className="max-w-[200px] lg:max-w-none opacity-20 absolute right-0 top-1/4 motion-safe:animate-slide-half-left translate-x-1/2 lg:motion-safe:animate-slide-left lg:translate-x-0 lg:top-0"
        role="presentation"
        src="/images/mandalorian-poster.webp"
        width={250}
        height={350}
      />
    </div>
  );
}
