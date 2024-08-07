'use server';

import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import prisma from './db';

async function getSessionUser() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new Error('User not authenticated');
  }

  const userEmail = session.user.email;
  if (!userEmail) {
    throw new Error('User email not found');
  }

  const user = await prisma.user.findUnique({
    where: { email: userEmail },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
}

export async function addMovieToList(movieId: string) {
  try {
    const user = await getSessionUser();

    const existingMovie = await prisma.movie.findFirst({
      where: {
        userId: user.id,
        movieId,
      },
    });

    if (existingMovie) {
      throw new Error('Movie already in list');
    }

    await prisma.movie.create({
      data: {
        userId: user.id,
        movieId,
      },
    });

    revalidatePath(`/movie/${movieId}`);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add movie to list');
  }
}

export async function removeMovieFromList(movieId: string) {
  try {
    const user = await getSessionUser();

    const movie = await prisma.movie.findFirst({
      where: {
        userId: user.id,
        movieId,
      },
    });

    if (!movie) {
      throw new Error('Movie not found');
    }

    await prisma.movie.delete({
      where: {
        id: movie.id,
      },
    });

    revalidatePath(`/movie/${movieId}`);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to remove movie from list');
  }
}
