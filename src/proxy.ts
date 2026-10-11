import { NextRequest, NextResponse } from "next/server";

const MAIN_DOMAIN = splitDomain(process.env.NEXT_PUBLIC_MAIN_URL);
const ABOUT_DOMAIN = splitDomain(process.env.NEXT_PUBLIC_ABOUT_URL);
const PRICES_DOMAIN = splitDomain(process.env.NEXT_PUBLIC_PRICES_URL);
const BLOG_DOMAIN = splitDomain(process.env.NEXT_PUBLIC_BLOG_URL);
const SUPPORTED_DOMAINS = [ABOUT_DOMAIN, PRICES_DOMAIN, BLOG_DOMAIN];

export function proxy(request: NextRequest) {
  const hostname = splitDomain(request.headers.get("host") as string );
  if (!hostname) {
    return NextResponse.next();
  }
  const pathname = request.nextUrl.pathname;
  const isSUPPORTED = matchesRoute(
    hostname,
    SUPPORTED_DOMAINS as string[],
  );
  if (
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/google")
  ) {
    return NextResponse.next();
  }

  // console.log("proxy →", request.method, pathname, hostname, SUPPORTED_DOMAINS, isSUPPORTED);
  if (isSUPPORTED) {
    const url = request.nextUrl.clone();
    if (hostname === ABOUT_DOMAIN) {
      url.pathname = `/about${pathname === "/" ? "" : pathname}`;
    }
    if (hostname === PRICES_DOMAIN) {
      url.pathname = `/prices${pathname === "/" ? "" : pathname}`;
    }
    if (hostname === BLOG_DOMAIN) {
      url.pathname = `/blog${pathname === "/" ? "" : pathname}`;
      console.log(
        "proxy rewrite →",
        url.pathname,
        request.method,
        request.nextUrl.search,
      );
    }
    return NextResponse.rewrite(url);
  }

  // النطاق الرئيسي وجميع صفحاته
  if (hostname === MAIN_DOMAIN) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|public|favicon|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|json)$).*)",
  ],
};


function splitDomain(domain: string | undefined): string | undefined {
  if (!domain) return undefined;
  return domain.split(":")[0].toLowerCase();
}
function matchesRoute(path: string, routes: string[]): boolean {
  return routes.some((route) => path === route || path.startsWith(route));
}
