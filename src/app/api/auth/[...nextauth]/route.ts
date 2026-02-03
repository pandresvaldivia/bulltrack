import { compareEncrypted } from '@/modules/shared/lib/encryption/helpers/encrypt';
import prisma from '@/modules/shared/lib/prisma/prisma';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
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
            const { password, ...userWithoutPassword } = user;

            return userWithoutPassword;
          }
        }

        throw new Error('Invalid credentials');
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
});

export { handler as GET, handler as POST };
