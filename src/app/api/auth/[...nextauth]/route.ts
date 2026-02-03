import { compareEncrypted } from '@/modules/shared/lib/encryption/helpers/encrypt';
import prisma from '@/modules/shared/lib/prisma/prisma';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'user@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new Error('No credentials provided');
        }

        const { email, password } = credentials;

        const user = await prisma.user.findUnique({
          where: { email },
        });

        const isValidPassword = await compareEncrypted(
          password,
          user?.password || '',
        );

        if (user && user.password) {
          if (isValidPassword) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
            };
          }
        }

        throw new Error('Invalid credentials');
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
