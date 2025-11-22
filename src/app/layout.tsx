import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Blog – Ryo Ninomiya",
  description: "個人の学びや経験を発信するための技術ブログ",
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
