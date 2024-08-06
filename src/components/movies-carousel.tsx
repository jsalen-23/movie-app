import { getAllResources } from '@/lib/data';
import { EmblaOptionsType } from 'embla-carousel';
import Card from './card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

export default async function MoviesCarousel() {
  const resources = await getAllResources();

  const options: EmblaOptionsType = {
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
  };

  return (
    <Carousel
      className="pt-4 max-w-[300px] md:max-w-[650px] lg:max-w-none"
      opts={options}
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
  );
}
