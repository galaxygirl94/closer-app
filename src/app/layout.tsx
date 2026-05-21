import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "Closer",
  title: "Closer — Toward her, not away",
  description:
    "A redirect tool for couples. When the pull comes, open Closer and turn toward your partner.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Closer",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
  // Legacy iOS (pre-16.4) full-screen flag; Next emits only the modern
  // `mobile-web-app-capable` tag, so add the Apple-prefixed one explicitly.
  other: { "apple-mobile-web-app-capable": "yes" },
};

export const viewport: Viewport = {
  themeColor: "#c8674a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {children}
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
