import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // If the URL already has a language, let it pass
  if (pathname.startsWith('/en') || pathname.startsWith('/es')) {
    return NextResponse.next();
  }

  // Otherwise, redirect to English by default
  // (You can change this to '/es' if you want Spanish as the default!)
  request.nextUrl.pathname = `/en${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

// This ensures we don't accidentally redirect image files or Next.js background data
export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'],
};