import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = NextResponse.next();

  if (pathname.startsWith("/vibe-coders/portal")) {
    const token = request.cookies.get("vc-auth-token")?.value;
    if (!token) {
      const loginUrl = new URL("/vibe-coders/portal/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
    response.headers.set("x-portal", "vibe-coders");
  }

  return response;
}

export const config = {
  matcher: ["/vibe-coders/portal/:path*"],
};
