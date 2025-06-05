import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { SignInFormSchema } from "./schemas/auth";
import { compare } from "bcryptjs";
import { prisma } from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 2, // 7 days
  },

  jwt: {
    maxAge: 60 * 2,
  },
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials) return null;
        try {
          const { email, password } = await SignInFormSchema.parseAsync(
            credentials
          );
          const superAdminAccount = await prisma.admin.findUnique({
            where: { email },
          });
          if (!superAdminAccount || !superAdminAccount.password) return null;
          const isValidPassword = await compare(
            password,
            superAdminAccount.password
          );
          if (!isValidPassword) return null;
          // Remove password before returning author object
          const { password: _password, ...userWithoutPassword } =
            superAdminAccount;
          return userWithoutPassword;
        } catch (err) {
          // console.error("Authorization error:", error);
          throw new Error(
            err instanceof Error && err.message
              ? err.message
              : "Invalid email or password"
          );
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        Object.assign(token, user);
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        ...token,
      };
      return session;
    },
  },
});
