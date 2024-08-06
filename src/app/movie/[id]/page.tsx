import AddButton from '@/components/add-button';
import ErrorBanner from '@/components/error-banner';
import MovieDetails from '@/components/movie-details';
import MovieHeading from '@/components/movie-details/movie-heading';
import { imdbLink, tmdbImageLink } from '@/lib/constants';
import { fetchMovie } from '@/lib/data';
import { parseMovieInfo } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  const { data, error } = await fetchMovie(params.id);

  if (error || !data) {
    return <ErrorBanner ctaLink='/' ctaText='Go back home' heading='Something went wrong.' />
  }

  const {
    adult,
    genres,
    imdb_id,
    overview,
    poster_path,
    release_date,
    runtime,
    title,
    vote_average,
  } = data;

  const articleImage = `${tmdbImageLink}${poster_path}`;

  const infoArray = parseMovieInfo({
    adult,
    releaseDate: release_date,
    runtime,
    voteAverage: vote_average,
  });

  return (
    <main className="flex flex-col items-center">
      <section className="w-full max-w-[1140px] py-5 px-4 lg:pt-10 flex flex-col gap-4">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:grid-rows-[auto_1fr_auto] md:gap-6">
          <div className="md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2">
            <MovieHeading infoArray={infoArray} title={title} />
          </div>

          <div className="md:row-start-2 md:row-end-4">
            <Image
              src={articleImage}
              alt={`Movie poster for ${title}`}
              className="block w-max[420px] rounded-xl"
              width={390}
              height={520}
            />
          </div>

          <div className="row-start-1 row-end-2 col-start-2 col-end-3 self-end">
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
          </div>

          <div className="row-start-2 row-end-3 col-start-2 col-end-3">
            <MovieDetails genres={genres} overview={overview} />
          </div>

          <div className="row-start-3 row-end-4 col-start-2 col-end-3">
            <AddButton />
          </div>
        </div>
      </section>
    </main>
  );
}
