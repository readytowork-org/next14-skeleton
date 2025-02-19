import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("host");

  let shouldRedirect = false;

  // Redirect www to non-www
  if (host?.startsWith("www.")) {
    url.host = host.replace(/^www\./, "");
    shouldRedirect = true;
  }

  // Redirect trailing slash URLs to non-trailing-slash version (except for "/")
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
    shouldRedirect = true;
  }

  // Perform redirect if needed
  if (shouldRedirect) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: "/:path*",
};
