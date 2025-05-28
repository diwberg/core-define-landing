import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FacebookPixel from "./components/FacebookPixel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Core Define 3.0 - Transforme seu Core em 21 Dias",
  description: "Transforme seu core em apenas 21 dias com o método revolucionário Core Define 3.0. Treinos de 15 minutos para mulheres ocupadas. Resultados garantidos ou seu dinheiro de volta!",
  keywords: [
    "core define",
    "exercícios para mulheres",
    "exercícios para mães",
    "fortalecimento do core",
    "treino pós-parto",
    "desafio 21 dias",
    "exercícios em casa",
    "treino funcional",
    "transformação corporal"
  ],
  authors: [{ name: "Amandha - Core Define" }],
  creator: "Amandha",
  publisher: "Core Define",
  metadataBase: new URL('https://cuidandodemim.org'),
  openGraph: {
    title: "Core Define 3.0 - Transforme seu Core em 21 Dias",
    description: "Método revolucionário para mulheres que querem transformar o corpo em casa, com apenas 15 minutos por dia. Mais de 1.000 mulheres já transformaram suas vidas!",
    url: "https://cuidandodemim.org",
    siteName: "Core Define",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Core Define 3.0 - Transformação em 21 Dias",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Define 3.0 - Transforme seu Core em 21 Dias",
    description: "Método revolucionário para mulheres que querem transformar o corpo em casa, com apenas 15 minutos por dia.",
    images: ["/og-image.jpg"],
    creator: "@coredefine",
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="BR" />
        <meta name="geo.country" content="Brazil" />
        <meta name="language" content="Portuguese" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Core Define 3.0",
              "description": "Programa de fortalecimento do core em 21 dias para mulheres",
              "brand": {
                "@type": "Brand",
                "name": "Core Define"
              },
              "offers": {
                "@type": "Offer",
                "price": "97.00",
                "priceCurrency": "BRL",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "5000"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased scroll-smooth`}>
        <FacebookPixel />
        {children}
      </body>
    </html>
  );
}
