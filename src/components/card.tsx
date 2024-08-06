import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Resource } from '@/lib/definitions';
import { parseRating } from '@/lib/utils';
import { tmdbImageLink } from '@/lib/constants';

export default function Card({
  id,
  media_type,
  title,
  vote_average,
  poster_path,
}: Resource) {
  const articleUrl = `/${media_type}/${id}`;
  const articleImage = `${tmdbImageLink}${poster_path}`;

  return (
    <article className="rounded-xl">
      <Link href={articleUrl}>
        <Image
          src={articleImage}
          alt="Placeholder"
          className="block rounded-t-xl w-full lg:hidden"
          width={150}
          height={220}
        />
        <Image
          src={articleImage}
          alt="Placeholder"
          className="hidden lg:block rounded-t-xl w-full"
          width={190}
          height={275}
        />
      </Link>
      <div className="px-2 py-3 rounded-b-xl bg-darkRed">
        {vote_average && (
          <div className="flex align-items gap-2 pb-2">
            <Star size={18} className="text-primary self-center fill-primary" />{' '}
            <span className="opacity-80 text-sm">
              {parseRating(vote_average)}
            </span>
          </div>
        )}
        <Link href={articleUrl}>
          <h3 className="min-h-[3em] text-base font-bold line-clamp-2 uppercase">
            {title}
          </h3>
        </Link>
      </div>
    </article>
  );
}
