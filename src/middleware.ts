import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquiries
*/

export async function middleware(request: NextRequest) {
    const token = await getToken({ req: request });

    if (
        token &&
        (request.nextUrl.pathname.startsWith("/login") ||
            request.nextUrl.pathname.startsWith("/register"))
    ) {
        return NextResponse.redirect(new URL("/dash", request.url));
    }

    if (!token && request.nextUrl.pathname.startsWith("/dash")) {
        return NextResponse.redirect(
            new URL(
                `/login?redirect=${encodeURI(request.nextUrl.pathname)}`,
                request.url,
            ),
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|favicon.ico).*)"],
};
