import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import prisma from './db';
import { AllResources, Movie, Resource, User } from './definitions';

export enum ENDPOINTS {
  allResources = '/trending/all/week',
  movie = '/movie',
  tv = '/tv',
}

function getUrl(endpoint: ENDPOINTS | string): string {
  const BASE_URL = process.env.API_URL;
  const API_KEY = process.env.API_KEY;

  if (!BASE_URL || !API_KEY) {
    throw new Error('API_URL or API_KEY is not defined');
  }

  const FINAL_URL = new URL(BASE_URL + endpoint);
  FINAL_URL.searchParams.append('api_key', API_KEY);

  return FINAL_URL.toString();
}

async function fetchAPI<T>(url: RequestInfo): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return data;
}

export async function getAllResources(): Promise<Resource[]> {
  try {
    const endpoint = getUrl(ENDPOINTS.allResources);
    const response = await fetchAPI<AllResources>(endpoint);

    return parseResource(response.results);
  } catch (error) {
    console.error('Failed to fetch all resources', error);
    throw error;
  }
}

export async function fetchMovie(
  id: string,
): Promise<{ data?: Movie; error: boolean }> {
  try {
    const endpoint = getUrl(ENDPOINTS.movie + `/${id}`);
    const response = await fetchAPI<Movie>(endpoint);

    return {
      data: response,
      error: false,
    };
  } catch (error) {
    return {
      data: undefined,
      error: true,
    };
  }
}

function parseResource(resource: Resource[]): Resource[] {
  return resource.filter(
    item => item.title && item.poster_path && item.media_type === 'movie',
  );
}

export async function fetchUserByEmail(): Promise<User> {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error('User not authenticated');
  }

  const userEmail = session.user.email;
  if (!userEmail) {
    throw new Error('User email not found');
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user');
  }
}

export async function fetchUserMovies() {
  try {
    const user = await fetchUserByEmail();

    const movies = await prisma.movie.findMany({
      where: {
        userId: user.id,
      },
      select: {
        movieId: true,
      },
    });

    if (!movies) {
      throw new Error('Movies not found');
    }

    return movies;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch user movies');
  }
}
