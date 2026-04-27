import type { Metadata, Viewport } from "next";
import "./globals.css";
import { headers } from "next/headers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C9922A",
};

export const metadata: Metadata = {
  title: {
    default: "VillageCircle — Where Conviction Becomes Code",
    template: "%s | VillageCircle",
  },
  description:
    "Philosophy hub and concept incubator of the BoldMind ecosystem. Daily drops, the 5 Rivers doctrine, and tomorrow's products growing as stories before they become code.",
  metadataBase: new URL("https://villagecircle.ng"),
  applicationName: "VillageCircle",
  authors: [{ name: "VillageCircle", url: "https://villagecircle.ng" }],
  keywords: ["VillageCircle", "BoldMind", "Nigerian tech", "Vibe Coders", "conviction", "philosophy", "daily drops"],
  openGraph: {
    title: "VillageCircle — Where Conviction Becomes Code",
    description: "Philosophy hub and concept incubator of the BoldMind ecosystem. Daily drops at 8:30 AM.",
    url: "https://villagecircle.ng",
    siteName: "VillageCircle",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VillageCircle — Where Conviction Becomes Code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VillageCircle",
    description: "Where conviction becomes code.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "ca-pub-1390336761729977",
  },
  other: {
    "google-adsense-account": "ca-pub-1390336761729977",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const portalAttr = headersList.get("x-portal") ?? "";

  return (
    <html lang="en" {...(portalAttr ? { "data-portal": portalAttr } : {})}>
      <head>
        {/* Google AdSense — villagecircle.ng pub-1390336761729977 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1390336761729977"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
