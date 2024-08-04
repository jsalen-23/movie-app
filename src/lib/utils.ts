import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseRating(rating: number): string {
  const parsedRating = rating.toFixed(1);

  if (parsedRating.endsWith('.0')) {
    return parsedRating.slice(0, -2);
  }

  return parsedRating;
};