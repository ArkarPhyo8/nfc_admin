// middleware.ts
import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  apiAuthPrefix,
  authRoutes,
  defaultRoute,
  protectedRoute,
} from "./routes";

export default async function middleware(req: NextRequest) {
  const session = await auth(); //section have username and email form cookie generate
  const { pathname } = req.nextUrl;
  //check api auth routes
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
  //check auth routes
  const isAuthRoute = authRoutes.includes(pathname);
  //check protect routes
  const isProtectedRoute = protectedRoute.includes(pathname);

  //Allow API routes to proceed
  if (isApiAuthRoute) return NextResponse.next();

  if (!session && isProtectedRoute) {
    const loginUrl = new URL("/sign-in", req.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }
  //if auth route and token, Redirect home route
  if (isAuthRoute && session) {
    const homeUrl = new URL(defaultRoute, req.nextUrl.origin);
    return NextResponse.redirect(homeUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/about/:path*", "/dashboard/:path*", "/sign-in"],
};
