import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import CursorTrail from "@/components/aurora/CursorTrail";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://northernlightsappraisals.ca"),
  title: {
    default: "Northern Lights Appraisals — Real Estate Appraisers in Edmonton & Calgary",
    template: "%s — Northern Lights Appraisals"
  },
  description:
    "Fast, accurate and reliable real estate appraisals across Alberta and British Columbia. Family-owned, RECA licensed, CNAREA members. Trusted by Canada's largest banks, lenders, and law firms since 2012.",
  keywords: [
    "Edmonton appraiser",
    "Calgary appraiser",
    "real estate appraisal Alberta",
    "residential appraisal",
    "commercial appraisal",
    "farm appraisal",
    "acreage appraisal",
    "RECA licensed appraiser",
    "CNAREA",
    "Northern Lights Appraisals"
  ],
  openGraph: {
    title: "Northern Lights Appraisals",
    description:
      "Smart real estate decisions begin with certainty. Real estate appraisals across Alberta & BC.",
    url: "https://northernlightsappraisals.ca",
    siteName: "Northern Lights Appraisals",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: "Northern Lights Appraisals"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Northern Lights Appraisals",
    description:
      "Fast, accurate and reliable real estate appraisals across Alberta and BC.",
    site: "@NLAppraisals",
    images: ["/og-default.svg"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Northern Lights Appraisals",
  legalName: "Northern Lights Real Estate Consulting Ltd.",
  url: "https://northernlightsappraisals.ca",
  telephone: "+1-780-757-2060",
  email: "info@northernlightsappraisals.ca",
  foundingDate: "2012",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6417 112 Ave NW",
    addressLocality: "Edmonton",
    addressRegion: "AB",
    postalCode: "T5W 0N9",
    addressCountry: "CA"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.5461,
    longitude: -113.4938
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:30"
    }
  ],
  sameAs: [
    "https://facebook.com/NorthernLightsAppraisals",
    "https://twitter.com/NLAppraisals",
    "https://youtube.com/user/EdmontonAppraisals"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${GeistSans.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ink text-frost min-h-screen overflow-x-hidden">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-aurora-green focus:text-obsidian focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        <CursorTrail />
        <Header />
        <PageTransition>
          <main id="main">{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
