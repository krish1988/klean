import type { Metadata } from "next";
import { Fraunces, Italiana, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Load Google Fonts
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kélane Créations · Tapissier d'ameublement · Rixheim",
  description: "Kélane Créations — Tapissier d'ameublement à Rixheim. Rideaux, stores, coussins, fauteuils, restauration. Artisanat sur-mesure en Alsace.",
  keywords: ["tapissier", "ameublement", "Rixheim", "Alsace", "rideaux", "stores", "coussins", "fauteuils", "restauration", "sur-mesure"],
  authors: [{ name: "Kélane Créations" }],
  openGraph: {
    title: "Kélane Créations · Tapissier d'ameublement · Rixheim",
    description: "Kélane Créations — Tapissier d'ameublement à Rixheim. Rideaux, stores, coussins, fauteuils, restauration. Artisanat sur-mesure en Alsace.",
    url: "https://kelanecreations.fr",
    siteName: "Kélane Créations",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${italiana.variable} ${outfit.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
