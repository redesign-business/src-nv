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
  metadataBase: new URL("https://src-nv.redesign.business"),
  alternates: {
    canonical: "/",
  },
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
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-3 focus:bg-accent focus:text-white focus:rounded-lg focus:text-base focus:font-semibold focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Sierra Ridge Construction",
              image: "https://src-nv.redesign.business/logo.png",
              "@id": "https://src-nv.redesign.business",
              url: "https://src-nv.redesign.business",
              telephone: "775-686-9109",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sparks",
                addressRegion: "NV",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
              },
              sameAs: ["https://www.src-nv.com"],
            }),
          }}
        />
      </body>
    </html>
  );
}
