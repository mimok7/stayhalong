import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PWAProvider } from "./components/PWAProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stay Halong - 하롱베이 크루즈 여행",
  description: "하롱베이 현지 전문 한국 여행사 스테이하롱. 세계자연유산 하롱베이에서 즐기는 프리미엄 크루즈 여행과 현지 서비스를 제공합니다.",
  keywords: "하롱베이, 크루즈, 베트남 여행, 한국 여행사, 하롱베이 크루즈, 스테이하롱",
  authors: [{ name: "Stay Halong" }],
  creator: "Stay Halong",
  publisher: "Stay Halong",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Stay Halong - 하롱베이 크루즈 여행",
    description: "하롱베이 현지 전문 한국 여행사 스테이하롱. 세계자연유산 하롱베이에서 즐기는 프리미엄 크루즈 여행과 현지 서비스를 제공합니다.",
    url: "https://stayhalong.com",
    siteName: "Stay Halong",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stay Halong - 하롱베이 크루즈 여행",
    description: "하롱베이 현지 전문 한국 여행사 스테이하롱. 세계자연유산 하롱베이에서 즐기는 프리미엄 크루즈 여행과 현지 서비스를 제공합니다.",
    creator: "@stayhalong",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Stay Halong" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PWAProvider>
          {children}
        </PWAProvider>
      </body>
    </html>
  );
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#2563eb",
};
