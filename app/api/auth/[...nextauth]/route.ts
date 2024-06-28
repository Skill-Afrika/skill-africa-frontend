import axios from "axios";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { Session } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      id: "login-credentials",
      name: "Login Credentials",
      credentials: {},

      async authorize(credentials: any, req) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          const body = JSON.stringify({ email, password });

          try {
            const res = await axios.post(
              "https://backend-api-fq3o.onrender.com/api/v1/admins/register",
              body,
              config
            );
            const user = await res.data;
            return user;
          } catch (err: any) {
            const error = err.response.data;
            throw new Error(error.message);
          }
        }
        return null;
      },
    }),
  ],

  session: { strategy: "jwt" },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/",
  },

  callbacks: {
    async session({ session, token }: { session: Session; token: any }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }: { token: DefaultJWT; user: any }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
