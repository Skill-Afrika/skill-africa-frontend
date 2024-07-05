import {
  apiLogin,
  // apiAuthorize,
  fetchApiUser,
  apiSignOut,
  fetchRefreshAccessToken,
} from "./services/api/auth-api";
import { jwt } from "@/lib/utils";
import type { NextAuthOptions, Session } from "next-auth";
import type { DefaultJWT, JWT } from "next-auth/jwt";
import { z } from "zod";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "login-credentials",
      name: "Login Credentials",
      credentials: {
        // This credentials isn't necessary
        // username: {
        //   label: "Username",
        //   type: "username",
        // },
        // email: {
        //   label: "Email",
        //   type: "email",
        // },
        // username: {
        //   label: "Username",
        //   placeholder: "user",
        // },
        // password: {
        //   label: "Password",
        //   type: "password",
        // },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            username: z.string(),
            email: z.string().email(),
            password: z.string(),
          })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const cred = parsedCredentials.data;

          try {
            const user = await apiLogin(cred);
            console.log(user);
            return user;
          } catch (error: any) {
            const err = error.response?.data;

            // console.log(err);

            throw new Error(err?.non_field_errors);
          }
        }
        return null;
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: parseInt(process.env.NEXTAUTH_JWT_AGE!) || 1209600,
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
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
