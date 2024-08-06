import { Movie } from '@/lib/definitions';
import { buttonVariants } from './ui/button';

interface MovieDetailsProps {
  classNames?: string;
  genres: Movie['genres'];
  overview: Movie['overview'];
}

export default function MovieDetails({
  genres,
  overview,
  classNames,
}: MovieDetailsProps) {
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
