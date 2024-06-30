import {
  apiLogin,
  apiAuthorize,
  fetchApiUser,
  apiSignOut,
  fetchRefreshAccessToken,
} from "./services/api/auth-api";
import { jwt } from "@/lib/utils";
import type { NextAuthOptions, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import { z } from "zod";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    // signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: parseInt(process.env.NEXTAUTH_JWT_AGE!) || 1209600,
  },
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      id: "login-credentials",
      name: "Login Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        // username: {
        //   label: "Username",
        //   placeholder: "user",
        // },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string() })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          try {
            const creds = parsedCredentials.data;
            return await apiAuthorize(creds!);
          } catch (error) {
            if (error instanceof Response) {
              return null;
            }
            return null;

            throw new Error("An error has occurred during login request");
          }
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        if (session.type === "MANUAL") {
          const user = await fetchApiUser(token);
          token.user = user
          // return token;
          // return { ...token, ...user };
        }
        token.user = session.user
        // return token;
        // return { ...token, ...session };
      }
      if (user) {
        token.user = user;
        // return { ...token, ...user };
      }
      const { exp: accessTokenExpires } = jwt.decode(token.accessToken);
      // if (!accessTokenExpires) {
      //   return token;
      // }

      const currentUnixTimestamp = Math.floor(Date.now() / 1000);
      const accessTokenHasExpired = currentUnixTimestamp > accessTokenExpires;

      if (accessTokenHasExpired) {
        token =  await refreshAccessToken(token);
        const user = await fetchApiUser(token);
        token.user = user
      }
      return token;
    },
    async session({ session, token }) {
      if (token.error) {
        throw new Error("Refresh token has expired");
      }

      session.accessToken = token.accessToken;
      session.user = token.user
      // session.user. = token.email || "";

      return session;
    },
  },
  events: {
    async signOut({ token }) {
      apiSignOut(token);
    },
  },
};

async function refreshAccessToken(token: JWT) {
  try {
    const refreshedAccessToken: { access_token: string } =
      await fetchRefreshAccessToken(token);
    const { exp } = jwt.decode(refreshedAccessToken.access_token);
    return {
      ...token,
      accessToken: refreshedAccessToken.access_token,
      exp,
    };
  } catch (error) {
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}
