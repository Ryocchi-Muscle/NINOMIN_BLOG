import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "NINOMIN BLOG";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          background: "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
        }}
      >
        {/* タイトル */}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 30 ? 48 : 56,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.3,
            wordBreak: "break-word",
          }}
        >
          {title}
        </div>

        {/* サイト名 */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: "#3b82f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              N
            </div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "#e2e8f0",
              }}
            >
              NINOMIN BLOG
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
