import "next-auth";
import { UserRole } from "@prisma/client";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquiries
*/

declare module "next-auth" {
    interface User {
        role: UserRole;
    }

    interface Session {
        user: {
            id: string;
            role: UserRole;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        role: UserRole;
    }
}
