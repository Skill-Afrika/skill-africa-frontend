import { apiLogin, apiAuthorize, fetchApiUser, apiSignOut, fetchRefreshAccessToken } from "./api/auth-api";
import fetchClient from "@/lib/fetch-client";
import { jwt } from "@/lib/utils";
import type { NextAuthOptions, User } from "next-auth";
import type { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    // signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: parseInt(process.env.NEXTAUTH_JWT_AGE!) || 1209600,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        // email: {
        //   label: "Email",
        //   type: "email",
        // },
        username: {
          label: "Username",
          placeholder: "user",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        try {

          return await apiAuthorize(credentials!)
        } catch (error) {
          
          if (error instanceof Response) {
            return null;
          }
          return null;

          throw new Error("An error has occurred during login request");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        if (session.type === "MANUAL") {
          const user = await fetchApiUser(token);
          return { ...token, ...user };
        }
        return { ...token, ...session };
      }
      if (user) {
        return { ...token, ...user };
      }
      const { exp: accessTokenExpires } = jwt.decode(token.accessToken);
      if (!accessTokenExpires) {
        return token;
      }
      
      const currentUnixTimestamp = Math.floor(Date.now() / 1000);
      const accessTokenHasExpired = currentUnixTimestamp > accessTokenExpires;
      
      // console.log(accessTokenHasExpired);
      if (accessTokenHasExpired) {
        return await refreshAccessToken(token);
      }
      return token;
    },
    async session({ session, token }) {
      
      if (token.error) {
        throw new Error("Refresh token has expired");
      }

      session.accessToken = token.accessToken;
      session.user.name = token.name || "";
      session.user.email = token.email || "";
      session.user.username = token.username || "";
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
    const refreshedAccessToken: { access_token: string } = await fetchRefreshAccessToken(token);
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
