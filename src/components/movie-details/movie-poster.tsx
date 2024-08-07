import { tmdbImageLink } from '@/lib/constants';
import { fetchMovie } from '@/lib/data';
import Image from 'next/image';

interface MoviePosterProps {
  movieId: string;
}

export async function MoviePoster({ movieId }: MoviePosterProps) {
  const { data } = await fetchMovie(movieId);

  if (!data) return null;

  const { poster_path, title } = data;
  const articleImage = `${tmdbImageLink}${poster_path}`;

  return (
    <>
      <Image
        src={articleImage}
        alt={`Movie poster for ${title}`}
        className="block w-max[420px] rounded-xl"
        width={390}
        height={520}
      />
    </>
  );
}
