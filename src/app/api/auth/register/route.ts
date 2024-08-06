import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

const bcrypt = require('bcrypt');

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (user) {
      return NextResponse.json(
        {
          error: 'User already exists',
        },
        {
          status: 409,
        },
      );
    }

    const SALT_ROUNDS = 10;
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

    data.password = hashedPassword;

    const response = await prisma.user.create({
      data,
      select: {
        name: true,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Something went wrong',
      },
      {
        status: 500,
      },
    );
  }
}
