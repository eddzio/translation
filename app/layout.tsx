import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Translation effect · Ed Orozco",
  description: "A UI experiment.",
  openGraph: {
    title: "Translation effect · Ed Orozco",
    description: "A UI experiment.",
    url: 'https://translation-sigma-eight.vercel.app/',
    siteName: 'Translation effect',
    images: [
      {
        url: '/og-image.png',  // Place this image in your public folder
        width: 1200,
        height: 630,
        alt: 'Translation effect',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
