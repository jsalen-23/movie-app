import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import { authOptions as config } from '@/auth';

const authOptions: NextAuthOptions = config;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
