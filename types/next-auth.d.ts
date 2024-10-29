// import "next-auth";
// import type { User } from "next-auth";
import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
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
}
