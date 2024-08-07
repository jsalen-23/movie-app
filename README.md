# MovieAPP

Demo link: [https://movie-app-ivory-mu.vercel.app/](https://movie-app-ivory-mu.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

MovieAPP is a web application that allows users to find movies and view details about them. Users can create an account so they can add their favorites movies into their own curated List. 

The application uses the [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch movie data, and user authentication is handled by [NextAuth.js](https://next-auth.js.org/getting-started/introduction).

Database is handled by [PostgreSQL](https://www.postgresql.org/) and uses [Prisma](https://www.prisma.io/) as an ORM.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Main Dependencies](#main-dependencies)

## Features

- User authentication with NextAuth.js
- User can add movies to their favorites list
- User can view their favorites list
- User can remove movies from their favorites list
- User can find latest trends movies

## Getting Started

1. Install the dependencies:

```bash
npm install
```

2. Copy the `.env.example` file to `.env.local` and fill in the required environment variables:

```bash
cp .env.example .env.local
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Main Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn](https://shadcn.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [React Hook Form](https://react-hook-form.com/)