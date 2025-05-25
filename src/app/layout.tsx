import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name.full} - Empowering Dreams, Building Futures`,
  description: `${siteConfig.name.full} - ${siteConfig.description}`,
  metadataBase: new URL(siteConfig.url),
  keywords: ["cooperative society", "credit society", "urban bank", "loans", "deposits", "financial services", "banking", "Maharashtra"],
  authors: [{ name: siteConfig.name.full }],
  creator: siteConfig.name.full,
  publisher: siteConfig.name.legal,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.ico', sizes: '16x16' },
    ],
    apple: [
      { url: '/favicon.ico', sizes: '180x180' }
    ],
    shortcut: ['/favicon.ico']
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-site-verification", // Add your Google verification code
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name.full,
    title: `${siteConfig.name.full} - Empowering Dreams, Building Futures`,
    description: `${siteConfig.name.full} - ${siteConfig.description}`,
    images: [
      {
        url: "/og-social.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name.full,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name.full,
    description: siteConfig.description,
    images: "/og-social.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/layout/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <JsonLd />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
