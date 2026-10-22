import { NextRequest, NextResponse, NextFetchEvent } from "next/server";
import { headers } from "next/headers";
import { logger } from "./lib/axiom/server";
import { transformMiddlewareRequest } from "@axiomhq/nextjs";

const MAIN_DOMAIN = splitDomain(process.env.NEXT_PUBLIC_MAIN_URL);
const ABOUT_DOMAIN = splitDomain(process.env.NEXT_PUBLIC_ABOUT_URL);
const PRICES_DOMAIN = splitDomain(process.env.NEXT_PUBLIC_PRICES_URL);
const BLOG_DOMAIN = splitDomain(process.env.NEXT_PUBLIC_BLOG_URL);
const SUPPORTED_DOMAINS = [ABOUT_DOMAIN, PRICES_DOMAIN, BLOG_DOMAIN];

export async function proxy(request: NextRequest, event: NextFetchEvent) {
  const hostname = splitDomain(request.headers.get("host") as string);
  const pathname = request.nextUrl.pathname;
  console.log((await headers()).get("user-agent")?.split(" ").slice(-3).join(" "));
  logger.info(...transformMiddlewareRequest(request));

  if (
    !hostname ||
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/google")
  ) {
    return NextResponse.next();
  }
  const isSUPPORTED = matchesRoute(hostname, SUPPORTED_DOMAINS as string[]);
  const userAgent = request.headers.get("user-agent") ?? "Unknown";
  const log = {
    time: new Date().toISOString(),
    method: request.method,
    path: pathname,
    userAgent,
    referer: request.headers.get("referer"),
    ip: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? "Unknown",
  };
  // console.log("main: ",MAIN_DOMAIN);
  // console.info("[VISIT]", JSON.stringify(log));

  // console.log("proxy →", request.method, pathname, hostname, SUPPORTED_DOMAINS, isSUPPORTED);
  event.waitUntil(logger.flush());
  if (isSUPPORTED) {
    const url = request.nextUrl.clone();
    if (hostname === ABOUT_DOMAIN) {
      url.pathname = `/about${pathname === "/" ? "" : pathname}`;
    }
    if (hostname === PRICES_DOMAIN) {
      if (pathname === "/") {
        url.pathname = `/prices${pathname === "/" ? "" : pathname}`;
      } else {
        url.pathname = `${pathname.startsWith("/") ? pathname : "/" + pathname}`;
      }
    }
    if (hostname === BLOG_DOMAIN) {
      url.pathname = `/blog${pathname === "/" ? "" : pathname}`;
      // console.log(
      //   "proxy rewrite →",
      //   url.pathname,
      //   request.method,
      // );
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
  matcher: ["/((?!api|_next/static|_next/image|public|favicon|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|json)$).*)"],
};

function splitDomain(domain: string | undefined): string | undefined {
  if (!domain) return undefined;
  return domain.split(":")[0].toLowerCase();
}
function matchesRoute(path: string, routes: string[]): boolean {
  return routes.some((route) => path === route || path.startsWith(route));
}
