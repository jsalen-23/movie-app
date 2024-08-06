import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';
import prisma from '@/lib/db';

const bcrypt = require('bcrypt');

const authOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, request) {
        if (credentials) {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user) return null;

          const passwordMatches = await bcrypt.compare(
            credentials.password,
            user.password,
          );

          if (!passwordMatches) {
            return null;
          }

          return {
            id: user.id,
            email: user.email,
          };
        }

        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
