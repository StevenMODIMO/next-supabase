import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Protect /account routes
  if (path.startsWith("/account")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Otherwise, continue normally
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/account", "/login", "/signup"],
};
