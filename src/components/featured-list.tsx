import { ChevronRight } from 'lucide-react';
import MoviesCarousel from './movies-carousel';
import Typography from './typography';
import SectionHeading from './section-heading';

export default async function FeaturedList() {
  return (
    <div className="px-4">
      <SectionHeading heading="What to watch">
        <Typography type="p" className="text-lg">
          Trending this week{' '}
          <ChevronRight size={28} className="inline text-primaryRed" />
        </Typography>
      </SectionHeading>
      <MoviesCarousel />
    </div>
  );
}
