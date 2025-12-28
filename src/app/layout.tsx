import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import "./globals.css";

const siteUrl = process.env.SITE_URL || "https://ninomin-blog.vercel.app";

export const metadata: Metadata = {
  title: "Personal Blog – Ryo Ninomiya",
  description: "個人の学びや経験を発信するための技術ブログ",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "NINOMIN BLOG",
    description: "個人の学びや経験を発信するための技術ブログ",
    url: siteUrl,
    siteName: "NINOMIN BLOG",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `${siteUrl}/api/og?title=NINOMIN%20BLOG&description=${encodeURIComponent("個人の学びや経験を発信するための技術ブログ")}`,
        width: 1200,
        height: 630,
        alt: "NINOMIN BLOG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NINOMIN BLOG",
    description: "個人の学びや経験を発信するための技術ブログ",
    creator: "@r_ninomin",
    images: [`${siteUrl}/api/og?title=NINOMIN%20BLOG&description=${encodeURIComponent("個人の学びや経験を発信するための技術ブログ")}`],
  },
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/rss.xml", title: "NINOMIN BLOG RSS Feed" },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K1Z9NBHTDT"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K1Z9NBHTDT');
          `}
        </Script>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
