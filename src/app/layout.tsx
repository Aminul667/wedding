import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Mohammed Numan & Saima Nahar — Walima";
const description =
  "You are warmly invited to the wedding / walima of Mohammed Numan & Saima Nahar — " +
  "Sunday 25th October 2026, 12:00pm at Pearl Banqueting Suite, 38 Manningham Lane, Bradford BD1 3EA.";

// Link previews need absolute image URLs, so they point at the live domain.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://numan.heddlebits.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Numan & Saima's Walima",
    title,
    description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
