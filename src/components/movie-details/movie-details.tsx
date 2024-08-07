import { buttonVariants } from '@/components/ui/button';
import { fetchMovie } from '@/lib/data';

interface MovieDetailsProps {
  classNames?: string;
  movieId: string;
}

export async function MovieDetails({
  movieId,
  classNames,
}: MovieDetailsProps) {
  const { data } = await fetchMovie(movieId);

  if (!data) return null;

  const { genres, overview } = data;

  return (
    <div className={classNames}>
      {genres.length > 0 && (
        <ul className="flex flex-wrap gap-3">
          {genres.map(genre => (
            <li
              key={genre.id}
              className={buttonVariants({ variant: 'outline' })}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      )}
      {overview && (
        <p className="text-primary text-sm leading-7 [&:not(:first-child)]:mt-6">
          {overview}
        </p>
      )}
    </div>
  );
}
