import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const adminPasskey = request.cookies.get("admin")?.value;

  if (!adminPasskey) {
    const originalUrl = request.nextUrl.pathname;
    const redirectUrl = new URL(
      `/?redirect=${encodeURIComponent(originalUrl)}`,
      request.url
    );
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
