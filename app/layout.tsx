import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFrame } from "./components/SiteFrame";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dikchya Rai | Portfolio",
  description:
    "A minimal undergraduate portfolio for Dikchya Rai, focused on learning, research, and creative work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
