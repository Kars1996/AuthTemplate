import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquiries
*/

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as any,
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.given_name
                        ? profile.given_name
                        : profile.name,
                    email: profile.email,
                    image: profile.picture,
                    role: "USER",
                    createdAt: new Date(),
                };
            },
        }),
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: "noreply@kars.bio",
        }),
    ],
    callbacks: {
        session: async ({ session, user }) => {
            if (session?.user) {
                session.user.id = user.id;
                session.user.role = user.role;
            }
            return session;
        },
        jwt: async ({ token, user }) => {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
    },
    session: {
        strategy: "database",
    },
    pages: {
        signIn: "/login",
        error: "/error",
    },
};

export default NextAuth(authOptions);