# MovieAPP

Demo link: [https://movie-app-ivory-mu.vercel.app/](https://movie-app-ivory-mu.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

MovieAPP is a web application that allows users to find movies and view details about them. Users can create an account so they can add their favorites movies into their own curated List. 

The application uses the [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) to fetch movie data, and user authentication is handled by [NextAuth.js](https://next-auth.js.org/getting-started/introduction).

Database is handled by [PostgreSQL](https://www.postgresql.org/) and uses [Prisma](https://www.prisma.io/) as an ORM.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Main Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn](https://shadcn.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [React Hook Form](https://react-hook-form.com/)