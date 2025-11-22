// XMLを配信するエンドポイントを生成しているファイル
import { generateRssFeed } from "@/lib/rss";
import { NextResponse } from "next/server";

export async function GET() {
  const rss = generateRssFeed();

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=600, s-maxage=600",
    },
  });
}
