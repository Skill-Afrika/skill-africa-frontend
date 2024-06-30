import "next-auth";
import type { User } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  export interface Session {
    user:    User;
    refresh: string;
    access:  string;
}

export interface User {
    username: string;
    email:    string;
    role:     string;
}
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    user: User,
    accessToken: string;
    refresh: string;
    accessTokenExpires: number;
  }
}
