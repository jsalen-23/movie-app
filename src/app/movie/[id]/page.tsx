import Image from 'next/image';
import { fetchMovie } from '@/lib/data';
import { parseMovieInfo } from '@/lib/utils';
import MovieDetails from '@/components/MovieDetails';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { imdbLink, tmdbImageLink } from '@/lib/constants';
import PillList from '@/components/PillList';

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
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
  } = await fetchMovie(params.id);

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
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8">
          <div>
            <div className="flex flex-col gap-3">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {title}
              </h1>
              <PillList items={infoArray} classNames="flex gap-5 pb-6" />
            </div>
            <Image
              src={articleImage}
              alt="Placeholder"
              className="block w-max[420px] rounded-xl"
              width={390}
              height={520}
            />
          </div>
          <div className="md:grid md:grid-rows-[96px_auto_1fr]">
            <div className="row-start-1 row-end-2 ml-auto flex items-end mb-4">
              <Link
                href={`${imdbLink}${imdb_id}`}
                target="_blank"
                className="flex gap-3 group"
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
            <MovieDetails
              genres={genres}
              overview={overview}
              classNames="md:row-start-2 md:row-start-end-4"
            />
            <div className="md:row-start-4 md:row-end-5">
              <button className="w-full pill mt-3 mb-6 md:mt-0 md:mb-0 py-3 bg-primaryRed">
                Add to my list
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
