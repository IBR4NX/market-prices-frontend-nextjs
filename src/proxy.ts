import { NextRequest, NextResponse } from "next/server";

const MAIN_DOMAIN = "ibovs.vercel.app";
const ABOUT_DOMAIN = "about.ibovs.vercel.app";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0].toLowerCase();
  if (!hostname) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;

  // نطاق About الفرعي
  if (hostname === ABOUT_DOMAIN) {
    // السماح بملفات Next.js وواجهات API بالعمل بصورة طبيعية
    if (
      pathname.startsWith("/_next") ||
      pathname === "/favicon.ico" ||
      pathname.startsWith("/api")||
      pathname.startsWith("/google")
    ) {
      return NextResponse.next();
    }

    // عرض صفحة About على النطاق الفرعي
    const url = request.nextUrl.clone();
    url.pathname = `/about${pathname === "/" ? "" : pathname}`;

    return NextResponse.rewrite(url);
  }

  // النطاق الرئيسي وجميع صفحاته
  if (hostname === MAIN_DOMAIN) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
