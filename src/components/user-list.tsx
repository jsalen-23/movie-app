import { fetchUserList } from '@/lib/data';
import Card from './movie-card';
import SectionHeading from './section-heading';
import Typography from './typography';
import { ChevronRight } from 'lucide-react';

export default async function UserList() {
  const movies = await fetchUserList();

  return (
    <>
      <SectionHeading heading="Your favorites">
        <Typography type="p" className="text-lg pb-4">
          Explore your curated list of top picks{' '}
          <ChevronRight size={28} className="inline text-primaryRed" />
        </Typography>
      </SectionHeading>
      {movies.length > 0 && (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {movies.map(movie => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </>
  );
}
