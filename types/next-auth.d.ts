import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id?: string;
      name?: string;
      icon?: string;
    } & DefaultSession["user"];
  }
}
