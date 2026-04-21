import type { Metadata } from "next";
import "./globals.css";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "VillageCircle — Where Conviction Becomes Code",
  description:
    "Philosophy hub and concept incubator of the BoldMind ecosystem. Daily drops, the 5 Rivers doctrine, and tomorrow's products growing as stories before they become code.",
  metadataBase: new URL("https://villagecircle.ng"),
  openGraph: {
    title: "VillageCircle",
    description: "Where conviction becomes code. Daily drops at 8:30 AM.",
    url: "https://villagecircle.ng",
    siteName: "VillageCircle",
    locale: "en_NG",
    type: "website",
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
      <body>
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
