import { authOptions } from '@/auth';
import { addMovieToList, removeMovieFromList } from '@/lib/actions';
import { fetchUserMovies } from '@/lib/data';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

export default async function AddButton({ movieId }: { movieId: string }) {
  const addMovieToListWithId = addMovieToList.bind(null, movieId);
  const removeMovieFromListWithId = removeMovieFromList.bind(null, movieId);
  const session = await getServerSession(authOptions);
  const userMovies = session?.user && await fetchUserMovies();
  const userHasMovie = userMovies?.some(
    userMovie => userMovie.movieId === movieId,
  );

  return (
    <>
      {session?.user ? (
        <form
          action={
            userHasMovie ? removeMovieFromListWithId : addMovieToListWithId
          }
        >
          <button className="w-full pill mt-3 mb-6 md:mt-0 md:mb-0 py-3 bg-primaryRed">
            {userHasMovie ? 'Remove from my list' : 'Add to my list'}
          </button>
        </form>
      ) : (
        <Link
          href="/login"
          className="block text-center w-full pill mt-3 mb-6 md:mt-0 md:mb-0 py-3 px-6 bg-primaryRed"
        >
          Login to add to your list
        </Link>
      )}
    </>
  );
}
