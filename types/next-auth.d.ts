import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      name?: string;
      icon?: string;
    } & DefaultSession["user"];
  }
}
