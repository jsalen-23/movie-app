import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseRating(rating: number): string {
  const parsedRating = rating.toFixed(1);

  if (parsedRating.endsWith('.0')) {
    return parsedRating.slice(0, -2);
  }

  return parsedRating;
}

export function parseDate(date: string): string {
  return new Date(date).getFullYear().toString();
}

export function parseMovieInfo({
  adult,
  releaseDate,
  runtime,
  voteAverage,
}: {
  adult: boolean;
  releaseDate: string;
  runtime: number;
  voteAverage: number;
}): string[] {
  const parsedRating = parseRating(voteAverage);
  const parsedDate = parseDate(releaseDate);
  const parsedInfo = [
    adult ? '+18' : '',
    parsedDate,
    `${runtime} min`,
    parsedRating,
  ].filter(value => Boolean(value));

  return parsedInfo;
}
