import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Daily Dose of Content - Social Media Marketing",
    template: "%s | Daily Dose of Content"
  },
  description: "Professionelle Social Media Betreuung für mittelständische Unternehmen. Content-Erstellung, Videoproduktion und Social Media Management aus einer Hand.",
  keywords: ["Social Media Marketing", "Content Erstellung", "Videoproduktion", "Mönchengladbach", "Social Media Betreuung", "Instagram Marketing", "Facebook Marketing"],
  authors: [{ name: "Amelie Klein" }],
  creator: "Daily Dose of Content",
  publisher: "Daily Dose of Content",
  metadataBase: new URL('https://dailydoseofcontent.de'),
  icons: {
    icon: '/logo-favicon.ico',
    shortcut: '/logo-favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://dailydoseofcontent.de',
    title: 'Daily Dose of Content - Social Media Marketing Mönchengladbach',
    description: 'Professionelle Social Media Betreuung für mittelständische Unternehmen in Mönchengladbach. Content-Erstellung, Videoproduktion und Social Media Management aus einer Hand.',
    siteName: 'Daily Dose of Content',
    images: [
      {
        url: '/LogoNeu.png',
        width: 1200,
        height: 630,
        alt: 'Daily Dose of Content Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily Dose of Content - Social Media Marketing Mönchengladbach',
    description: 'Professionelle Social Media Betreuung für mittelständische Unternehmen in Mönchengladbach.',
    images: ['/LogoNeu.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Daily Dose of Content",
    "description": "Professionelle Social Media Betreuung für mittelständische Unternehmen",
    "url": "https://dailydoseofcontent.de",
    "telephone": "+49-157-58774195",
    "email": "klein@dailydoseofcontent.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Im Schlaun 11",
      "addressLocality": "Mönchengladbach",
      "postalCode": "41189",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.1805",
      "longitude": "6.4428"
    },
    "founder": {
      "@type": "Person",
      "name": "Amelie Klein"
    },
    "sameAs": [
      "https://instagram.com/dailydoseofcontent",
      "https://facebook.com/dailydoseofcontent"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "51.1805",
        "longitude": "6.4428"
      },
      "geoRadius": "50000"
    },
    "priceRange": "$$",
    "paymentAccepted": "Bank Transfer, PayPal",
    "currenciesAccepted": "EUR",
    "openingHours": "Mo-Fr 09:00-18:00",
    "vatID": "DE408017118",
    "legalName": "Daily Dose of Content - Amelie Klein"
  }

  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/logo-favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
