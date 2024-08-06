import { ChevronRight } from 'lucide-react';
import MoviesCarousel from './movies-carousel';
import Typography from './typography';

export default async function FeaturedList() {
  return (
    <div className="px-4">
      <Typography type="h2" className="pb-4 text-primaryRed">
        What to watch
      </Typography>
      <Typography type="p" className="text-lg">
        Trending this week{' '}
        <ChevronRight size={28} className="inline text-primaryRed" />
      </Typography>
      <MoviesCarousel />
    </div>
  );
}
