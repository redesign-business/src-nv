import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sierra Ridge Construction | Custom Home Builder Sparks, NV",
  description:
    "Northern Nevada's premier custom home builder. New construction, remodeling, kitchen & bathroom renovations. Licensed & insured. Free estimates.",
  openGraph: {
    title: "Sierra Ridge Construction | Custom Home Builder Sparks, NV",
    description:
      "Northern Nevada's premier custom home builder. New construction, remodeling, kitchen & bathroom renovations. Free estimates.",
    url: "https://src-nv.redesign.business",
    siteName: "Sierra Ridge Construction",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sierra Ridge Construction | Custom Home Builder Sparks, NV",
    description:
      "Northern Nevada's premier custom home builder. New construction, remodeling, kitchen & bathroom renovations. Free estimates.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
