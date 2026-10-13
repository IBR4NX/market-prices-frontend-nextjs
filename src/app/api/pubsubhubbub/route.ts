import { MAIN_URL } from "@/lib/constants";
import { NextRequest, NextResponse } from "next/server";

const TOPIC_URL = MAIN_URL+"/sitemap/rss.xml";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const mode = searchParams.get("hub.mode");
  const topic = searchParams.get("hub.topic");
  const challenge = searchParams.get("hub.challenge");
  const token = searchParams.get("hub.verify_token");

  const expectedToken = process.env.NEXT_PUBLIC_PUBSUBHUBBUB_VERIFY_TOKEN;

  // التحقق من موضوع الاشتراك
  if (topic !== TOPIC_URL) {
    return new NextResponse("Invalid topic", { status: 400 });
  }

  // التحقق من رمز الأمان إذا تم إعداده
  if (expectedToken && token !== expectedToken) {
    return new NextResponse("Invalid token", { status: 403 });
  }

  // قبول طلبات الاشتراك أو إلغاء الاشتراك
  if (
    (mode === "subscribe" || mode === "unsubscribe") &&
    challenge
  ) {
    return new NextResponse(challenge, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  return new NextResponse("Invalid request", { status: 400 });
}

export async function POST(request: NextRequest) {
  // استقبال إشعار تحديث RSS
  const topic = request.nextUrl.searchParams.get("hub.topic");

  if (topic && topic !== TOPIC_URL) {
    return new NextResponse("Invalid topic", { status: 400 });
  }

  // قبول الإشعار
  return new NextResponse(null, { status: 204 });
}