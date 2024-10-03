// import "next-auth";
// import type { User } from "next-auth";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      access: string;
      refresh: string;
      user: {
        username: string;
        email: string;
        uuid: string;
      };
    } & DefaultSession["user"];
  }

  // export interface User {
  //   username: string;
  //   email: string;
  //   role: string;
  // }
}

// declare module "next-auth/jwt" {
//   /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
//   interface JWT {
//     user: User;
//     accessToken: string;
//     refresh: string;
//     accessTokenExpires: number;
//   }
// }
