import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getAllResources } from '@/lib/data';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Card from './Card';

export default async function FeaturedList() {
  const resources = await getAllResources();

  return (
    <div className="px-4">
      <h2 className="text-4xl pb-4 font-semibold text-primaryRed">
        What to watch
      </h2>
      <Link href="/trending" className="group text-xl lg:text-2xl">
        Trending this week{' '}
        <ChevronRight
          size={36}
          className="inline group-hover:text-primaryRed transition-colors duration-200"
        />
      </Link>
      {resources.length > 0 ? (
        <Carousel
          className="pt-4 max-w-[300px] md:max-w-[650px] lg:max-w-none"
          opts={{
            align: 'start',
            loop: true,
            breakpoints: {
              '(min-width: 768px)': {
                slidesToScroll: 4,
              },
              '(min-width: 1280px)': {
                slidesToScroll: 6,
              },
            },
          }}
        >
          <CarouselContent>
            {resources.map(resource => (
              <CarouselItem
                key={resource.id}
                className="basis-1/2 md:basis-1/4 xl:basis-1/6"
              >
                <Card {...resource} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : null}
    </div>
  );
}
