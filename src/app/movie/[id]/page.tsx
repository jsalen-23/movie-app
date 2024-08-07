import AddButton from '@/components/add-button';
import {
  MovieDetails,
  MovieHeading,
  MovieImdb,
  MoviePoster,
} from '@/components/movie-details';
import {
  DetailHeadingSkeleton,
  DetailPosterSkeleton,
  MovieDetailButtonSkeleton,
  MovieDetailDescriptionSkeleton,
  MovieDetailLinkSkeleton,
} from '@/components/skeletons';
import { Suspense } from 'react';

export default async function MoviePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="flex flex-col items-center">
      <section className="w-full max-w-[1140px] py-5 px-4 lg:pt-10 flex flex-col gap-4">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:grid-rows-[auto_1fr_auto] md:gap-6">
          <div className="md:row-start-1 md:row-end-2 md:col-start-1 md:col-end-2">
            <Suspense fallback={<DetailHeadingSkeleton />}>
              <MovieHeading movieId={params.id} />
            </Suspense>
          </div>

          <div className="md:row-start-2 md:row-end-4">
            <Suspense fallback={<DetailPosterSkeleton />}>
              <MoviePoster movieId={params.id} />
            </Suspense>
          </div>

          <div className="row-start-1 row-end-2 col-start-2 col-end-3 self-end">
            <Suspense fallback={<MovieDetailLinkSkeleton />}>
              <MovieImdb movieId={params.id} />
            </Suspense>
          </div>

          <div className="row-start-2 row-end-3 col-start-2 col-end-3">
            <Suspense fallback={<MovieDetailDescriptionSkeleton />}>
              <MovieDetails movieId={params.id} />
            </Suspense>
          </div>

          <div className="row-start-3 row-end-4 col-start-2 col-end-3">
            <Suspense fallback={<MovieDetailButtonSkeleton />}>
              <AddButton movieId={params.id} />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
