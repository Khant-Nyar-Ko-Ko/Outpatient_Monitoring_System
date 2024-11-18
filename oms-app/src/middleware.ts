import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get("ODPAuthToken");
  const url = req.nextUrl.clone();

  if ((url.pathname === "/auth/login" || url.pathname === "/auth/signup") && token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!token && !url.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/user-guide", "/patients/:path*"],
};
