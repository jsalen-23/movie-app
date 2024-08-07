import { fetchMovie } from '@/lib/data';
import { parseMovieInfo } from '@/lib/utils';
import PillList from '../pill-list';

interface MovieHeadingProps {
  movieId: string;
}

export async function MovieHeading({ movieId }: MovieHeadingProps) {
  const { data } = await fetchMovie(movieId);

  if (!data) return null;

  const { title, release_date, runtime, vote_average } = data;

  const infoArray = parseMovieInfo({
    adult: data?.adult,
    releaseDate: release_date,
    runtime,
    voteAverage: vote_average,
  });

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      {infoArray.length > 0 && (
        <PillList items={infoArray} classNames="flex gap-5" />
      )}
    </div>
  );
}
