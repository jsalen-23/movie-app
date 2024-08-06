import { AllResources, Movie, Resource } from './definitions';

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
