import { imdbLink } from '@/lib/constants';
import { fetchMovie } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface MovieImdbProps {
  movieId: string;
}

export async function MovieImdb({ movieId }: MovieImdbProps) {
  const { data } = await fetchMovie(movieId);

  if (!data) return null;

  const { imdb_id } = data;

  return (
    <>
      <Link
        href={`${imdbLink}${imdb_id}`}
        target="_blank"
        className="flex gap-3 group justify-end"
      >
        <Image
          src="/imdb-logo.svg"
          width={32}
          height={16}
          role="presentation"
          alt="IMDb logo"
          className="block md:hidden"
        />
        <Image
          src="/imdb-logo.svg"
          width={64}
          height={32}
          role="presentation"
          alt="IMDb logo"
          className="hidden md:block"
        />
        <p className="flex items-center gap-1 link-underline opacity-80">
          IMDb page <ExternalLink size={16} />
        </p>
      </Link>
    </>
  );
}
