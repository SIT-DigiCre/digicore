import { PrismaClient } from "@prisma/client";
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { OAuthUserConfig } from "next-auth/providers/oauth";

const googleProviderOption: OAuthUserConfig<GoogleProfile> = {
  clientId: process.env.GOOGLE_CLIENT_ID ?? "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET_ID ?? "",
};

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [GoogleProvider(googleProviderOption)],
  secret: process.env.NEXTAUTH_URL || "secret",
  callbacks: {
    signIn: ({ account, profile }) => {
      return (
        (account?.provider === "google" &&
          profile?.email?.endsWith("@shibaura-it.ac.jp")) ??
        false
      );
    },
    session: async ({ session }) => {
      if (session.user?.email) {
        const user = await prisma.user.findFirst({
          where: { studentNumber: session.user.email.split("@")[0] },
        });
        return {
          ...session,
          user: {
            id: user?.id,
            name: user?.name,
            icon: user?.iconURL,
          },
        };
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
