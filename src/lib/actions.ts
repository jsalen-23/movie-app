'use server';

import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import prisma from './db';
import { revalidatePath } from 'next/cache';

export async function addMovieToList(movieId: string) {
  if (!movieId) {
    throw new Error('Movie ID not provided');
  }

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
    });

    if (!user) {
      throw new Error('User not found');
    }

    await prisma.movie.create({
      data: {
        userId: user.id,
        movieId,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add movie to list');
  }

  revalidatePath(`/movie/${movieId}`);
}

export async function removeMovieFromList(movieId: string) {
  if (!movieId) {
    throw new Error('Movie ID not provided');
  }

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
    });

    if (!user) {
      throw new Error('User not found');
    }

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
  } catch (error) {
    console.error(error);
    throw new Error('Failed to remove movie from list');
  }

  revalidatePath(`/movie/${movieId}`);
}
